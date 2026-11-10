# Fichário

**Fichário — Estude com inteligência. Evolua com estratégia.**

Plataforma inteligente de preparação para concursos, provas e certificações. Começa como ambiente pessoal e será preparada para futuramente atender múltiplos estudantes.

## Objetivo
Transformar a rotina de preparação em um ciclo orientado por desempenho: estudar, responder, entender os erros, revisar e acompanhar a evolução.

## Biblioteca de provas e editais
Biblioteca pesquisável inspirada em catálogos de provas, com filtros por cargo, concurso, órgão, banca, ano, escolaridade, estado, município e disciplina. Cada registro pode reunir edital, caderno de prova, gabarito e retificações, com origem e permissões de uso identificadas. Documentos podem ser cadastrados pela administração ou enviados por estudantes para revisão antes da publicação.

## Primeira prioridade: edital + questões com IA
1. Enviar edital em PDF.
2. Extrair disciplinas, tópicos e sub tópicos, preservando páginas e trechos de referência quando possível.
3. Conferir e corrigir a estrutura extraída antes de confirmar o plano.
4. Cadastrar questões com origem identificada ou gerar questões inéditas assistidas por IA.
5. Resolver questões, receber explicações e registrar tentativas.
6. Alimentar caderno de erros e recomendações de revisão.

## Princípios de confiabilidade
- Não inventar itens ausentes do edital.
- Exigir conferência humana da extração antes de confirmar a estrutura.
- Diferenciar questões oficiais/licenciadas de questões inéditas geradas por IA.
- Registrar fonte e status de validação; não apresentar gabarito automático como oficial.
- Respeitar direitos autorais e condições de uso dos materiais.

## Funcionalidades planejadas
- Painel de estudos e metas diárias
- Concursos, editais, disciplinas e assuntos
- Banco de questões e comentários
- Caderno de erros
- Revisão espaçada
- Flashcards
- Simulados cronometrados
- Desafios e ranking (fase futura)
- Painel de desempenho
- Assistente de IA para apoiar a aprendizagem

## Arquitetura inicial
- Frontend: React + Vite
- Backend e persistência: Supabase (Auth, PostgreSQL, Storage e Edge Functions)
- IA: integração por função server-side; segredos nunca expostos no frontend
- Código e documentação: GitHub

## Desenvolvimento
Consulte [docs/ARQUITETURA.md](docs/ARQUITETURA.md), [docs/ROADMAP.md](docs/ROADMAP.md) e [docs/DIARIO.md](docs/DIARIO.md).

## Status
Versão 0.1 — protótipo visual inicial. Importação real de PDF, banco persistente e IA ainda serão implementados.
