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
