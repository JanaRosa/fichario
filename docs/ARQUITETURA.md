# Arquitetura do Fichário

## 1. Direção do produto
O Fichário começa como ambiente pessoal de preparação para concursos, mas será construído desde o início com separação de dados por usuário e possibilidade de evolução para uma plataforma multiusuário.

## 2. Componentes
### Frontend
- React + Vite
- Interface responsiva, priorizando celular
- Componentes reutilizáveis
- Rotas para painel, edital, questões, erros, revisões, flashcards e simulados

### Backend
- Supabase Auth para autenticação
- PostgreSQL para dados
- Row Level Security (RLS) para isolamento entre usuários
- Supabase Storage para arquivos, quando necessário
- Supabase Edge Functions para operações privilegiadas e chamadas de IA

### Inteligência artificial
A IA será acessada exclusivamente por funções no servidor. Chaves e segredos não podem ser armazenados no código frontend, no GitHub ou em variáveis públicas.
A IA poderá apoiar:
- explicação didática de respostas;
- criação de questões a partir de materiais autorizados;
- geração de resumos e flashcards;
- classificação de erros e sugestão de revisão.

Toda saída gerada por IA deverá ser identificada como conteúdo assistido por IA e revisável pelo estudante. Questões e gabaritos precisam de validação antes de serem tratados como oficiais.

## 3. Modelo de domínio inicial
- profiles: perfil do usuário
- exams: concursos
- notices: editais
- subjects: disciplinas
- topics: assuntos
- questions: questões
- alternatives: alternativas
- attempts: tentativas/respostas
- error_notebook: registro de erros e dificuldades
- review_items: itens e datas de revisão
- flashcards: cartões de estudo
- study_sessions: sessões de estudo
- mock_exams: simulados
- mock_exam_items: questões de cada simulado
- ai_generations: histórico de solicitações e resultados de IA

Todas as entidades privadas devem possuir owner_id ou vínculo inequívoco com o usuário, com políticas RLS adequadas.

## 4. Ciclo de aprendizagem
1. O estudante seleciona concurso, disciplina e assunto.
2. Responde questões.
3. O sistema registra tentativa, acerto/erro e tempo.
4. Em caso de erro, oferece explicação e permite classificar a dificuldade.
5. O sistema agenda revisão conforme regra configurável.
6. O painel atualiza indicadores e recomenda próximos estudos.

## 5. Segurança e privacidade
- RLS habilitada nas tabelas com dados de usuário.
- Nunca expor service_role ou chaves privadas no frontend.
- Validar entradas no servidor.
- Minimizar dados pessoais.
- Disponibilizar exportação e exclusão de dados do usuário.
- Planejar conformidade com LGPD antes de abrir cadastro público.

## 6. Publicação
O GitHub será usado para versionamento. A hospedagem do frontend e o backend serão configurados separadamente. GitHub Pages poderá servir protótipos estáticos, mas não deve conter segredos nem executar chamadas privilegiadas.

## 7. Decisões pendentes
- Provedor de hospedagem definitivo.
- Provedor/modelo de IA e orçamento por uso.
- Política de retenção e limites de uso de IA.
- Regras definitivas do algoritmo de revisão espaçada.
- Licenciamento e origem do banco de questões.


## 8. Prioridade do MVP: edital + questões com IA
**Posicionamento:** Fichário — Estude com inteligência. Evolua com estratégia.

### Fluxo do edital
1. O estudante cadastra um concurso/prova e envia o PDF.
2. O arquivo fica em armazenamento privado, vinculado ao proprietário.
3. O backend valida formato/tamanho e extrai texto, preservando páginas/trechos quando possível.
4. A IA propõe disciplinas, tópicos e sub tópicos exclusivamente com base no conteúdo fornecido, mantendo referências ao documento e indicando incertezas.
5. O estudante revisa, edita e confirma a estrutura antes de ela ser usada como plano.

### Fluxo de questões
1. Questões existentes entram com origem, banca, ano, fonte e direitos de uso registrados quando disponíveis.
2. Questões inéditas podem ser geradas por IA a partir de tópicos confirmados e materiais autorizados.
3. Questões de IA são rotuladas como inéditas/assistidas por IA.
4. Gabaritos e explicações automáticos ficam como não validados até revisão adequada; nunca são apresentados como oficiais sem comprovação.
5. Tentativas alimentam caderno de erros e recomendações de revisão.

### Modelo de dados adicional
- notice_extractions: execução, versão, estado e erros da extração.
- notice_items: itens extraídos, hierarquia, página/trecho, confiança e estado de conferência.
- question_topic_links: relação entre questões e tópicos confirmados.
- question_sources: origem, referência, banca, ano e licença/condição de uso, quando aplicável.
- ai_generations: finalidade, modelo, resultado, consumo e estado de validação.

### Segurança e qualidade
- PDFs em buckets privados, com URLs assinadas e temporárias.
- Nunca expor chaves privadas no frontend.
- Não inventar conteúdo ausente do edital; incertezas devem ser exibidas.
- Permitir correção manual da extração e denúncia de questões/gabaritos incorretos.
- Respeitar direitos autorais; não redistribuir questões ou materiais protegidos sem autorização.
- Planejar OCR para PDFs digitalizados e tratamento de falhas/reprocessamento.
