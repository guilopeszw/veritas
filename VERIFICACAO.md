# Verificação — 20/10/2026

- `node --check src/app.js`: passou.
- `python3 scripts/build.py`: passou, 178 blocos.
- Publicação permanece bloqueada pelas pendências editoriais.
- Layout verificado em janelas simuladas de 320 e 390 px; não em aparelho físico.
- Busca, menu, cards e navegação verificados no navegador local.

Não há auditoria completa WCAG nem teste em todos os navegadores. O CI valida
sintaxe e integridade, não a veracidade de afirmações. Cada bloco preserva suas
fontes, pendências e estado de aprovação em `src/content.json`.
