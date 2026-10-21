"""Create an isolated, local-only audiovisual review desk (never part of site builds)."""
import hashlib
import json
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
WORKSPACE = ROOT.parents[1]
DEST = ROOT.parent / "revisao-debate"
ledger_bytes = (ROOT / "src/debate-atomic-audit.json").read_bytes()
ledger = json.loads(ledger_bytes)
corpus = json.loads((WORKSPACE / "work/program-final-replicas/corpus-paginas.json").read_text())
pages = {c["id"]: {p["pdfPage"]: p["text"] for p in c["pages"]} for c in corpus}
checks = {
    "PT-058-01": "A criação do ministério depende da aprovação da PEC? Preserve essa condição.",
    "PT-072-02": "A fala trata de formação de professores? Confirme os critérios citados para receber o incentivo.",
    "PT-105-01": "Há promessa de crédito para a economia criativa, e não apenas relato de algo já feito?",
    "PT-149-01": "Confirme a promessa de formação de jovens e as áreas de estudo mencionadas.",
    "PT-X029": "Confirme se promete continuidade e ganho acima da inflação, distinguindo isso do histórico de reajustes.",
    "PL-001": "Ele inclui facções e milícias? Classificação como terroristas não equivale, por si só, a pedir tropas estrangeiras.",
    "PL-006": "Confirme a idade de 14 anos e a restrição a crimes graves; diferencie das referências históricas a 16 anos.",
    "PL-007": "Confirme quais forças e quais fronteiras são citadas, sem acrescentar uma operação não anunciada.",
    "PL-010": "Ouça o número com atenção: mais de meio milhão de vagas? Anote exatamente o que ouviu; as reportagens divergem.",
    "PL-014": "A promessa é buscar aprovação no Congresso? Confirme essa dependência legislativa.",
    "PL-020": "Confirme integração de câmeras e bancos de dados, quantidade de câmeras e participação de estados e municípios.",
    "PL-064": "Quais locais receberiam internet? Confira escolas, hospitais e aldeias, sem inferir acesso gratuito universal.",
    "PL-074": "Confirme CPF, redes pública e privada e quais informações seriam integradas.",
    "PL-138:a": "No mesmo intervalo, identifique a promessa específica de telemedicina, separada do prontuário digital.",
    "PL-172": "A fala propõe conectar vagas e trabalhadores por informações de governo e empresas?",
    "PL-174:b": "Confirme capacitação e orientação a empreendedores, distinguindo de financiamento e abertura de empresas.",
    "PL-174:c": "Confira a promessa de financiamento e as condições de juros mencionadas neste trecho curto.",
    "PL-178": "Confirme se a Caixa seria usada como Banco da Prosperidade, e não apenas a menção de um nome de projeto.",
    "PT-075-05": "Ele especifica universidades públicas e interiorização, ou diz apenas mais universidades? Hoje a correspondência é parcial.",
    "PL-004:b": "Além de retomar territórios, promete os serviços públicos previstos no programa? Hoje a correspondência é parcial.",
    "PT-145-01": "A fala menciona apenas data centers ou também o conjunto de nuvem e IA do programa? Hoje é parcial.",
    "PL-017": "Ele fala da Marinha em Santos ou de Marinha e Aeronáutica permanentemente em portos e aeroportos? Hoje é parcial.",
    "PL-164:a": "Ele promete manter o Bolsa Família ou todos os programas sociais existentes? O programa tem alcance mais amplo.",
    "PL-174:a": "Ajudar a formalizar um negócio é diferente de simplificar as regras de abertura. Qual medida foi realmente prometida?",
}
rows = []
partial_ids = {m["atomicId"] for m in ledger["partialMatches"]}
for m in sorted(ledger["matches"] + ledger["partialMatches"], key=lambda x: (x["start"], x["atomicId"])):
    ident = m["atomicId"]
    rows.append({**m, "id": ident, "partial": ident in partial_ids,
                 "clipStart": max(0, m["start"] - 10),
                 "clip": "clips/" + ident.replace(":", "-") + ".mp4",
                 "check": checks[ident],
                 "programText": [{"page": p, "text": pages[m["candidate"]][p]} for p in m["programPages"]]})
assert len(rows) == 24 and len({r["id"] for r in rows}) == 24
payload = {"fingerprint": hashlib.sha256(ledger_bytes).hexdigest(), "items": rows}
DEST.mkdir(parents=True, exist_ok=True)
if "--clips" in sys.argv:
    source = WORKSPACE / "work/debate-video.mp4"
    expected = "e953667b51e76927d46cc921727858f5892a4f7217403f5dc4c2803706c1114a"
    assert hashlib.sha256(source.read_bytes()).hexdigest() == expected, "Wrong timestamp source video"
    (DEST / "clips").mkdir(exist_ok=True)

    def create_clip(item):
        subprocess.run([
            "ffmpeg", "-v", "error", "-ss", str(item["clipStart"]), "-i", str(source),
            "-t", str(item["end"] - item["clipStart"] + 15), "-vf", "scale=-2:480",
            "-c:v", "libx264", "-preset", "veryfast", "-crf", "25",
            "-c:a", "aac", "-b:a", "96k", "-movflags", "+faststart", "-threads", "2",
            "-y", str(DEST / item["clip"]),
        ], check=True)

    with ThreadPoolExecutor(max_workers=3) as executor:
        list(executor.map(create_clip, rows))
assert all((DEST / item["clip"]).is_file() for item in rows), "Run with --clips to create local media"
template = (ROOT / "scripts/debate_review_template.html").read_text()
(DEST / "index.html").write_text(template.replace("__REVIEW_DATA__", json.dumps(payload, ensure_ascii=False).replace("<", "\\u003c")))
print(f"Local-only review desk: {DEST / 'index.html'}")
