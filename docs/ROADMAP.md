# Roadmap — Fichário

**Fichário — Estude com inteligência. Evolua com estratégia.**

## Fase 0 — Fundação
- [x] Criar repositório
- [x] Definir público inicial e visão de expansão
- [x] Definir arquitetura inicial
- [x] Criar protótipo visual navegável inicial
- [x] Definir prioridade: edital + questões assistidas por IA
- [ ] Validar protótipo em celular e desktop
- [ ] Configurar ambiente e hospedagem

## Fase 1 — MVP integrado: edital + questões com IA
### Importação de edital
- [ ] Cadastrar concurso/prova
- [ ] Enviar PDF para armazenamento privado
- [ ] Validar formato e tamanho
- [ ] Extrair texto com referência de páginas
- [ ] Identificar disciplinas, tópicos e sub tópicos usando somente o documento
- [ ] Conferir, editar e confirmar a estrutura extraída

### Banco de questões com IA
- [ ] Cadastrar questões com origem e metadados
- [ ] Vincular questões aos tópicos confirmados do edital
- [ ] Gerar questões inéditas assistidas por IA, claramente identificadas
- [ ] Registrar fonte e status de validação de gabaritos e explicações
- [ ] Resolver questões e registrar respostas e tempo
- [ ] Permitir sinalizar questões e gabaritos incorretos

### Ciclo de aprendizagem
- [ ] Alimentar caderno de erros automaticamente
- [ ] Recomendar revisões com base no desempenho
- [ ] Exibir indicadores por disciplina e tópico

## Fase 2 — Preparação completa
- [ ] Flashcards e repetição espaçada
- [ ] Simulados com cronômetro
- [ ] Histórico detalhado
- [ ] Metas e rotina de estudos
- [ ] Geração assistida de resumos e materiais com referências

## Fase 3 — Multiusuário
- [ ] Cadastro, login e recuperação de acesso
- [ ] Isolamento de dados por usuário com RLS
- [ ] Preferências e perfis
- [ ] Limites e monitoramento de custos de IA
- [ ] Termos, privacidade e fluxo LGPD
- [ ] Moderação e denúncia de conteúdo compartilhado

## Fase 4 — Comunidade e evolução
- [ ] Desafios privados e públicos
- [ ] Ranking opt-in
- [ ] Compartilhamento de fichários e materiais autorizados
- [ ] Planos e pagamentos, se fizer sentido

## Critério de conclusão do MVP
Uma pessoa consegue cadastrar um concurso, enviar um edital, conferir e corrigir a estrutura extraída, gerar ou cadastrar questões vinculadas ao conteúdo, responder, consultar explicações com origem identificada e acompanhar erros e evolução com dados persistidos com segurança.

## Princípios de qualidade
- A extração do edital deve ser conferida antes de ser confirmada.
- Questões oficiais/licenciadas e inéditas geradas por IA devem ser diferenciadas.
- Nenhum item ausente do edital deve ser inventado como se estivesse no documento.
- Gabaritos automáticos não são oficiais sem validação.
