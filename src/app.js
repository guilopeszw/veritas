const money = value => new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(value);
const root = document.querySelector("main");
const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const normalized = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const names = {lula:"Lula",flavio:"Flávio Bolsonaro"};
let data;
let toastTimer;
const topics = [
  {id:"economia",name:"Custo de vida e emprego"},
  {id:"saude",name:"Saúde"},
  {id:"educacao",name:"Educação"},
  {id:"seguranca",name:"Segurança"},
  {id:"instituicoes",name:"Instituições e corrupção"},
  {id:"moradia",name:"Moradia e saneamento"},
  {id:"infraestrutura",name:"Transportes e energia"},
  {id:"ambiente",name:"Ambiente e agricultura"},
  {id:"direitos",name:"Direitos e proteção social"},
  {id:"internacional",name:"Relações internacionais"},
  {id:"cultura",name:"Cultura e esporte"}
];
const href = route => `#/${route}`;
const topicName = id => topics.find(t=>t.id===id)?.name || "Contexto";
function portrait(c, small=false){
  return `<span class="portrait ${small?"small":""}"><img class="${esc(c.id)}" src="${esc(c.photo)}" alt="Foto oficial de ${esc(c.name)}" width="120" height="150" loading="lazy"></span>`;
}
const heading = (label,title,intro="") => `<div class="page-head"><div class="breadcrumb"><a href="#/">Início</a> / ${["Perfil","Perfis","Sobre","Assuntos","Propostas"].includes(label)?esc(label):`<a href="#/assuntos">Assuntos</a> / ${esc(label)}`}</div><h1>${esc(title)}</h1>${intro?`<p>${esc(intro)}</p>`:""}</div>`;
function sourceList(sources=[]){
  return `<ul class="sources">${sources.map(s=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)} ↗</a>${s.locator?`<small>${esc(s.locator)}</small>`:""}</li>`).join("")}</ul>`;
}
function card(block){
  if(block.kind==="Checagem")return factCheckCard(block);
  if(block.kind!=="Proposta")return fullCard(block);
  return `<details class="proposal-card" id="${esc(block.id)}" ${location.hash.startsWith("#/conteudo/")?"open":""}><summary><span class="proposal-tags"><span class="pill">${esc(names[block.candidate])}</span></span><h3>${esc(block.title)}</h3><p>${esc(block.summary)}</p><span class="proposal-toggle">O que propõe e o que pode mudar</span><button class="share" data-share="${esc(block.id)}" aria-label="Compartilhar: ${esc(block.title)}" title="Compartilhar">${shareIcon}</button></summary><div class="proposal-body">${fullCard(block,true)}</div></details>`;
}
function assetList(block){
  const groups=block.assets.reduce((groups,a)=>{(groups[a.group]??=[]).push(a);return groups},{});
  return `<section class="declared-assets" aria-label="Bens declarados em ${esc(block.assetYear)}"><div class="assets-total"><span>${esc(names[block.candidate])} · ${esc(block.assetYear)} · ${block.assets.length} itens</span><strong>${money(block.assetTotal)}</strong></div>${Object.entries(groups).map(([group,items])=>`<details class="asset-group"><summary><span><strong>${esc(group)}</strong><small>${items.length} ${items.length===1?"item":"itens"}</small></span><span class="asset-value">${money(items.reduce((sum,a)=>sum+Math.round(a.value*100),0)/100)}</span></summary><ul>${items.map(a=>`<li><div><strong>${esc(a.type)}</strong><p>${esc(a.description)}</p></div><span class="asset-value">${money(a.value)}</span></li>`).join("")}</ul></details>`).join("")}</section>`;
}
function channelPlatform(raw){
  try{const host=new URL(raw).hostname.toLowerCase();for(const [part,label] of [["instagram.com","Instagram"],["facebook.com","Facebook"],["x.com","X"],["tiktok.com","TikTok"],["youtube.com","YouTube"],["whatsapp.com","WhatsApp"],["threads.com","Threads"],["kwai.com","Kwai"],["spotify.com","Áudio e podcasts"],["deezer.","Áudio e podcasts"],["amazon.com","Áudio e podcasts"],["flickr.com","Flickr"]])if(host===part||host.endsWith("."+part)||host.includes(part)&&part.endsWith("."))return label;return "Outros sites e plataformas"}catch{return "Outros sites e plataformas"}
}
function platformIcon(platform){
 const paths={Instagram:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/>',Facebook:'<path d="M14 21v-8h3l.5-4H14V7c0-1 .5-2 2-2h2V2h-3c-3 0-5 2-5 5v2H7v4h3v8"/>',X:'<path d="m4 3 12 18h4L8 3H4Zm0 18L20 3"/>',YouTube:'<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 6 3-6 3Z"/>',TikTok:'<path d="M14 3v12a4 4 0 1 1-4-4M14 3c1 4 3 5 6 5v4c-3 0-5-2-6-3"/>',Threads:'<path d="M19 7C17 1 5 1 4 10s6 13 12 10 6-9-1-10-10 3-5 5 7-1 6-6-5-4-7-2"/>'};
 return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[platform]||'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c5 5 5 13 0 18-5-5-5-13 0-18Z"/>'}</svg>`;
}
function channelLink(c,featured=false){
 let valid=false;try{const u=new URL(c.url);valid=["http:","https:"].includes(u.protocol)&&!u.username&&!u.password}catch{}
 const title=featured?c.platform:c.title;
 return valid?`<a class="${featured?"social-primary":"channel-link"}" href="${esc(c.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(c.platform+": "+c.title)}">${featured?platformIcon(c.platform):""}<span><strong>${esc(title)}</strong><small>${esc(featured?c.title:c.platform)}</small></span><span aria-hidden="true">↗</span></a>`:`<span class="channel-link"><span><strong>${esc(c.title)}</strong><small>Endereço incompleto no registro do TSE.</small></span></span>`;
}
function channelList(block){
 const main=block.channels.filter(c=>c.primary),other=block.channels.filter(c=>!c.primary);
 const order=["Instagram","YouTube","X","Facebook","TikTok","Threads"];
 main.sort((a,b)=>order.indexOf(a.platform)-order.indexOf(b.platform));
 return `<div class="declared-channels"><div class="primary-socials" aria-label="Redes principais">${main.map(c=>channelLink(c,true)).join("")}</div><details class="asset-group campaign-channels"><summary><span><strong>Outros sites e páginas de campanha</strong><small>${other.length} endereços declarados</small></span></summary><ul>${other.map(c=>`<li>${channelLink(c)}</li>`).join("")}</ul></details></div>`;
}
const shareIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 16V3m-5 5 5-5 5 5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg>';
function fullCard(block,nested=false){
  const approved=block.status==="approved";
  return `<article class="article" id="${esc(block.id)}${nested?"-detail":""}">
    <div class="article-top">${block.kind==="Escala 6x1"&&location.hash.startsWith("#/6x1")?"":`<span class="pill primary">${esc(block.kind||topicName(block.topic))}</span>`}${data.mode==="review"?`<span class="pill ${approved?"":"draft"}">${approved?"Texto aprovado":"Texto em revisão"}</span><span class="review-id">${esc(block.id)}</span>`:""}</div>
    ${block.attribution?`<p class="check-attribution">${esc(block.attribution)}${block.eventDate?` · ${esc(block.eventDate)}`:""}</p>`:""}<h3><a href="${href(`conteudo/${block.id}`)}">${esc(block.title)}</a></h3>
    ${block.statusSteps?`<ul class="status-steps">${block.statusSteps.map(s=>`<li><strong>${esc(s.label)}</strong><span>${esc(s.value)}</span></li>`).join("")}</ul>`:""}
    ${block.quote?`<blockquote><p>“${esc(block.quote)}”</p><cite>${esc(block.quoteAttribution||"Trecho do programa de governo")}</cite></blockquote>`:""}
    ${(block.paragraphs||[block.summary]).map(p=>`<p>${esc(p)}</p>`).join("")}
    ${block.assets?.length?assetList(block):""}
    ${block.channels?.length?channelList(block):""}
    ${block.officialSource?`<p class="official-source"><a href="${esc(block.officialSource.url)}" target="_blank" rel="noopener noreferrer">${esc(block.officialSource.label)} ↗</a><small>${esc(block.officialSource.locator)}</small></p>`:""}
    ${block.implications?.length?`<section class="proposal-implications" aria-label="Implicações e condições"><h4>Na prática</h4><dl>${block.implications.map(item=>`<div><dt>${esc(item.label)}</dt><dd>${esc(item.text)}</dd></div>`).join("")}</dl></section>`:""}
    ${block.context?`<p class="context">${esc(block.context)}</p>`:""}
    ${block.relatedRoute?`<p><a class="text-link" href="${href(block.relatedRoute)}">${esc(block.relatedLabel||"Ver a evolução deste assunto")} ↗</a></p>`:""}
    <div class="article-actions"><details><summary>Ver ${block.sources.length===1?"fonte":`${block.sources.length} fontes`}</summary>${sourceList(block.sources)}</details>${!nested?`<button class="share" data-share="${esc(block.id)}" aria-label="Compartilhar: ${esc(block.title)}" title="Compartilhar">${shareIcon}</button>`:""}</div>
    ${data.mode==="review"&&(block.verification!=="checked"||block.editorialNotes)?`<details class="editorial-notes"><summary>Notas da revisão editorial</summary><p>${esc(block.editorialNotes||"Conferência documental ainda pendente. Este bloco não está liberado para publicação.")}</p></details>`:""}
    <div class="date">Consultado em ${esc(block.checkedAt||"20/10/2026")}${block.candidate?` · ${esc(block.actorLabel||names[block.candidate])}`:""}</div>
  </article>`;
}
function candidate(id){
  const c=data.candidates.find(c=>c.id===id);
  return `<article class="candidate"><div class="candidate-identity">${portrait(c)}<div><span class="candidate-number">${esc(c.party)} · ${esc(c.number)}</span><h3>${esc(c.name)}</h3><a class="photo-credit" href="${esc(c.photoSource)}" target="_blank" rel="noopener noreferrer">Foto oficial · ${esc(c.photoCredit)}</a></div></div><p>${esc(c.intro)}</p><a class="full-link" href="${href(`perfil/${c.id}`)}"><span>Conhecer o perfil</span><span class="profile-arrow" aria-hidden="true"><span>→</span><span>→</span></span></a><button class="share" data-share="${esc(c.id)}-biografia" aria-label="Compartilhar perfil de ${esc(c.name)}" title="Compartilhar perfil">${shareIcon}</button></article>`;
}
function empty(message){
  return `<div class="empty"><strong>Apuração em andamento</strong><p>${esc(message)}</p></div>`;
}
function home(){
  return `<section class="hero brazil-hero" aria-labelledby="hero-title"><div class="brazil-accordion" role="group" aria-label="Paisagens do Brasil — selecione uma imagem">${data.heroPhotos.map((p,i)=>`<button class="brazil-panel ${i===0?"is-active":""}" data-hero-panel="${i}" aria-pressed="${i===0}" aria-label="Ver ${esc(p.place)}"><img src="${esc(p.src)}" alt="" ${i===0?'fetchpriority="high"':'loading="eager"'} decoding="async"></button>`).join("")}</div><div class="brazil-hero-shade" aria-hidden="true"></div><div class="brazil-hero-copy"><div class="eyebrow">INFORMAÇÃO PARA A SUA ESCOLHA</div><h1 id="hero-title">Conheça quem quer <br>governar o Brasil.</h1><p>Compare trajetórias e propostas. Entenda o que está em jogo, com explicações claras e fontes à vista.</p><div class="brazil-hero-actions"><a class="button" href="#/inicio/candidatos-title">Conhecer os candidatos <span aria-hidden="true">↓</span></a><a href="#/propostas">Comparar propostas ↗</a></div></div></section><details class="hero-photo-credits"><summary>Sobre as imagens</summary><p>Paisagens brasileiras. As imagens não representam apoio dos autores ou das instituições a candidatos ou ao Veritas. Recorte, compressão e filtro de cor uniforme aplicados na apresentação.</p><ul>${data.heroPhotos.map(p=>`<li><a href="${esc(p.source)}" target="_blank" rel="noopener noreferrer">${esc(p.place)}</a> — ${esc(p.author)} · <a href="${esc(p.licenseUrl)}" target="_blank" rel="noopener noreferrer">${esc(p.license)}</a>. A adaptação visual desta fotografia mantém essa licença.</li>`).join("")}</ul></details>
  <section class="section" aria-labelledby="candidatos-title"><div class="section-heading"><div><div class="eyebrow">UM PONTO DE PARTIDA</div><h2 id="candidatos-title">Quem são os candidatos</h2></div><a class="text-link" href="#/propostas">Comparar propostas ↗</a></div><div class="two-col">${candidate("lula")}${candidate("flavio")}</div></section>
  <section class="section start-guide" aria-labelledby="guide-title"><div><div class="eyebrow">DO SEU JEITO</div><h2 id="guide-title">Por onde começar?</h2><p>Três caminhos para entender a eleição.</p></div><div class="guide-steps"><details name="veritas-guide" open><summary><span>01</span> Conheça</summary><div><h3>Veja quem quer representar você.</h3><p>Explore a trajetória, os bens declarados e a atuação de cada candidato.</p><a href="#/inicio/candidatos-title">Conhecer os candidatos <span aria-hidden="true">→</span></a></div></details><details name="veritas-guide"><summary><span>02</span> Compare</summary><div><h3>O mesmo assunto, os dois lados.</h3><p>Busque temas que afetam sua vida e entenda o que cada um propõe mudar.</p><a href="#/propostas">Comparar propostas <span aria-hidden="true">→</span></a></div></details><details name="veritas-guide"><summary><span>03</span> Confira</summary><div><h3>Entenda o que está por trás de uma fala.</h3><p>Veja a conclusão, a explicação e a fonte das informações que circulam.</p><a href="#/checagens">Ir para É verdade? <span aria-hidden="true">→</span></a></div></details></div></section>
  <section class="section" aria-labelledby="temas-title"><div class="section-heading"><div><h2 id="temas-title">O que importa para você</h2><p>Escolha um assunto e veja os dois lados, com as mesmas perguntas.</p><p><a class="text-link" href="#/debate">Entenda IA nas campanhas, bets, Bolsa Família e segurança ↗</a></p></div></div><div class="topic-grid">${topics.map((t,i)=>`<a class="topic-tile" href="${href(`tema/${t.id}`)}"><strong>${esc(t.name)}</strong><span class="arrow" aria-hidden="true">↗</span></a>`).join("")}</div></section>
  <section class="section" aria-labelledby="acompanhe-title"><div class="section-heading"><div><div class="eyebrow">DA DECLARAÇÃO AO REGISTRO</div><h2 id="acompanhe-title">Acompanhe os temas em debate</h2><p>O que foi dito, quais atos estão documentados e o que ainda falta comprovar.</p></div></div>${dossierLinks()}</section>
  <section class="section feature"><div><div class="eyebrow">SOBERANIA NACIONAL</div><h2>Como o Brasil se coloca<br>no mundo?</h2><p>Quem citou quais políticas, o que elas significam e quais resultados foram observados nos países de origem.</p><small class="landscape-credit"><a href="https://commons.wikimedia.org/wiki/File:Mar2024._Len%C3%A7%C3%B3is_Maranhenses,_Maranh%C3%A3o,_Brazil_Lencois_07.jpg" target="_blank" rel="noopener noreferrer">Lençóis Maranhenses · Ridiculopathy</a> · <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noopener noreferrer">CC0 1.0</a> · recorte e degradê</small></div><div class="feature-links"><a href="#/soberania">Conheça as posições dos dois <span aria-hidden="true">↗</span></a>${data.blocks.filter(b=>b.kind==="Economia explicada").slice(1,3).map(b=>`<a href="${href(`conteudo/${b.id}`)}">${esc(b.title)}<span aria-hidden="true">↗</span></a>`).join("")}</div></section>
  <section class="section"><div class="method-strip"><div><strong>01 · A fonte fica à vista</strong><p>Abra os documentos e confira de onde veio cada informação.</p></div><div><strong>02 · Proposta não é resultado</strong><p>Compromissos, fatos e interpretações são apresentados com contexto.</p></div><div><strong>03 · Lacunas são identificadas</strong><p>O que ainda não foi confirmado não aparece como conclusão.</p></div></div><p style="margin-top:25px"><a class="text-link" href="#/sobre">Conheça nossa metodologia ↗</a></p></section>
  ${data.mode==="review"?`<aside class="notice"><strong>Esta edição está em preparação.</strong> Os perfis ainda não incluem toda a cobertura acordada de histórico, mudanças de posição e debates. <a href="#/cobertura">Ver o estado da apuração</a>.</aside>`:""}`;
}
function profile(id){
  const c=data.candidates.find(c=>c.id===id);
  if(!c)return notFound();
  const own=data.blocks.filter(b=>b.candidate===id);
  const bio=own.filter(b=>b.kind==="Trajetória");
  return `<div class="profile-heading">${portrait(c)}${heading("Perfil",c.name,c.fullName)}</div><div class="profile-layout"><aside class="side-nav" aria-label="Seções do perfil"><a href="#/perfil/${id}/trajetoria">Quem é</a><a href="#/perfil/${id}/patrimonio">Patrimônio e canais</a><a href="#/propostas">Comparar propostas ↗</a><a href="#/perfil/${id}/historico">Atuação e resultados</a><a href="#/perfil/${id}/mudancas">Escala 6x1</a><a href="#/perfil/${id}/transparencia">Abertura de sigilos</a><a href="#/perfil/${id}/controversias">Controvérsias</a><a href="#/perfil/${id}/checagens">É verdade?</a><a href="#/perfil/${id}/internacional">Soberania nacional</a></aside><div><div id="trajetoria">${bio.map(card).join("")}</div><h2 id="patrimonio" class="subheading">Patrimônio e canais públicos</h2>${own.filter(b=>b.kind==="Patrimônio e canais").map(card).join("")}
  <h2 id="historico" class="subheading">Atuação e resultados</h2>${own.filter(b=>b.kind==="Atuação e histórico").map(card).join("")}${empty("Os episódios acima documentam participação e decisões. A análise dos efeitos sobre a população e a atualização das situações processuais ainda estão em andamento.")}
  <h2 id="mudancas" class="subheading">Fim da escala 6x1</h2><p><a class="text-link" href="#/6x1">Ver a linha do tempo dos dois candidatos ↗</a></p>${own.filter(b=>b.kind==="Escala 6x1").map(card).join("")||empty("Estamos reunindo declarações datadas e atos oficiais.")}
  <h2 id="transparencia" class="subheading">Abertura de sigilos</h2>${own.filter(b=>b.kind==="Transparência").map(card).join("")||empty("A promessa e sua realização estão sendo verificadas separadamente.")}
  <h2 id="controversias" class="subheading">Controvérsias documentadas</h2>${own.filter(b=>b.kind==="Controvérsia").map(card).join("")||empty("As alegações e as respostas dos envolvidos estão em apuração.")}
  <h2 id="checagens" class="subheading">É verdade?</h2><p>Falas e conteúdos sobre o candidato. A autoria de cada declaração e a conclusão do veículo responsável estão identificadas.</p>${own.filter(b=>b.kind==="Checagem").sort((a,b)=>(b.date||"").localeCompare(a.date||"")).map(card).join("")||`<p>Não temos checagens disponíveis nesta seção.</p>`}<h2 id="internacional" class="subheading">Soberania nacional</h2>${own.filter(b=>(b.kind==="Políticas internacionais"||b.kind==="Soberania nacional")).map(card).join("")||`<p>Veja <a href="#/soberania">as referências a Milei e Trump e seus contextos</a>.</p>`}</div></div>`;
}
function dossierLinks(){
  return `<div class="dossier-grid"><a href="#/6x1"><span class="eyebrow">LINHA DO TEMPO</span><h3>Fim da escala 6x1</h3><p>Declarações, propostas e votos de cada candidato.</p><span aria-hidden="true">↗</span></a><a href="#/transparencia"><span class="eyebrow">ACOMPANHAMENTO</span><h3>Abertura de sigilos</h3><p>O que foi prometido e o que foi efetivamente disponibilizado.</p><span aria-hidden="true">↗</span></a><a href="#/controversias"><span class="eyebrow">EVIDÊNCIAS E RESPOSTAS</span><h3>Controvérsias</h3><p>Banco Master, alegações, defesas e decisões.</p><span aria-hidden="true">↗</span></a></div>`;
}
function chronology(blocks){
  const events=blocks.filter(b=>b.candidate&&b.date).sort((a,b)=>a.date.localeCompare(b.date)||a.candidate.localeCompare(b.candidate));
  const title=b=>{const t=b.title.replace(/^(Flávio Bolsonaro|Flávio|Lula)\s+/,'');return t.charAt(0).toUpperCase()+t.slice(1);};
  return `<p class="trail-intro">Selecione uma etapa para ler os detalhes e conferir as fontes.</p><ol class="continuous-trail straight-trail">${events.map(b=>{const c=data.candidates.find(c=>c.id===b.candidate);return `<li class="trail-step ${esc(b.candidate)}"><details class="trail-event" name="timeline-events"><summary aria-label="${esc(b.date.split('-').reverse().join('/'))} · ${esc(title(b))} · ${esc(b.actorLabel||c.name)}"><span class="trail-face">${portrait(c,true)}</span><span class="trail-label"><time datetime="${esc(b.date)}">${esc(b.date.split('-').reverse().join('/'))}</time><strong>${esc(title(b))}</strong><small>${esc(b.actorLabel||c.name)}</small><span class="trail-action"><span class="trail-open">Ver detalhes ＋</span><span class="trail-close">Fechar detalhes −</span></span></span></summary><div class="trail-content"><button class="trail-panel-close" data-close-trail>Fechar detalhes ×</button><p class="context">${esc(b.date.split('-').reverse().join('/'))} · ${esc(b.actorLabel||c.name)}</p>${card({...b,title:title(b)})}</div></details></li>`}).join('')}</ol>`;
}
function dossier(page){
  const config={
    "6x1":{title:"Fim da escala 6x1",intro:"Quem defendeu o quê, quais atos praticou e quando. Declaração, proposta e voto são registros diferentes.",kind:"Escala 6x1"},
    transparencia:{title:"Abertura de sigilos",intro:"Prometer divulgar, autorizar acesso e publicar documentos são etapas diferentes. Acompanhamos cada uma sem transformar ausência de comprovação em prova de descumprimento.",kind:"Transparência"},
    controversias:{title:"Controvérsias documentadas",intro:"O que está sendo alegado, quais evidências existem, o que os envolvidos respondem e qual é a situação conhecida. Uma acusação não equivale a culpa.",kind:"Controvérsia"},
    soberania:{title:"Soberania nacional",intro:"Como cada candidato descreve a autonomia do Brasil, suas relações com outros países e as referências para a política econômica.",kind:"Soberania nacional"}
  }[page];
  const blocks=data.blocks.filter(b=>b.kind===config.kind);
  const general=blocks.filter(b=>!b.candidate);
  let content="";
  if(page==="6x1"){
    content=chronology(blocks)+`<section class="reading"><h2 class="subheading">Entenda a regra aprovada</h2>${general.map(card).join("")}</section>`;
  }else if(page==="transparencia"){
    content=`<div class="reading">${general.map(card).join("")}</div><div class="two-col">${["lula","flavio"].map(id=>`<section><h2 class="subheading">${esc(names[id])}</h2>${blocks.filter(b=>b.candidate===id).map(card).join("")||empty("Apuração em andamento.")}</section>`).join("")}</div>`;
  }else if(page==="soberania"){
    content=`<div class="two-col">${["lula","flavio"].map(id=>`<section><h2 class="subheading">${esc(names[id])}</h2>${blocks.filter(b=>b.candidate===id).map(card).join("")||empty("Posições em apuração.")}</section>`).join("")}</div><section class="reading"><h2 class="subheading">Quem citou quais referências?</h2><p>O Veritas não recomenda voto. Aplicamos o mesmo critério aos dois: identificar a pessoa que falou, a medida citada e os efeitos conhecidos. Uma fala de assessor não será apresentada como fala do candidato.</p><p><strong>Lula:</strong> nesta apuração, documentamos posições sobre autonomia e parceiros internacionais. Não temos dados sobre uma proposta específica de importar uma política estrangeira nem sobre o uso da expressão “modelo Lula”.</p><p><strong>Flávio:</strong> a referência a Milei abaixo veio de Daniella Marques, de sua equipe; a declaração atribuída diretamente ao candidato trata de aproximação comercial com EUA e Argentina. Essas duas coisas não são equivalentes a copiar integralmente um modelo.</p><h2 class="subheading">Argentina e Estados Unidos: medidas e resultados</h2><p>As referências estrangeiras são examinadas por medida e período. Adaptar uma política não demonstra, por si só, perda de soberania.</p>${data.blocks.filter(b=>b.kind==="Políticas internacionais").map(card).join("")}</section>`;
  }else{
    content=`<div class="reading">${blocks.map(card).join("")||empty("Os registros estão sendo reunidos.")}</div>`;
  }
  return `${heading("Acompanhe",config.title,config.intro)}${content}`;
}
function rallyCoverage(){
  const rows=data.rallyCities||[];
  const pct=value=>typeof value==="number"?`${value.toLocaleString('pt-BR',{maximumFractionDigits:2,minimumFractionDigits:2})}%`:"Não informado";
  return `${heading("Manifestações","Nas ruas e nas urnas","Atos de campanha, estimativas de público e resultados municipais do primeiro turno de 2026.")}<div class="reading">${data.blocks.filter(b=>b.kind==="Manifestações"&&!b.id.startsWith("atos-ocorrencias")).map(card).join("")}</div><h2>Resultados nas cidades dos atos</h2><p>Percentuais dos votos válidos para presidente, conforme as fontes indicadas em cada cidade. A conferência direta no TSE permanece pendente onde a fonte é uma reportagem. Os percentuais de Lula e Flávio não necessariamente somam 100%: havia outros candidatos.</p><p><strong>Como ler:</strong> vencer nas urnas mostra apoio eleitoral no município; não informa quantos eleitores foram ao ato. Transporte, organização, data, local e visitantes de outras cidades também influenciam a presença.</p><p>Sem medidas equivalentes de público, ainda não é possível testar uma relação quantitativa entre votação e presença nas ruas.</p><label for="rally-filter">Encontrar cidade</label><input id="rally-filter" type="search" placeholder="Digite o nome ou a UF" class="rally-filter"><p id="rally-count" aria-live="polite">${rows.length} localidades</p><div class="rally-table-wrap"><table class="rally-table"><caption>Cidades identificadas nas reportagens consultadas · ${rows.length} registros</caption><thead><tr><th scope="col">Cidade e atos</th><th scope="col">Lula</th><th scope="col">Flávio</th><th scope="col">Resultado local</th><th scope="col">Público e contexto</th></tr></thead><tbody>${rows.map(r=>`<tr data-city="${esc(normalized(r.city+" "+r.uf))}"><th scope="row">${esc(r.city)}${r.uf?` · ${esc(r.uf)}`:""}<small>${(r.acts||[]).map(a=>`${esc(names[a.candidate]||a.candidate)}${a.date?` · ${esc(a.date.split("-").reverse().join("/"))}`:""}`).join('<br>')}</small></th><td>${pct(r.lulaPct)}</td><td>${pct(r.flavioPct)}</td><td>${esc(r.winner||"Vencedor não confirmado")}${typeof r.lulaPct==='number'&&typeof r.flavioPct==='number'?`<small>Diferença entre os dois: ${Math.abs(r.lulaPct-r.flavioPct).toLocaleString('pt-BR',{maximumFractionDigits:2})} pontos percentuais.</small>`:""}</td><td>${esc(r.crowd||"Sem estimativa de público comparável nesta apuração.")}<small>${esc(r.notes||"")}</small>${sourceList(r.sources||[])}</td></tr>`).join("")}</tbody></table></div><div class="reading"><h2>Relatos de violência</h2>${data.blocks.filter(b=>b.kind==="Manifestações"&&b.id.startsWith("atos-ocorrencias")).map(card).join("")}<p>Não há, nesta edição, levantamento concluído de ocorrências para todos esses atos. Isso não significa que não houve violência.</p><p>Cada episódio precisa identificar data e local, quem teria agido, evidências, resposta dos envolvidos e eventual investigação. Ações atribuídas a agentes do Estado serão distinguidas das atribuídas a participantes ou terceiros. Um relato não será tratado como conclusão sobre todos os presentes.</p></div>`;
}
function debateCoverage(){
  return `${heading("Debates","O que foi discutido no debate","Band · 18 de outubro de 2026. Propostas identificadas, checagens e limites da análise.")}<div class="reading"><aside class="notice"><strong>Percentuais ainda não calculados.</strong> A página do Aos Fatos anuncia uma transcrição, mas a íntegra com os tempos não ficou disponível na leitura consultada. Uma seleção de falas não permite dizer quem passou mais tempo atacando.</aside><h2>Como vamos medir</h2><p><strong>Uso do tempo:</strong> segundos de fala classificados como proposta, prestação de contas, crítica ao adversário, resposta ou outro conteúdo, divididos pelo tempo audível de cada candidato. Falas mistas precisam ser separadas em trechos, com horários para conferência.</p><p><strong>Cobertura do programa:</strong> compromissos únicos apresentados no debate divididos por todos os compromissos de uma versão identificada do programa. Repetir uma promessa não aumenta a contagem. Esse inventário ainda não está concluído.</p><p>Criticar uma política ou cobrar um resultado não é automaticamente ataque pessoal. As categorias e os trechos classificados precisam passar por revisão antes de gerar números.</p>${data.blocks.filter(b=>b.kind==="Debate").map(card).join("")}<p><a href="https://www.aosfatos.org/noticias/checamos-lula-flavio-bolsonaro-debate-band/" target="_blank" rel="noopener noreferrer">Consultar a cobertura do Aos Fatos ↗</a></p></div>`;
}
function factCheckCard(b){
 const date=b.date?b.date.split("-").reverse().join("/"):"Data não disponível";
 return `<article class="article fact-card" id="${esc(b.id)}"><p class="check-attribution">${esc(b.attribution)} · ${esc(names[b.candidate])}</p><h3>${esc(b.title)}</h3><div class="check-conclusion"><span>Conclusão · síntese da avaliação do Aos Fatos</span><p>${esc(b.checkConclusion||b.summary)}</p></div><details class="check-explanation"><summary>Entenda a checagem</summary><h4>Explicação</h4>${(b.paragraphs||[b.summary]).map(p=>`<p>${esc(p)}</p>`).join("")}${b.relatedRoute?`<p><a href="${href(b.relatedRoute)}">${esc(b.relatedLabel||"Ver contexto")} ↗</a></p>`:""}<p><a href="#/perfil/${b.candidate}/checagens">Ver no perfil de ${esc(names[b.candidate])} ↗</a></p></details><div class="check-source"><strong>Fontes</strong>${sourceList(b.sources)}<p class="date">Publicação da checagem: <time datetime="${esc(b.date)}">${date}</time>${b.eventDate?` · Fala ou evento citado: ${esc(b.eventDate)}`:""}</p></div><button class="share" data-share="${esc(b.id)}" aria-label="Compartilhar: ${esc(b.title)}" title="Compartilhar">${shareIcon}</button>${data.mode==="review"?`<details class="editorial-notes"><summary>Revisão editorial pendente</summary><p>${esc(b.editorialNotes)}</p></details>`:""}</article>`;
}
function factChecks(candidateId){
 const blocks=data.blocks.filter(b=>b.kind==="Checagem"&&(!candidateId||b.candidate===candidateId)).sort((a,b)=>(b.date||"").localeCompare(a.date||""));
 const group=(category,title,intro)=>`<section class="check-section" id="${category}"><h2>${title}</h2><p class="context">${intro}</p>${blocks.filter(b=>!b.historical&&b.checkCategory===category).map(card).join("")||empty("Não temos registros nesta categoria para o filtro escolhido.")}</section>`;
 const historic=blocks.filter(b=>b.historical);
 return `${heading("É verdade?","É verdade?","Entenda o que foi verificado sobre falas dos candidatos e conteúdos que circulam nas redes.")}<nav class="topic-tabs" aria-label="Filtrar por candidato relacionado">${[["","Todos"],["lula","Lula"],["flavio","Flávio Bolsonaro"]].map(([id,label])=>`<a href="#/checagens${id?"/"+id:""}" ${id===(candidateId||"")?'aria-current="page"':""}>${label}</a>`).join("")}</nav><nav class="check-jumps" aria-label="Categorias de verificação"><a href="#/checagens/${candidateId||"todos"}/falas">O que os candidatos disseram</a><a href="#/checagens/${candidateId||"todos"}/redes">O que circula nas redes</a></nav><p class="context">As conclusões são do Aos Fatos, resumidas pelo Veritas. O filtro indica a pessoa relacionada ao conteúdo, não necessariamente quem o publicou. Esta seleção não é um ranking de quem fala a verdade.</p><div class="reading">${group("falas","O que os candidatos disseram","Declarações em entrevistas. Uma entrevista pode conter afirmações corretas e incorretas; mostramos essa diferença.")}${group("redes","O que circula nas redes","Fotos, vídeos e alegações compartilhadas online. Conteúdo sobre um candidato não significa conteúdo criado por ele.")}${historic.length?`<details class="check-archive"><summary>Arquivo histórico · antes de 2026 (${historic.length})</summary><p>Registros antigos, separados da campanha atual.</p>${historic.map(card).join("")}</details>`:""}</div>`;
}

function subjectHub(){
  const entries=[['tema/saude','Saúde','Propostas, políticas existentes e critérios para avaliar o atendimento.'],['checagens','É verdade?','Declarações, contexto e conclusões dos veículos.'],['6x1','Fim da escala 6x1','Acompanhe declarações, propostas e votos em uma trilha.'],['debates','Debates','Propostas apresentadas e checagens das falas.'],['manifestacoes','Manifestações','Público, resultados locais e ocorrências documentadas.'],['soberania','Soberania nacional','Quem citou quais políticas e o que elas significam.'],['transparencia','Abertura de sigilos','O que foi prometido e o que foi comprovado.'],['controversias','Controvérsias','Alegações, evidências, respostas e decisões.']];
  const explainers=data.blocks.filter(b=>b.kind==="Tema em debate");
  return `${heading('Assuntos','O que você quer entender?','Escolha um assunto. As explicações, os registros e as fontes ficam juntos.')}<section class="subject-section"><h2>Em discussão</h2><div class="subject-list">${entries.map(([route,title,description])=>`<a href="${href(route)}"><div><h3>${title}</h3><p>${description}</p></div><span aria-hidden="true">↗</span></a>`).join('')}</div></section><section class="subject-section"><h2>Entenda o contexto</h2><div class="subject-list">${explainers.map(b=>`<a href="#/conteudo/${esc(b.id)}"><div><h3>${esc(b.shortTitle||b.title)}</h3><p>${esc(b.summary)}</p></div><span aria-hidden="true">↗</span></a>`).join('')}<a href="#/entenda"><div><h3>Economia explicada</h3><p>Inflação, impostos, gastos e juros em linguagem simples.</p></div><span aria-hidden="true">↗</span></a></div></section>`;
}
function campaignTopics(){return subjectHub();}
const proposalPairs = [
 ["Salário mínimo","lula-renda","flavio-salario-minimo"],
 ["Prontuário digital","lula-saude-digital","flavio-prontuario-cpf"],
 ["Consultas e atendimento especializado","lula-especialistas","flavio-saude"],
 ["Saúde das mulheres","lula-saude-mulheres","flavio-saude-mulheres"],
 ["Atendimento nos postos de saúde","lula-atencao-basica","flavio-atencao-basica"],
 ["Vacinação","lula-vacinacao","flavio-vacinacao"],
 ["Saúde mental","lula-saude-mental","flavio-saude-mental"],
 ["Creches","lula-creches","flavio-creches-cuidados"],
 ["Alfabetização","lula-alfabetizacao","flavio-educacao"],
 ["Conectividade nas escolas","lula-adultos-conectividade","flavio-internet-servicos"],
 ["Ensino técnico e profissional","lula-institutos-federais","flavio-tecnico-fies"],
 ["Limites para gastos públicos","lula-regra-fiscal","flavio-ajuste-fiscal"],
 ["Impostos","lula-impostos","flavio-reforma-tributaria"],
 ["Crédito e pequenos negócios","lula-pequenos-negocios","flavio-empreendedorismo"],
 ["Moradia","lula-moradia","flavio-habitacao"],
 ["Água e saneamento","lula-saneamento","flavio-regional-saneamento"],
 ["Serviços públicos digitais","lula-digital","flavio-digital-estado"],
 ["Desmatamento","lula-desmatamento","flavio-desmatamento"],
 ["Minerais críticos","lula-minerais","flavio-minerais"],
 ["Combustíveis","lula-petroleo-combustiveis","flavio-energia-infra"],
 ["Transporte coletivo","lula-mobilidade","flavio-mobilidade"],
 ["Fomento à cultura","lula-fomento-cultural","flavio-cultura"],
 ["Esporte","lula-esporte","flavio-esporte"],
 ["Defesa e tecnologia","lula-defesa-tecnologia","flavio-defesa-exterior"]
];
function proposalResults(topic,query="",candidate=""){
  const all=data.blocks.filter(b=>b.kind==="Proposta");
  const matches=b=>(!topic||b.topic===topic)&&(!candidate||b.candidate===candidate)&&normalized([b.title,b.summary,...(b.paragraphs||[]),...(b.implications||[]).map(i=>i.text)].join(" ")).includes(normalized(query.trim()));
  const paired=new Set(proposalPairs.flatMap(p=>p.slice(1)));
  const rows=[...proposalPairs.map(([label,...ids])=>({label,blocks:ids.map(id=>all.find(b=>b.id===id)).filter(Boolean)})),...all.filter(b=>!paired.has(b.id)).map(b=>({label:b.title,blocks:[b]}))];
  let count=0;
  const sections=topics.map(t=>{
    const body=rows.filter(r=>r.blocks[0]?.topic===t.id).map(r=>{
      if(!r.blocks.some(matches))return "";
      const displayed=r.blocks.filter(b=>(!candidate||b.candidate===candidate));count+=displayed.length;
      return `<section class="proposal-comparison"><h3 class="comparison-label">${esc(r.label)}</h3><div class="proposal-grid">${["lula","flavio"].filter(id=>!candidate||id===candidate).map(id=>{const b=displayed.find(b=>b.candidate===id);return b?card(b):`<div class="proposal-gap"><strong>${esc(names[id])}</strong><p>Não temos uma proposta correspondente cadastrada para esta medida.</p></div>`;}).join("")}</div></section>`;
    }).join("");
    return body?`<section class="proposal-group"><h2>${esc(t.name)}</h2>${body}</section>`:"";
  }).join("");
  return `<p role="status">${count} ${count===1?"proposta":"propostas"} nesta seleção${query.trim()&&!candidate?" · Inclui a proposta correspondente para comparação":""}</p>${sections||empty("Nenhuma proposta encontrada. Tente outro termo ou limpe os filtros.")}`;
}

function topicGuideSections(id){
 const guide=data.topicGuides?.[id];if(!guide)return "";
 const history=(guide.history||[]).map(item=>{
  const block=data.blocks.find(b=>b.id===item.blockId),entry=block?.implications?.[item.implicationIndex];
  if(!entry)return "";
  return `<details class="topic-history-item"><summary>${esc(item.title)}</summary><p>${esc(entry.text)}</p><p><a href="#/conteudo/${esc(block.id)}">Ver a proposta e seu contexto ↗</a></p>${sourceList(block.sources.filter(s=>!s.url.includes('/arquivos/proposta-')))}</details>`;
 }).join("");
 const sources=[...new Map(data.blocks.filter(b=>b.topic===id).flatMap(b=>b.sources).map(s=>[s.url,s])).values()];
 return `<section class="topic-context" id="historico"><h2>O que já existe</h2><p>Conheça as políticas que ajudam a entender o ponto de partida das propostas.</p>${history}</section><section class="topic-context" id="efeitos"><h2>Como saber se melhorou?</h2><p>${esc(guide.evaluation)}</p><ul class="topic-questions">${guide.questions.map(q=>`<li>${esc(q)}</li>`).join("")}</ul><p class="context">${esc(guide.dataLimit)}</p></section><section class="topic-context" id="fontes"><h2>Confira os documentos</h2><p>O programa registra a promessa. Leis e páginas dos serviços ajudam a explicar o que já existe.</p><details class="topic-history-item"><summary>Ver os documentos deste assunto (${sources.length})</summary>${sourceList(sources)}</details></section>`;
}
function themes(id){
  if(id&&!topics.some(t=>t.id===id))return notFound();
  const guide=data.topicGuides?.[id];
  const intro=guide?`${heading("Propostas",guide.title,guide.summary)}<nav class="topic-guide-nav" aria-label="Nesta página">${[["comparar","Comparar propostas"],["historico","O que já existe"],["efeitos","Como avaliar"],["fontes","Fontes"]].map(([anchor,label])=>`<a href="#/tema/${esc(id)}/${anchor}">${label}</a>`).join("")}</nav>`:heading("Propostas","Propostas, lado a lado.","Compare os resumos. Abra um card para entender a proposta e o que ela pode mudar na sua vida.");
  return `${intro}<section class="proposal-controls" id="comparar" aria-label="Buscar e filtrar propostas"><h2 class="proposal-search-title">Pesquisar e filtrar propostas</h2><label for="proposal-query">Pesquisar nas propostas</label><input id="proposal-query" type="search" placeholder="Ex.: salário mínimo, hospitais, educação"><div class="proposal-filters"><label>Assunto<select id="proposal-topic"><option value="">Todos os assuntos</option>${topics.map(t=>`<option value="${t.id}" ${id===t.id?"selected":""}>${esc(t.name)}</option>`).join("")}</select></label><label>Candidato<select id="proposal-candidate"><option value="">Os dois candidatos</option><option value="lula">Lula</option><option value="flavio">Flávio Bolsonaro</option></select></label><button type="button" id="proposal-reset">Limpar filtros</button></div></section><p class="context">Cada grupo reúne medidas sobre o mesmo assunto. Os compromissos podem ter alcance e condições diferentes.</p><div id="proposal-results">${proposalResults(id||"")}</div>${topicGuideSections(id)}`;
}
function updateProposalResults(){
 const results=document.getElementById("proposal-results");if(!results)return;
 results.innerHTML=proposalResults(document.getElementById("proposal-topic").value,document.getElementById("proposal-query").value,document.getElementById("proposal-candidate").value);
}
document.addEventListener("input",e=>{if(e.target.id==="proposal-query")updateProposalResults();});
document.addEventListener("change",e=>{if(e.target.id==="proposal-topic"){location.hash=e.target.value?`#/tema/${e.target.value}`:"#/propostas";}else if(e.target.id==="proposal-candidate")updateProposalResults();});
document.addEventListener("click",e=>{if(e.target.id==="proposal-reset"){document.getElementById("proposal-query").value="";document.getElementById("proposal-candidate").value="";if(location.hash.startsWith("#/tema/")){location.hash="#/propostas";}else{document.getElementById("proposal-topic").value="";updateProposalResults();}}});

function about(){
  return `<div class="reading">${heading("Sobre","Informação que você pode conferir.","O Projeto Veritas é uma iniciativa independente e não oficial, sem vínculo político declarado.")}<h2>Para que existe</h2><p>Tornar informações eleitorais mais fáceis de entender e conferir. Reunimos trajetória, propostas e documentos para que você explore os perfis e compare os assuntos que fazem parte da sua vida.</p><h2>Como selecionamos as informações</h2><p>Usamos os mesmos critérios para todos os candidatos: impacto na população, relevância para o cargo e qualidade da documentação. Isso não exige a mesma quantidade de críticas ou elogios.</p><p>Priorizamos documentos originais, registros públicos e falas completas. Fontes de campanha são identificadas como tal; sua existência não comprova a eficácia de uma proposta.</p><h2>Como tratamos afirmações</h2><ul><li><strong>Propostas:</strong> mostram intenções, não resultados garantidos.</li><li><strong>Acusações e decisões:</strong> investigação, acusação formal e decisão judicial são situações diferentes. Importam datas, recursos e a manifestação da pessoa citada.</li><li><strong>Mudanças de posição:</strong> exigem registros datados. A sequência de acontecimentos não comprova uma motivação.</li><li><strong>Economia:</strong> um resultado posterior a uma medida não é automaticamente causado por ela.</li></ul><h2>Revisão e transparência</h2><p>O responsável pelo Projeto Veritas revisa o conteúdo antes da publicação. Cada bloco informa fontes e data de consulta. Quando não temos dados, informamos essa ausência.</p><p>O Veritas não atribui nota geral aos candidatos nem recomenda voto. Não é um site da Justiça Eleitoral, de partido ou de candidatura.</p><h2>Correções e cobertura</h2><p>Correções relevantes serão registradas publicamente. O feedback é recebido pelas redes do responsável pelo projeto; esta edição não disponibiliza canal de contato próprio.</p><p><a href="#/cobertura">Consultar o estado da cobertura</a> · <a href="#/correcoes">Ver atualizações e correções</a></p><h2>Privacidade</h2><p>Esta implementação não exige cadastro e não utiliza ferramentas de publicidade ou rastreamento de audiência. Ao abrir fontes externas, aplicam-se as condições dos respectivos sites. As condições da hospedagem serão informadas antes da publicação.</p></div>`;
}
function coverage(){
  return `<div class="reading">${heading("Cobertura","O que esta edição cobre","A ausência de um bloco não indica que um fato não aconteceu. Indica que a apuração ainda não está concluída.")}<ul class="coverage-list">${[["Apresentação e biografias básicas","Textos aprovados"],["Explicações gerais de economia","Textos aprovados"],["Propostas e implicações",`${data.blocks.filter(b=>b.kind==="Proposta").length} blocos com fontes; expansão em revisão editorial`],["Atuação, resultados e controvérsias","Apuração pendente"],["Mudanças de posição","Registros e versões pendentes"],["Perguntas e respostas dos debates","Vídeo e timestamps pendentes"],["Efeitos de políticas internacionais citadas","Associação às falas e avaliação pendentes"]].map(([a,b])=>`<li><strong>${a}</strong><span>${b}</span></li>`).join("")}</ul><aside class="notice">A cobertura completa e a aprovação editorial são condições para o lançamento público. Esta prévia não representa a conclusão do produto.</aside></div>`;
}
function searchSuggestions(){
  const entries=[['checagens','É verdade?','Declarações e contexto'],['propostas','Propostas','Compare os compromissos dos candidatos'],['assuntos','Temas em debate','IA, bets, Bolsa Família e outros assuntos'],['6x1','Linha do tempo · 6x1','Declarações e atos em ordem de data'],['debates','Debates','Propostas e checagens'],['manifestacoes','Manifestações','Público, votos locais e ocorrências'],['soberania','Soberania nacional','Referências e políticas internacionais'],['transparencia','Abertura de sigilos','Declarações e documentos disponíveis'],['controversias','Controvérsias','Alegações, evidências e respostas']];
  return `<nav class="search-questions" aria-label="Perguntas para começar"><p class="suggestion-label">O que você quer entender?</p><a href="#/tema/saude">Como pretendem melhorar o atendimento de saúde? ↗</a><a href="#/tema/economia">O que propõem para o salário e o custo de vida? ↗</a><a href="#/6x1">Quem fez o quê pelo fim da escala 6x1? ↗</a></nav><nav class="search-suggestions" aria-label="Sugestões de assuntos"><p class="suggestion-label">Explore por assunto</p>${entries.map(([route,title,description])=>`<a href="${href(route)}"><span><strong>${title}</strong><small>${description}</small></span><span aria-hidden="true">↗</span></a>`).join('')}</nav>`;
}
function openSearch(){
  const existing=document.getElementById('search-dialog');if(existing){existing.showModal();return;}
  const previousFocus=document.activeElement;
  const dialog=document.createElement('dialog');dialog.id='search-dialog';dialog.className='search-dialog';dialog.setAttribute('aria-label','Pesquisar no Veritas');
  dialog.innerHTML=`<button class="search-close" aria-label="Fechar busca">Fechar ×</button><form class="search-form" id="popup-search-form" role="search"><label class="skip" for="popup-query">Buscar por candidato, assunto ou palavra</label><svg class="search-field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg><input id="popup-query" type="search" placeholder="Candidato, assunto ou palavra" maxlength="150" autocomplete="off"><button class="button" type="submit">Buscar</button></form><div id="popup-results" aria-live="polite"></div>${searchSuggestions()}`;
  const trigger=document.querySelector('.search-trigger').getBoundingClientRect();
  if(window.innerWidth>800){dialog.style.setProperty('--seek-left',`${Math.max(16,window.innerWidth-584)}px`);dialog.style.setProperty('--seek-top','84px');}
  document.body.append(dialog);
  let closing=false;
  const close=()=>{if(closing)return;closing=true;if(matchMedia('(prefers-reduced-motion: reduce)').matches){dialog.close();return;}dialog.classList.add('is-closing');setTimeout(()=>{if(dialog.open)dialog.close();},180);};dialog.querySelector('.search-close').onclick=close;
  dialog.addEventListener('keydown',event=>{if(event.key==='Escape'){event.preventDefault();event.stopPropagation();close();}},true);
  dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close();}if(e.target.closest('a'))close();});
  dialog.addEventListener('close',()=>{dialog.remove();document.body.classList.remove('search-is-open');previousFocus?.focus({preventScroll:true});},{once:true});
  function results(){const query=normalized(dialog.querySelector('input').value.trim());const matches=query?data.blocks.filter(b=>normalized([b.title,b.summary,...(b.paragraphs||[]),...(b.implications||[]).map(i=>i.text),b.shortTitle,names[b.candidate]||''].join(' ')).includes(query)):[];
    dialog.querySelector('#popup-results').innerHTML=query?`<p class="popup-result-count">${matches.length} ${matches.length===1?'resultado':'resultados'}</p>${matches.length?`<div class="popup-result-list">${matches.map(b=>`<a href="#/conteudo/${esc(b.id)}"><strong>${esc(b.title)}</strong><small>${esc(b.kind)}${b.candidate?' · '+esc(names[b.candidate]):''}</small></a>`).join('')}</div>`:'<p class="context">Não encontramos esse termo. Experimente outra palavra ou escolha um assunto abaixo.</p>'}`:'';
  }
  dialog.querySelector('input').addEventListener('input',results);dialog.querySelector('form').addEventListener('submit',e=>{e.preventDefault();results();});
  document.body.classList.add('search-is-open');dialog.showModal();dialog.querySelector('input').focus({preventScroll:true});
}
function search(query=""){
  const q=normalized(query.trim());
  const matches=q?data.blocks.filter(b=>normalized([b.title,b.summary,...(b.paragraphs||[]),b.context,...(b.implications||[]).map(i=>i.text),b.shortTitle,names[b.candidate]||"",topicName(b.topic)].join(" ")).includes(q)):[];
  return `${heading("Busca","Encontre uma informação","Busque por candidato, assunto ou palavra. A busca consulta somente o conteúdo desta edição.")}<form class="search-form" id="search-form" role="search"><label class="skip" for="query">Termo de busca</label><input id="query" name="q" type="search" value="${esc(query)}" placeholder="Ex.: saúde, emprego, inflação" maxlength="150"><button class="button" type="submit">Buscar</button></form>${searchSuggestions()}<div aria-live="polite">${q?`<p class="results-count">${matches.length} ${matches.length===1?"resultado":"resultados"} para “${esc(query)}”</p>${matches.map(card).join("")||`<div class="empty">Não encontramos esse termo. Tente outra palavra ou <a href="#/temas">explore os assuntos</a>.</div>`}`:`<div class="notice">Sugestões: <a href="#/busca?q=saúde">saúde</a>, <a href="#/busca?q=inflação">inflação</a>, <a href="#/busca?q=emprego">emprego</a>.</div>`}</div>`;
}
const notFound=()=>`${heading("Página não encontrada","Não encontramos esta página.","O endereço pode ter mudado ou o conteúdo ainda não estar disponível.")}<a class="button" href="#/">Voltar ao início</a>`;
function route(){
  const raw=location.hash.slice(1)||"/";
  const [path,query]=raw.split("?");
  const parts=path.split("/").filter(Boolean);
  let [page,id,anchor]=parts;
  if(page==="internacional")page="soberania";
  if(page==="perfis"){history.replaceState(null,"","#/");page=undefined;}
  if(page==="inicio"){anchor=id;page=undefined;}
  let html,title="Conheça. Compare. Confira.";
  if(!page)html=home();

  else if(page==="perfil"){html=profile(id);title=names[id]||"Perfil";}
  else if(page==="checagens"){html=factChecks(id==="todos"?undefined:id);title="É verdade?";}
  else if(page==="manifestacoes"){html=rallyCoverage();title="Manifestações";}
  else if(page==="debates"){html=debateCoverage();title="Análise dos debates";}
  else if(page==="debate"){html=campaignTopics();title="Temas em debate";anchor=id;}
  else if(page==="temas"||page==="assuntos"){html=subjectHub();title="Assuntos";}
  else if(page==="tema"||page==="propostas"){html=themes(id);title="Propostas";}
  else if(page==="sobre"){html=about();title="Sobre e metodologia";}
  else if(["6x1","transparencia","controversias","soberania"].includes(page)){html=dossier(page);title=page==="6x1"?"Fim da escala 6x1":page==="transparencia"?"Abertura de sigilos":page==="controversias"?"Controvérsias":"Soberania nacional";}
  else if(page==="entenda"){html=heading("Entenda","Economia sem atalhos","Explicações gerais para ler propostas e comparar políticas. Estes textos não são checagens de falas específicas.")+`<div class="reading">${data.blocks.filter(b=>b.kind==="Economia explicada").map(card).join("")}</div>`;title="Entenda";}
  else if(page==="busca"){html=search(new URLSearchParams(query).get("q")||"");title="Busca";}
  else if(page==="cobertura"){html=coverage();title="Estado da cobertura";}
  else if(page==="correcoes"){html=`<div class="reading">${heading("Correções","Um registro aberto.","Atualizações relevantes serão registradas com data, texto anterior, alteração e motivo.")}<div class="notice">Ainda não há correções de conteúdo publicado. O site está em preparação; os textos aprovados e as pendências estão na <a href="#/cobertura">página de cobertura</a>.</div></div>`;title="Atualizações e correções";}
  else if(page==="conteudo"){const block=data.blocks.find(b=>b.id===id);const back={"Checagem":"checagens","Manifestações":"manifestacoes","Debate":"debates","Tema em debate":"debate","Políticas internacionais":"soberania","Soberania nacional":"soberania","Escala 6x1":"6x1","Transparência":"transparencia","Controvérsia":"controversias"}[block?.kind];html=block?`<div class="reading">${heading("Documento",block.title)}${card(block)}<a class="text-link" href="${back?href(back):block.candidate?href(`perfil/${block.candidate}`):"#/entenda"}">← Voltar ao contexto</a></div>`:notFound();title=block?.title||"Conteúdo não encontrado";}
  else html=notFound();
  root.innerHTML=html;
  document.title=`${title} — Veritas`;
  document.querySelectorAll(".header nav a,.section-nav a").forEach(a=>{
    const key=a.hash.slice(2);
    const current=key===page||(key===""&&!page)||(key==="propostas"&&page==="tema")||(key==="assuntos"&&["checagens","temas","debate","debates","6x1","manifestacoes","soberania","transparencia","controversias","entenda","conteudo"].includes(page));
    if(current)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");
  });
  root.focus({preventScroll:true});
  if(page==="busca")document.getElementById("query")?.focus({preventScroll:true});
  if(anchor){document.getElementById(anchor)?.scrollIntoView();}else window.scrollTo(0,0);
}
document.addEventListener("submit",event=>{
  if(event.target.id!=="search-form")return;
  event.preventDefault();
  location.hash=`/busca?q=${encodeURIComponent(new FormData(event.target).get("q").trim())}`;
});
document.addEventListener("click",async event=>{
  const closeTrail=event.target.closest("[data-close-trail]");if(closeTrail){const details=closeTrail.closest("details");details.open=false;details.querySelector("summary").focus({preventScroll:true});return;}
  if(event.target.closest(".search-trigger")){event.preventDefault();openSearch();return;}
  if(event.target.closest("a.skip")){
    event.preventDefault();
    root.focus();
    root.scrollIntoView();
    return;
  }
  const button=event.target.closest("[data-share]");
  if(button)await openShare(button.dataset.share);
});
document.addEventListener('input',event=>{if(event.target.id!=="rally-filter")return;const query=normalized(event.target.value.trim());let count=0;document.querySelectorAll('[data-city]').forEach(row=>{row.hidden=!row.dataset.city.includes(query);if(!row.hidden)count++;});document.getElementById('rally-count').textContent=`${count} ${count===1?"localidade encontrada":"localidades encontradas"}`;});
function notifyShare(message){const toast=document.getElementById('toast');toast.textContent=message;toast.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.hidden=true,6000);}
async function openShare(id){
  const block=data.blocks.find(b=>b.id===id);if(!block)return;
  document.getElementById('share-dialog')?.remove();
  const url=new URL(location.href);url.hash=`/conteudo/${id}`;
  const dialog=document.createElement('dialog');dialog.id='share-dialog';dialog.className='share-dialog';
  dialog.innerHTML=`<form method="dialog"><button class="close-detail">Fechar ×</button></form><h2>Compartilhar informação</h2><p>${esc(block.title)}</p><p class="context">Baixe a imagem para publicar nos Stories do Instagram, ou use o menu do seu celular. A disponibilidade do Instagram depende do aparelho.</p>${data.mode==='review'?'<aside class="notice">Prévia editorial: a imagem será marcada como conteúdo em revisão. O link local só funciona neste computador.</aside>':''}<canvas width="1080" height="1920" aria-label="Prévia da imagem para compartilhar"></canvas><section class="stories-help"><h3>Compartilhar nos Stories</h3><p>Copie o link abaixo, salve ou compartilhe a imagem e, no Instagram, adicione o sticker <strong>Link</strong> para colar o endereço.</p><label for="story-url">Link deste card</label><input id="story-url" readonly value="${esc(url.href)}"><p class="context">O link clicável é adicionado no Instagram. O menu do aparelho pode oferecer o Instagram como destino.</p></section><div class="share-options"><button class="button" data-download>Baixar imagem para Stories</button><button class="button" data-native>Compartilhar imagem</button><button class="text-link" data-copy>Copiar link</button></div>`;
  document.body.append(dialog);dialog.showModal();
  const canvas=dialog.querySelector('canvas'),ctx=canvas.getContext('2d');
  ctx.fillStyle='#faf9f6';ctx.fillRect(0,0,1080,1920);ctx.fillStyle='#283446';ctx.fillRect(0,0,1080,18);
  let y=130;function text(t,size,color='#24282e'){ctx.font=`${size}px sans-serif`;ctx.fillStyle=color;let line='';for(const word of t.split(/\s+/)){const next=line?line+' '+word:word;if(ctx.measureText(next).width>900&&line){ctx.fillText(line,90,y);y+=size*1.4;line=word;}else line=next;}ctx.fillText(line,90,y);y+=size*1.4;}
  text('veritas.',64);y+=30;text(data.mode==='review'?'PRÉVIA · TEXTO EM REVISÃO':'INFORMAÇÃO COM FONTES',26);y+=45;
  text(block.title,50);y+=35;text(block.summary,34);y+=40;
  if(block.context)text(block.context,26);
  y=Math.max(y+50,1280);text('Fontes para conferir',28);
  let sourceSize=24;const sourceText=block.sources.map(source=>source.label+' · '+new URL(source.url).hostname).join(' | ');
  while(sourceSize>16){ctx.font=`${sourceSize}px sans-serif`;if(ctx.measureText(sourceText).width/900*sourceSize*1.4<1660-y)break;sourceSize--;}
  text(sourceText,sourceSize);
  y=1740;text(`Consulta: ${block.checkedAt||'20/10/2026'}`,24);text('Projeto Veritas · Independente e não oficial',24);text(data.mode==='review'?'Prévia local — ainda não publicada':url.origin,24);text(`Registro: ${id}`,20);
  const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
  if(!blob){notifyShare('Não foi possível gerar a imagem.');return;}
  const file=new File([blob],`veritas-${id}.png`,{type:'image/png'});
  dialog.querySelector('[data-download]').onclick=()=>{const address=URL.createObjectURL(blob),a=document.createElement('a');a.href=address;a.download=file.name;a.click();setTimeout(()=>URL.revokeObjectURL(address),1000);};
  const native=dialog.querySelector('[data-native]');native.hidden=!navigator.canShare?.({files:[file]});native.onclick=async()=>{try{await navigator.share({files:[file],title:block.title});}catch(e){if(e.name!=='AbortError')notifyShare('Não foi possível compartilhar. Use Baixar imagem.');}};
  dialog.querySelector('[data-copy]').onclick=async()=>{try{await navigator.clipboard.writeText(url.href);notifyShare(data.mode==='review'?'Link local copiado; só funciona neste computador.':'Link copiado.');}catch{notifyShare('Não foi possível copiar. Abra o card e copie o endereço.');}};
}

try{
  const embedded=document.getElementById("embedded-content");
  if(embedded){
    data=JSON.parse(embedded.textContent);
  }else{
    const response=await fetch("content.json",{cache:"no-cache"});
    if(!response.ok)throw new Error("Conteúdo indisponível");
    data=await response.json();
  }
  document.getElementById("review-banner").hidden=data.mode!=="review";
  window.addEventListener("hashchange",route);
  route();
}catch{
  root.innerHTML=`<div class="error"><h1>Não foi possível carregar o conteúdo.</h1><p>Confira sua conexão e tente recarregar a página. Nenhum texto substituto foi exibido.</p><button class="button" id="retry">Tentar novamente</button></div>`;
  document.getElementById("retry").addEventListener("click",()=>location.reload());
}

function closeSidebar(){document.querySelector(".app-sidebar").classList.remove("is-open");document.querySelector(".sidebar-toggle").setAttribute("aria-expanded","false");}
document.querySelector(".sidebar-toggle").addEventListener("click",event=>{const open=event.currentTarget.getAttribute("aria-expanded")!=="true";event.currentTarget.setAttribute("aria-expanded",String(open));document.querySelector(".app-sidebar").classList.toggle("is-open",open);});
document.querySelector(".sidebar-links").addEventListener("click",event=>{if(event.target.closest("a,button"))closeSidebar();});
document.addEventListener("keydown",event=>{if(event.key==="Escape"&&document.querySelector(".app-sidebar.is-open")){closeSidebar();document.querySelector(".sidebar-toggle").focus();}});


// Magnification follows pointer proximity; touch keeps stable targets.
const dockNav=document.querySelector(".app-sidebar nav");
const dockItems=[...dockNav.querySelectorAll("a")];
function resetDock(){dockItems.forEach(item=>{item.style.removeProperty("--dock-scale");item.style.removeProperty("--dock-lift")})}
dockNav.addEventListener("pointermove",event=>{
 if(!matchMedia("(min-width:801px) and (hover:hover) and (pointer:fine)").matches||matchMedia("(prefers-reduced-motion:reduce)").matches)return;
 dockItems.forEach(item=>{const box=item.getBoundingClientRect();const proximity=Math.max(0,1-Math.abs(event.clientY-(box.top+box.height/2))/110);item.style.setProperty("--dock-scale",String(1+proximity*.25));item.style.setProperty("--dock-lift","0px")});
});
dockNav.addEventListener("pointerleave",resetDock);
window.addEventListener("resize",resetDock);

function activateHeroPanel(button){
 if(!button)return;
 button.closest(".brazil-accordion").querySelectorAll(".brazil-panel").forEach(panel=>{const active=panel===button;panel.classList.toggle("is-active",active);panel.setAttribute("aria-pressed",String(active))});
}
root.addEventListener("pointerover",event=>{if(event.pointerType==="mouse")activateHeroPanel(event.target.closest("[data-hero-panel]"))});
root.addEventListener("focusin",event=>activateHeroPanel(event.target.closest("[data-hero-panel]")));
root.addEventListener("click",event=>activateHeroPanel(event.target.closest("[data-hero-panel]")));
root.addEventListener("keydown",event=>{const button=event.target.closest("[data-hero-panel]");if(!button||!["ArrowLeft","ArrowRight"].includes(event.key))return;event.preventDefault();const all=[...button.parentElement.querySelectorAll("button")];all[(all.indexOf(button)+(event.key==="ArrowRight"?1:all.length-1))%all.length].focus()});

root.addEventListener('scroll',event=>{const gallery=event.target;if(!gallery.matches?.('.brazil-accordion')||!matchMedia('(max-width:600px)').matches)return;const index=Math.round(gallery.scrollLeft/gallery.clientWidth);gallery.querySelectorAll('.brazil-panel').forEach((panel,i)=>{panel.classList.toggle('is-active',i===index);panel.setAttribute('aria-pressed',String(i===index));});},true);
