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
