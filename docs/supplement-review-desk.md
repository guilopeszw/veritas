# Supplemental debate review desk

Local only: http://127.0.0.1:4176/ . Seven findings from the full textual pass, ordered by original timestamp. Each includes a locally playable clip with20 seconds of preceding and15 seconds of following context, original-video link, exact review question, proposed Portuguese copy, checks and notes.

Build: `python3 scripts/create_supplement_review.py`. Serve: `python3 scripts/serve_supplement_review.py` (loopback only). Files live outside the website builds at `outputs/revisao-debate-complementar`. Browser storage has a separate fingerprint namespace. Synchronization writes only that directory’s `latest-review.json`; the earlier24-item desk and incorporation history are untouched. Confirmation is not deployment or editorial launch approval.

Validated all seven video metadata loads, navigation and no horizontal overflow at390px and1440px. Browser tests intercepted synchronization to avoid writing test answers. Original source video SHA-256 is checked before generating clips. No site publication performed.
