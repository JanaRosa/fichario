import { useState } from 'react';
import {
  BookOpen, LayoutDashboard, ClipboardList, Brain, RotateCcw, Layers,
  ChartNoAxesCombined, Target, Search, Bell, ChevronRight, Flame,
  Clock3, CircleCheck, Menu, X, Plus, Sparkles, CalendarDays, FileText
} from 'lucide-react';

const menu = [
  { id: 'inicio', label: 'Visão geral', icon: LayoutDashboard },
  { id: 'edital', label: 'Meus concursos', icon: BookOpen },
  { id: 'questoes', label: 'Banco de questões', icon: ClipboardList },
  { id: 'erros', label: 'Caderno de erros', icon: RotateCcw },
  { id: 'revisoes', label: 'Revisões', icon: Brain },
  { id: 'flashcards', label: 'Flashcards', icon: Layers },
  { id: 'desempenho', label: 'Desempenho', icon: ChartNoAxesCombined }
];

const tasks = [
  { title: 'Direito Constitucional', detail: '10 questões • Prioridade alta', tag: 'Começar', color: 'orange' },
  { title: 'Direito Administrativo', detail: 'Revisar 8 cartões', tag: 'Revisar', color: 'purple' },
  { title: 'Português', detail: 'Retomar 4 questões erradas', tag: 'Retomar', color: 'green' }
];

function App() {
  const [active, setActive] = useState('inicio');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notice, setNotice] = useState('');

  const current = menu.find(item => item.id === active)?.label || 'Visão geral';

  function choose(id) {
    setActive(id);
    setMobileOpen(false);
    if (id !== 'inicio') setNotice('A área "' + (menu.find(item => item.id === id)?.label || id) + '" está planejada para a próxima etapa.');
    else setNotice('');
  }

  return <div className="app-shell">
    <aside className={mobileOpen ? 'sidebar open' : 'sidebar'}>
      <div className="brand"><span className="brand-mark"><BookOpen size={21}/></span><span>fichário</span><small>ESTUDOS INTELIGENTES</small></div>
      <div className="profile-mini"><div className="avatar">J</div><div><strong>Meu espaço</strong><span>Plano pessoal</span></div></div>
      <p className="nav-caption">MENU PRINCIPAL</p>
      <nav>{menu.map(item => {
        const Icon = item.icon;
        return <button key={item.id} className={active === item.id ? 'nav-item selected' : 'nav-item'} onClick={() => choose(item.id)}><Icon size={18}/><span>{item.label}</span>{active === item.id && <i/>}</button>;
      })}</nav>
      <div className="sidebar-bottom"><div className="ai-card"><div className="ai-icon"><Sparkles size={17}/></div><strong>Estude com inteligência</strong><p>Em breve, sua assistente de IA vai ajudar a transformar dúvidas em aprendizado.</p><span>IA planejada para o MVP</span></div><div className="sidebar-foot">Fichário • versão 0.1</div></div>
    </aside>

    {mobileOpen && <button className="scrim" onClick={() => setMobileOpen(false)} aria-label="Fechar menu"/>}
    <main className="main-area">
      <header className="topbar">
        <button className="icon-btn mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Abrir menu"><Menu/></button>
        <div className="breadcrumb">Meu espaço <ChevronRight size={14}/> <strong>{current}</strong></div>
        <div className="top-actions"><button className="icon-btn" aria-label="Pesquisar"><Search size={18}/></button><button className="icon-btn notification" aria-label="Notificações"><Bell size={18}/></button><div className="avatar small">J</div></div>
      </header>

      <div className="content">
        <section className="welcome-row">
          <div><div className="eyebrow"><span className="eyebrow-dot"/> SEU ESPAÇO DE APRENDIZAGEM</div><h1>Bom dia! Vamos avançar? <span>✦</span></h1><p>Um passo de cada vez. Cada questão é uma oportunidade de aprender.</p></div>
          <button className="primary-btn" onClick={() => setNotice('O treino diário será ativado quando cadastrarmos suas primeiras questões.')}><Target size={17}/> Começar treino <ChevronRight size={16}/></button>
        </section>

        {notice && <div className="notice"><Sparkles size={17}/><span>{notice}</span><button onClick={() => setNotice('')}><X size={16}/></button></div>}

        <section className="stats-grid">
          <article className="stat-card"><div className="stat-icon orange"><ClipboardList size={19}/></div><span className="stat-label">Questões respondidas</span><strong>0</strong><small>Seu histórico começa aqui</small></article>
          <article className="stat-card"><div className="stat-icon green"><CircleCheck size={19}/></div><span className="stat-label">Aproveitamento</span><strong>—</strong><small>Aguardando suas respostas</small></article>
          <article className="stat-card"><div className="stat-icon purple"><Brain size={19}/></div><span className="stat-label">Revisões pendentes</span><strong>0</strong><small>Nenhuma revisão agendada</small></article>
          <article className="stat-card"><div className="stat-icon yellow"><Flame size={19}/></div><span className="stat-label">Sequência de estudos</span><strong>0 dias</strong><small>Vamos iniciar sua rotina?</small></article>
        </section>

        <section className="dashboard-grid">
          <div className="panel study-panel">
            <div className="panel-heading"><div><span className="section-kicker">SEU PLANO</span><h2>Próximos passos</h2></div><button className="text-btn" onClick={() => choose('edital')}>Organizar estudos <ChevronRight size={15}/></button></div>
            <div className="empty-plan"><div className="empty-illustration"><CalendarDays size={27}/></div><h3>Seu planejamento começa pelo edital</h3><p>Cadastre um concurso, organize as disciplinas e monte sua primeira rotina de estudos.</p><button className="primary-btn" onClick={() => choose('edital')}><Plus size={17}/> Cadastrar meu concurso</button></div>
            <div className="task-list">{tasks.map((task, i) => <div className="task-row" key={task.title}><div className={'task-symbol '+task.color}>{i === 0 ? <FileText size={17}/> : i === 1 ? <Layers size={17}/> : <RotateCcw size={17}/>}</div><div className="task-copy"><strong>{task.title}</strong><span>{task.detail}</span></div><span className="task-tag">{task.tag}</span></div>)}</div>
          </div>
          <div className="panel routine-panel">
            <div className="panel-heading"><div><span className="section-kicker">CONSTÂNCIA</span><h2>Ritmo de estudos</h2></div><Clock3 size={19} className="muted-icon"/></div>
            <div className="week-days">{['S','T','Q','Q','S','S','D'].map((d,i)=><div key={i} className="day"><span>{d}</span><b className={i === 1 ? 'today' : ''}>{i+9}</b></div>)}</div>
            <div className="routine-empty"><Target size={22}/><strong>Seu progresso aparecerá aqui</strong><span>Quando você começar a estudar, vamos acompanhar sua consistência.</span></div>
            <div className="tip-box"><Sparkles size={16}/><span><strong>Dica:</strong> sessões curtas e frequentes ajudam a construir uma rotina sustentável.</span></div>
          </div>
        </section>

        <section className="bottom-grid">
          <div className="panel quick-panel"><div className="panel-heading"><div><span className="section-kicker">ACESSO RÁPIDO</span><h2>Seu material de estudo</h2></div></div><div className="quick-links"><button onClick={() => choose('questoes')}><ClipboardList/><span><strong>Questões</strong><small>Pratique e aprenda</small></span><ChevronRight/></button><button onClick={() => choose('erros')}><RotateCcw/><span><strong>Caderno de erros</strong><small>Aprenda com cada tentativa</small></span><ChevronRight/></button><button onClick={() => choose('flashcards')}><Layers/><span><strong>Flashcards</strong><small>Revise conceitos importantes</small></span><ChevronRight/></button></div></div>
          <div className="quote-panel"><div className="quote-mark">“</div><h3>O erro não é o fim do estudo. É o começo de uma nova estratégia.</h3><p>Fichário — seu conhecimento, organizado para evoluir.</p><div className="quote-decoration"><BookOpen size={62}/></div></div>
        </section>
        <footer>Fichário <span>•</span> Construindo sua evolução, uma questão por vez. <span className="footer-version">Protótipo inicial 0.1</span></footer>
      </div>
    </main>
  </div>;
}

export default App;