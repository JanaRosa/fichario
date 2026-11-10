# Diário de Desenvolvimento

## 2026-11-10 — Início do planejamento técnico
### Decisões
- O produto começa para uso pessoal e será preparado para expansão multiusuário.
- IA entra desde o início, com chamadas protegidas no servidor.
- Stack proposta: React + Vite e Supabase.
- GitHub será o repositório de código e documentação.

### Próximas ações
1. Criar protótipo visual responsivo.
2. Validar navegação e identidade visual.
3. Configurar projeto frontend.
4. Configurar Supabase e políticas de segurança.
5. Implementar o primeiro ciclo de questões e tentativas.

### Observações
Nenhuma chave de API ou segredo deve ser incluído no repositório.

## 2026-11-10 — Primeira estrutura do aplicativo
### Implementado
- Estrutura inicial React + Vite.
- Primeiro painel responsivo com navegação lateral.
- Indicadores em estado vazio, sem inventar dados de desempenho.
- Atalhos para concursos, questões, caderno de erros e flashcards.
- Documentação inicial de arquitetura, roadmap e backlog.

### Não implementado ainda
- Persistência real de dados.
- Autenticação.
- Integração de IA.
- Cadastro e resolução funcional de questões.
- Testes automatizados e publicação.

### Próxima etapa
Validar visualmente o protótipo e, em seguida, configurar o Supabase com autenticação e políticas de acesso.


## 2026-11-10 — Posicionamento e prioridade do MVP definidos
### Decisões
- Marca: **Fichário — Estude com inteligência. Evolua com estratégia.**
- Começar para uso pessoal, com arquitetura preparada para múltiplos estudantes.
- IA desde o início, com chamadas protegidas no servidor.
- Primeira prioridade: importação de edital em PDF integrada ao banco de questões com IA.

### Fluxo aprovado
1. Envio privado do edital.
2. Extração de texto e referências de página.
3. Proposta de disciplinas, tópicos e sub tópicos por IA.
4. Conferência e correção pelo estudante.
5. Questões com origem identificada ou questões inéditas claramente rotuladas como IA.
6. Resolução, explicações, registro de erros e recomendações de revisão.

### Regras de confiabilidade
- Não inventar conteúdo ausente do edital.
- Conferência humana obrigatória antes de confirmar a estrutura extraída.
- Questões geradas por IA não são questões oficiais.
- Gabaritos automáticos precisam de validação.
- Respeitar direitos autorais e proteger documentos enviados.

### Próxima etapa
Implementar upload privado, extração de PDF e tela de conferência; depois, o primeiro fluxo de questões.


## 2026-11-10 — Biblioteca de provas e editais adicionada ao escopo
### Referência analisada
- PCI Concursos: catálogo de provas para download com navegação por cargos e pesquisa por cidades, órgãos e instituições.
- A referência será usada apenas para orientar a experiência de busca e organização, sem copiar identidade visual ou presumir permissão para reutilizar arquivos.

### Decisões
- Criar Biblioteca de Provas e Editais no Fichário.
- Filtros: cargo, concurso, órgão, banca, ano, escolaridade, estado, município e disciplina.
- Tipos: edital, retificação, prova, gabarito e padrão de resposta.
- Permitir cadastro administrativo e contribuição de documentos por usuários.
- Contribuições ficam pendentes até revisão.
- Registrar origem e situação de direitos/permissão; priorizar fontes oficiais e links quando hospedagem não for autorizada.
- Editais aprovados poderão alimentar o importador e provas autorizadas poderão alimentar questões e simulados.

### Próxima etapa
Desenhar e implementar o catálogo da Biblioteca e o fluxo administrativo de cadastro de documentos.
