# Verificação — 20/10/2026

- `node --check src/app.js`: passou.
- `python3 scripts/build.py`: passou, 181 blocos.
- Publicação permanece bloqueada pelas pendências editoriais.
- Layout verificado em janelas simuladas de 320 e 390 px; não em aparelho físico.
- Busca, menu, cards e navegação verificados no navegador local.

Não há auditoria completa WCAG nem teste em todos os navegadores. O CI valida
sintaxe e integridade, não a veracidade de afirmações. Cada bloco preserva suas
fontes, pendências e estado de aprovação em `src/content.json`.

## Rodada Saúde — guia e comparações

- Saúde reúne 17 propostas e seis pares temáticos. Os três complementos permanecem em revisão.
- Sintaxe JS, build de prévia e git diff --check passaram.
- Browser: filtro de candidato retornou sete propostas de Flávio; busca por vacina restringiu a seleção; troca de assunto atualizou a rota e retirou o contexto anterior.
- Telas simuladas de 390 e 320 px: atalhos legíveis; cards começam fechados, abrir Lula mantém Flávio fechado; busca abre com perguntas e fundo desfocado. Não é teste em aparelho físico.
- Fixture temporária: guia pendente bloqueou publicação com os demais estados liberados; referência de contexto inexistente bloqueou o build.
- Ainda faltam conferência visual dos PDFs e revisão editorial; indicadores comparáveis não foram adicionados nesta rodada.
