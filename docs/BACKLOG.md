# Backlog — Fichário

**Posicionamento:** Estude com inteligência. Evolua com estratégia.

## Prioridade P0 — Biblioteca de provas e editais

| ID | Item | Critério de aceite |
|---|---|---|
| FIC-027 | Catálogo de concursos | Listar concursos por órgão e edição |
| FIC-028 | Catálogo de cargos | Pesquisar e filtrar por cargo/função |
| FIC-029 | Cadastro de bancas e órgãos | Manter cadastro normalizado de organizadoras e instituições |
| FIC-030 | Busca avançada da biblioteca | Filtrar por cargo, concurso, órgão, banca, ano, escolaridade, estado, município e disciplina |
| FIC-031 | Cadastro de documentos | Associar edital, retificação, prova, gabarito e padrão de resposta ao concurso |
| FIC-032 | Proveniência e permissão | Registrar fonte/URL e situação de direitos/uso de cada arquivo |
| FIC-033 | Administração da biblioteca | Cadastrar, editar, revisar e publicar documentos |
| FIC-034 | Contribuição de usuários | Receber arquivos em fila pendente, sem publicação automática |
| FIC-035 | Integração com estudo | Usar edital aprovado no importador e prova autorizada em questões/simulados |

## Prioridade P0 — Fluxo principal do MVP

| ID | Item | Critério de aceite |
|---|---|---|
| FIC-001 | Painel responsivo | Navegação utilizável em celular e desktop |
| FIC-002 | Cadastro de concursos | Criar, editar e listar concursos/provas |
| FIC-003 | Upload privado de edital PDF | Arquivo validado e associado ao proprietário |
| FIC-004 | Extração de PDF | Texto extraído com referência de página quando possível; falhas visíveis |
| FIC-005 | Estruturação do edital por IA | Disciplinas e tópicos propostos apenas com base no documento |
| FIC-006 | Conferência da extração | Estudante pode editar e confirmar antes de salvar o plano |
| FIC-007 | Banco de questões | Enunciado, alternativas, gabarito, comentário, origem e status registrados |
| FIC-008 | Vínculo questão-edital | Questões associadas a tópicos confirmados |
| FIC-009 | Questões inéditas por IA | Identificadas como inéditas e vinculadas ao tópico de origem |
| FIC-010 | Resolver questão | Registrar resposta, acerto/erro, data e tempo |
| FIC-011 | Explicação assistida por IA | Contextualizada, sem expor segredos e com status de validação |
| FIC-012 | Caderno de erros | Consultar erros, tentativas e tópicos associados |
| FIC-013 | Sinalizar problema | Usuário pode reportar enunciado, alternativa ou gabarito incorreto |

## Prioridade P1 — Aprendizagem e evolução

| ID | Item | Critério de aceite |
|---|---|---|
| FIC-014 | Revisão espaçada | Agendar e concluir revisões com regra documentada |
| FIC-015 | Flashcards | Criar, revisar e acompanhar cartões |
| FIC-016 | Painel de desempenho | Indicadores calculados por disciplina e tópico |
| FIC-017 | Simulados | Cronômetro, resultado e histórico |
| FIC-018 | Metas e rotina | Configurar metas e acompanhar sessões |

## Prioridade P2 — Plataforma multiusuário

| ID | Item | Critério de aceite |
|---|---|---|
| FIC-019 | Autenticação | Cadastro, login e recuperação de acesso |
| FIC-020 | Isolamento por usuário | RLS impede acesso cruzado a arquivos e dados |
| FIC-021 | Controle de uso de IA | Limites, custos e falhas monitorados |
| FIC-022 | Compartilhamento responsável | Somente materiais autorizados podem ser publicados |

## Regras de conteúdo e segurança
- Não armazenar ou redistribuir questões protegidas por direitos autorais sem licença ou autorização.
- Identificar questões inéditas e materiais gerados por IA.
- Não apresentar gabarito gerado automaticamente como oficial sem validação.
- Preservar referência ao edital e permitir conferência humana da extração.
- Não inventar itens ausentes do documento.
- Proteger arquivos e segredos no backend; nunca colocar chaves privadas no frontend ou no repositório.


## Regra específica da biblioteca
Não copiar ou fazer scraping de arquivos de terceiros sem autorização. Priorizar fontes oficiais, domínio público ou materiais com licença/permissão adequada. Quando não for possível hospedar o documento, registrar e oferecer o link para a fonte oficial. Contribuições de usuários devem passar por revisão antes da publicação.
