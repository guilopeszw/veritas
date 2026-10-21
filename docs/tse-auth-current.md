# Current TSE program authentication

Checked 21 October 2026 at 13:49 UTC. No publication or approval flags changed.

## Result: official binary identity confirmed

The [TSE open-data candidate dataset](https://dadosabertos.tse.jus.br/pt_BR/dataset/candidatos-2026) identifies a **BR – Proposta de governo** resource for President. Its download link points to the [official TSE CDN ZIP](https://cdn.tse.jus.br/estatistica/sead/odsele/proposta_governo/proposta_governo_2026_BR.zip). This link was followed from the official index, not guessed from an unofficial mirror. HTTPS certificate verification remained enabled.

The ZIP downloaded successfully with HTTP 200, Content-Type `application/zip`, 18,275,613 bytes. The saved response reports Last-Modified `Wed, 21 Oct 2026 06:49:21 GMT`, ETag `"116dd1d-65e54259b201a"`. ZIP SHA-256: `a76d41884bd004c67399bb7a754cb706588e200d253595cfd99e3b33c2c01c34`. ZIP members were decompressed successfully and hashed; both relevant PDF members match the previously examined archival files byte for byte.

| Program | Official ZIP member | Bytes | SHA-256 | Result |
| --- | --- | ---: | --- | --- |
| Lula / PT | `BR/2026BR280002542548_01.pdf` | 1,189,907 | `e1c162c20c81dafadf69b10bab230b5a6dc48f6b6c27c2cfce853b131a8bcc36` | Exact match with archived PT PDF |
| Flávio / PL | `BR/2026BR280002551544_01.pdf` | 1,940,855 | `7d1d95075e11e3c4113e8dcd502438049a34f5147a84cb0f746bf59046e477a4` | Exact match with archived PL PDF |

The [TSE second-round program page](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026-segundo-turno) separately links the [PT document](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pt) and [PL document](https://www.tse.jus.br/eleicoes/eleicoes-2026-content/arquivos/proposta-pl). The browsing tool reopened these as 84- and 76-page PDFs, consistent with the previously parsed copies. Local direct portal and `@@download/file` requests still returned 403 HTML; the CDN path resolves that binary-access limitation.

## What this resolves and what it does not

This resolves the prior limitation that the available PDFs were merely archival replicas corroborated against indexed text. The local files are now proven identical to files retrieved from the official TSE CDN in this dated snapshot. Previous textual/page checks performed on those bytes remain applicable.

This does not establish an immutable original registration version, the history of amendments, a time-of-registration hash, or a digital signature. The ZIP last-modified timestamp describes the download resource, not necessarily the date either candidate submitted or changed a program. It does not certify exhaustive semantic classification, historical claims in campaign documents, or audiovisual debate completeness.

## Reproducible local evidence

Artifacts are in workspace `work/tse-auth-current/`:

- `official-br.zip`: untouched official response body.
- `cdn.headers`: official HTTP response headers.
- `provenance.json`: retrieval URL, time, hashes, scope.
- `zip-manifest.json`: all member filenames, sizes, hashes and archive matches.
- `2026BR280002542548_01.pdf`: extracted PT member.
- `2026BR280002551544_01.pdf`: extracted PL member.
- `attempts.json` and `pt/pl-direct/download.headers/body`: bounded unsuccessful portal attempts retained as evidence.

This report supersedes only the unresolved direct-official-binary limitation in `program-final-attempt.md`; it does not rewrite its historical retrieval record.
