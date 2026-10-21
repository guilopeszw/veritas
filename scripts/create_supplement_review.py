"""Build the separate seven-excerpt review desk; never part of public builds."""
import hashlib,json,subprocess
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
ROOT=Path(__file__).resolve().parents[1]
WS=ROOT.parents[1]
DEST=ROOT.parent/'revisao-debate-complementar'
source=WS/'work/debate-video.mp4'
assert hashlib.sha256(source.read_bytes()).hexdigest()=='e953667b51e76927d46cc921727858f5892a4f7217403f5dc4c2803706c1114a'
findings=json.loads((WS/'work/debate-full-pass-current.json').read_text())['findings']
copy={
'supplement-pf-autonomy':('Autonomia da Polícia Federal','Ele promete autonomia e valorização da PF? Diz qual medida adotaria, ou fica na afirmação geral? Registre qualquer mecanismo que você ouvir.','Flávio defende autonomia e valorização da PF, sem detalhar neste trecho como faria isso.'),
'supplement-stf-appointments':('Critérios para indicar ministros do STF','Qual critério ele rejeita? Apresenta uma regra concreta de indicação ou apenas critica as escolhas de Lula? Não deduza quarentena ou procedimento que não seja dito.','Flávio critica os critérios das indicações ao STF. A fala não basta para atribuir uma nova regra de nomeação.'),
'supplement-temporary-leave':('Posição sobre saídas temporárias','Lula diz “justo” ou “injusto”? Confirme a defesa de saídas para bom comportamento e quais crimes ele exclui. Anuncia mudança na lei ou expressa sua posição?','Lula defende saídas temporárias com condições de comportamento e exclusões por tipo de crime. Precisamos confirmar exatamente quais condições ele cita.'),
'supplement-security-cooperation':('Cooperação internacional contra facções','Confirme troca de informações e combate ao financiamento. Quais países ou regiões cita? Nesse trecho pede tropas ou operação militar estrangeira, ou fala apenas de cooperação?','Flávio defende cooperação internacional, troca de informações e combate ao financiamento das facções. Isso, por si só, não é pedido de tropas estrangeiras.'),
'supplement-6x1-retention':('Manutenção do fim da escala 6x1','Ouça também a pergunta de Lula: a resposta “é óbvio que não” nega que Flávio revogaria o fim da 6x1? Há alguma condição ou ressalva?','Questionado sobre revogar o fim da escala 6x1, Flávio rejeita essa possibilidade. É preciso manter a pergunta junto da resposta.'),
'supplement-purchasing-power':('Meta de poder de compra do salário mínimo','Confirme o número: duas e meia ou três cestas básicas? A frase é uma meta futura para o salário mínimo ou descrição do resultado atual?','Lula manifesta a intenção de elevar o poder de compra do mínimo para duas e meia ou três cestas básicas; a meta não é resultado alcançado.'),
'supplement-state-enterprises':('Defesa de empresas estatais','Ele promete comprar de volta a BR ou só diz que seria possível depois de 2029? Separe a defesa de estatais fortes de um compromisso concreto de recompra.','Lula defende estatais fortes e produtivas. A referência à possibilidade de compra da BR não será tratada como promessa de recompra sem confirmação explícita.')}
items=[]
for f in sorted(findings,key=lambda x:x['start']):
 title,question,proposal=copy[f['id']]
 items.append({**f,'readerParaphrase':title,'check':question,'proposedText':proposal,'clipStart':max(0,f['start']-20),'clip':'clips/'+f['id']+'.mp4'})
payload={'fingerprint':hashlib.sha256(json.dumps(items,sort_keys=True).encode()).hexdigest(),'items':items}
DEST.mkdir(exist_ok=True);(DEST/'clips').mkdir(exist_ok=True)
def clip(i):
 out=DEST/i['clip']
 if out.exists():return
 subprocess.run(['ffmpeg','-v','error','-ss',str(i['clipStart']),'-i',str(source),'-t',str(i['end']-i['clipStart']+15),'-vf','scale=-2:480','-c:v','libx264','-preset','veryfast','-crf','25','-c:a','aac','-b:a','96k','-movflags','+faststart','-threads','2','-y',str(out)],check=True)
with ThreadPoolExecutor(max_workers=3) as pool:list(pool.map(clip,items))
t=(ROOT/'scripts/debate_review_template.html').read_text()
t=t.replace('Confira os 24 trechos do debate','Confira os 7 trechos complementares').replace('10 segundos antes','20 segundos antes').replace("key='veritas-debate-review-'","key='veritas-debate-supplement-review-'").replace('${done}/24','${done}/${items.length}')
t=t.replace("${m.partial?'Correspondência parcial — fora da contagem':'Correspondência direta — aguardando escuta'}",'Posição em conferência')
a=t.index('<details><summary>Ler as páginas');b=t.index('<fieldset class="checks">',a)
t=t[:a]+'<details open><summary>Redação proposta para sua revisão</summary><p>${escape(m.proposedText)}</p><small>Esta interpretação ainda não foi liberada. Confirmar o áudio não comprova resultados nem torna a fala uma proposta do programa oficial.</small></details>'+t[b:]
t=t.replace('Comparei a fala com o programa e conferi o ponto específico destacado acima.','Conferi a dúvida destacada e a redação proposta, preservando as condições da fala.').replace('Confirmar um trecho não autoriza publicar as porcentagens.','Confirmar um trecho não autoriza publicar o site.').replace('veritas-revisao-debate.json','veritas-revisao-complementar.json')
(DEST/'index.html').write_text(t.replace('__REVIEW_DATA__',json.dumps(payload,ensure_ascii=False).replace('<','\\u003c')))
print(DEST)
