"""Loopback-only review server with byte ranges for accurate video seeking."""
import re
import json
import threading
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

DIRECTORY = Path(__file__).resolve().parents[2] / "revisao-debate-complementar"
WRITE_LOCK = threading.Lock()


class Handler(SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path != "/review-sync" or self.headers.get("Origin") != "http://127.0.0.1:4176":
            self.send_error(403)
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
            if not 0 < length <= 512_000:
                raise ValueError("Invalid size")
            payload = json.loads(self.rfile.read(length))
            assert re.fullmatch(r"[a-f0-9]{64}", payload["ledgerSha256"])
            assert payload["publicationApproved"] is False
            rows = payload["reviews"]
            assert len(rows) == 7 and len({r["id"] for r in rows}) == 7
            for row in rows:
                assert re.fullmatch(r"supplement-[a-z0-9-]+", row["id"])
                assert row["status"] in {"pending", "confirmed", "correction", "uncertain"}
                assert isinstance(row["notes"], str) and len(row["notes"]) <= 20_000
                assert all(x in [0, 1, 2] for x in row["checks"])
                assert row["status"] != "confirmed" or set(row["checks"]) == {0, 1, 2}
        except (ValueError, KeyError, TypeError, AssertionError):
            self.send_error(400, "Invalid review payload")
            return
        with WRITE_LOCK:
            target = DIRECTORY / "latest-review.json"
            temporary = DIRECTORY / "latest-review.tmp"
            temporary.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n")
            temporary.replace(target)
        self.send_response(204)
        self.end_headers()

    def send_head(self):
        self.remaining = None
        path = Path(self.translate_path(self.path))
        header = self.headers.get("Range")
        if not header or not path.is_file():
            return super().send_head()
        size = path.stat().st_size
        match = re.fullmatch(r"bytes=(\d*)-(\d*)", header)
        if not match or not any(match.groups()):
            self.send_error(416)
            return None
        first, last = match.groups()
        start = int(first) if first else max(0, size - int(last))
        end = min(size - 1, int(last)) if first and last else size - 1
        if start > end or start >= size:
            self.send_response(416)
            self.send_header("Content-Range", f"bytes */{size}")
            self.end_headers()
            return None
        stream = path.open("rb")
        stream.seek(start)
        self.remaining = end - start + 1
        self.send_response(206)
        self.send_header("Content-Type", self.guess_type(str(path)))
        self.send_header("Content-Length", str(self.remaining))
        self.send_header("Content-Range", f"bytes {start}-{end}/{size}")
        self.send_header("Accept-Ranges", "bytes")
        self.end_headers()
        return stream

    def copyfile(self, source, output):
        if self.remaining is None:
            return super().copyfile(source, output)
        while self.remaining:
            chunk = source.read(min(self.remaining, 64 * 1024))
            if not chunk:
                break
            output.write(chunk)
            self.remaining -= len(chunk)


if __name__ == "__main__":
    print("Review desk: http://127.0.0.1:4176/", flush=True)
    ThreadingHTTPServer(("127.0.0.1", 4176), partial(Handler, directory=str(DIRECTORY))).serve_forever()
