'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import {
  FiArrowRight,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiDatabase,
  FiFileText,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiPrinter,
  FiRefreshCw,
  FiSearch,
  FiShield,
  FiUsers,
  FiX,
} from 'react-icons/fi'
import logoCronos from '../../assets/logoCronos.png'
import './style.css'

const employees = [
  { name: 'Ana Paula Ribeiro', role: 'Professora — Informática' },
  { name: 'Carlos Eduardo Lima', role: 'Auxiliar administrativo' },
  { name: 'Fernanda Souza Alves', role: 'Professora — Matemática' },
  { name: 'Marcos Vinícius Rocha', role: 'Coordenador de curso' },
  { name: 'Juliana Teixeira', role: 'Secretaria acadêmica' },
]

const navItems = [
  ['problema', 'O problema'],
  ['beneficios', 'Benefícios'],
  ['como-funciona', 'Como funciona'],
  ['equipe', 'Equipe'],
]

const problemCards = [
  [FiFileText, 'Preenchimento manual, funcionário por funcionário', 'Nome, função, registro e período são digitados à mão dentro do modelo, repetindo dados que já existem no cadastro da unidade.'],
  [FiRefreshCw, 'Retrabalho por erro de digitação', 'Um campo trocado ou copiado da folha anterior obriga a refazer, reimprimir e reconferir o documento inteiro.'],
  [FiClock, 'Horas da equipe presas em tarefa mecânica', 'A cada bimestre o trabalho começa do zero e consome tempo administrativo que deveria estar em atividades de fato importantes.'],
]

const benefitCards = [
  [FiDatabase, 'Dados direto do cadastro', 'O sistema é alimentado pelo banco de funcionários da unidade, evitando nome, função e registro digitados sempre corretos.'],
  [FiShield, 'Padrão preservado', 'O template pré-definido é idêntico ao usado hoje. Nenhuma adaptação visível de quem recebe o documento.'],
  [FiPrinter, 'Um PDF, pronto para imprimir', 'Todas as folhas selecionadas saem em um único arquivo paginado, na ordem escolhida.'],
]

const steps = [
  ['01', 'Um PDF, pronto para imprimir', 'A lista vem do banco de funcionários da unidade. Marque quem precisa de folha neste bimestre.'],
  ['02', 'O sistema busca os dados', 'Nome, função, registro e período são lidos direto do cadastro. Sem digitação, sem copiar e colar.'],
  ['03', 'O template é preenchido', 'Cada folha é gerada pelo modelo oficial já usado na unidade, com os dados no lugar certo.'],
  ['04', 'Baixe o PDF e imprima', 'Um único arquivo com todas as folhas do lote, paginado e pronto para a impressora.'],
]

const phases = [
  ['FASE 1 · EM DESENVOLVIMENTO', 'ETEC Bento Quirino', 'Implementação e validação com a equipe administrativa da unidade.', FiDatabase, true],
  ['FASE 2', 'Ajuste e padronização', 'Refinamento do fluxo e do template a partir do uso real em campo.', FiCheckCircle, false],
  ['FASE 3', 'Outras unidades do Centro Paula Souza', 'Ampliação do sistema para escolas com o mesmo processo bimestral.', FiUsers, false],
]

const teamMembers = [
  {
    initials: 'GD',
    name: 'Gabriel Domingues dos Santos',
    linkedin: 'https://www.linkedin.com/search/results/people/?keywords=Gabriel%20Domingues%20dos%20Santos',
  },
  {
    initials: 'DA',
    name: 'Diogo André Messias',
    linkedin: 'https://www.linkedin.com/search/results/people/?keywords=Diogo%20Andr%C3%A9%20Messias',
  },
]

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(() => new Set([0, 1, 2, 4]))
  const [pdfStatus, setPdfStatus] = useState('idle')
  const [selectedMember, setSelectedMember] = useState(null)

  const filteredEmployees = useMemo(
    () => employees.map((employee, index) => ({ ...employee, index })).filter(({ name }) => name.toLowerCase().includes(query.toLowerCase())),
    [query],
  )

  useEffect(() => {
    const sections = navItems.map(([id]) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActiveSection(entry.target.id)),
      { rootMargin: '-35% 0px -55%' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.14 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const toggleEmployee = (index) => {
    setPdfStatus('idle')
    setSelected((current) => {
      const next = new Set(current)
      next.has(index) ? next.delete(index) : next.add(index)
      return next
    })
  }

  const generatePdf = () => {
    if (!selected.size || pdfStatus === 'loading') return
    setPdfStatus('loading')
    window.setTimeout(() => setPdfStatus('success'), 800)
  }

  return (
    <div className="landingPage" id="top">
      <header className="siteHeader">
        <nav className="siteNav" aria-label="Navegação principal">
          <a className="brandLink" href="#top" aria-label="Cronos Auto — início">
            <Image src={logoCronos} alt="Cronos Auto" priority />
          </a>

          <div className="desktopNav">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} className={activeSection === id ? 'active' : ''}>{label}</a>
            ))}
          </div>

          <div className="headerActions">
            <a className="secondaryButton headerCta" href="/login">Login</a>
            <a className="primaryButton headerCta" href="/register">Cadastre-se</a>
          </div>
          <button className="menuButton" type="button" onClick={() => setMenuOpen(true)} aria-label="Abrir menu" aria-expanded={menuOpen}>
            <FiMenu />
          </button>
        </nav>
      </header>

      <div className={`mobileMenu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobileMenuHead">
          <Image src={logoCronos} alt="Cronos Auto" />
          <button type="button" onClick={() => setMenuOpen(false)} aria-label="Fechar menu"><FiX /></button>
        </div>
        <nav aria-label="Navegação móvel">
          {navItems.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <div className="mobileAuthActions">
            <a className="secondaryButton" href="/login" onClick={() => setMenuOpen(false)}>Login</a>
            <a className="primaryButton" href="/register" onClick={() => setMenuOpen(false)}>Cadastre-se</a>
          </div>
        </nav>
      </div>

      <main>
        <section className="heroSection">
          <div className="pageContainer heroGrid">
            <div className="heroCopy" data-reveal>
              <h1>Folhas de ponto bimestrais em <span>minutos</span>, não em dias.</h1>
              <p>O Cronos Auto se conecta ao banco de funcionários da unidade, preenche o modelo oficial da folha de ponto e devolve um único PDF pronto para impressão. A secretaria somente escolhe quem entra na lista. O resto é automático.</p>
              <div className="heroActions">
                <a className="primaryButton" href="#como-funciona">Ver como funciona <FiArrowRight /></a>
                <a className="secondaryButton" href="#problema">Entender o problema</a>
              </div>
              <div className="heroMetrics" aria-label="Métricas do produto">
                <div><strong>1 clique</strong><span>para gerar o lote</span></div>
                <div><strong>0</strong><span>campos digitados à mão</span></div>
                <div><strong>4x/ano</strong><span>processo repetido</span></div>
              </div>
            </div>

            <div className="productMockup" data-reveal aria-label="Demonstração interativa do Cronos Auto">
              <div className="mockupChrome"><i /><i /><i /><span>cronos auto · folhas de ponto</span></div>
              <div className="mockupBody">
                <div className="employeePanel">
                  <div className="mockupTitle"><strong>Selecionar funcionários</strong><span>Bimestre 4 · 2026</span></div>
                  <label className="mockupSearch"><FiSearch /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar no banco de funcionários" aria-label="Buscar funcionário" /></label>
                  <div className="employeeList">
                    {filteredEmployees.map(({ name, role, index }) => (
                      <button key={name} type="button" className={selected.has(index) ? 'selected' : ''} onClick={() => toggleEmployee(index)} aria-pressed={selected.has(index)}>
                        <span className="checkCircle">{selected.has(index) && <FiCheck />}</span>
                        <span><strong>{name}</strong><small>{role}</small></span>
                      </button>
                    ))}
                    {!filteredEmployees.length && <p className="emptySearch">Nenhum funcionário encontrado.</p>}
                  </div>
                  <div className="mockupFooter"><span>{selected.size} selecionados</span><button type="button" disabled={!selected.size || pdfStatus === 'loading'} onClick={generatePdf}>{pdfStatus === 'loading' ? 'Gerando…' : 'Gerar PDF'}</button></div>
                </div>
                <div className="previewPanel">
                  <span className="previewEyebrow">PRÉ-VISUALIZAÇÃO</span>
                  <div className="paperPreview"><strong>ETEC BENTO QUIRINO</strong><b>FOLHA DE PONTO — BIMESTRAL</b>{Array.from({ length: 8 }).map((_, index) => <i key={index} />)}</div>
                  <div className={`previewStatus ${pdfStatus === 'success' ? 'success' : ''}`}><FiCheckCircle />{pdfStatus === 'success' ? `${selected.size} folhas geradas — PDF pronto` : `${selected.size} folhas preenchidas — prontas para impressão`}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contentSection alt" id="problema">
          <div className="pageContainer twoColumn">
            <div className="sectionIntro" data-reveal><span className="eyebrow">O PROBLEMA HOJE</span><h2>Um processo que se repete a cada bimestre. Resolução sempre do zero.</h2><p>A folha de ponto é um documento simples, mas preparar dezenas delas manualmente transforma uma rotina previsível em um gargalo administrativo.</p></div>
            <div className="stackedCards">
              {problemCards.map(([Icon, title, text], index) => <article className="infoCard" key={title} tabIndex="0" data-reveal style={{ '--delay': `${index * 80}ms` }}><span className="iconBox"><Icon /></span><div><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="contentSection" id="beneficios">
          <div className="pageContainer">
            <div className="sectionIntro narrow" data-reveal><span className="eyebrow">BENEFÍCIOS</span><h2>O mesmo documento oficial, sem o trabalho manual.</h2><p>O template atual continua o mesmo, muda apenas quem o preenche.</p></div>
            <div className="benefitsGrid">
              <article className="impactCard" data-reveal tabIndex="0">
                <span className="estimateBadge">Estimativa para o projeto</span>
                <strong className="impactNumber">~ 95%</strong>
                <p>de redução no tempo de preparação do lote bimestral de folhas de ponto, comparado ao preenchimento manual do modelo.</p>
                <div className="impactStats"><div><strong>6</strong><span>lotes gerados por ano</span></div><div><strong>1</strong><span>PDF por lote, paginado</span></div><div><strong>0</strong><span>campos digitados à mão</span></div></div>
                <div className="comparison"><label>Preenchimento manual <span>Horas de trabalho</span></label><i className="manualBar" /><label>Cronos Auto <span>Minutos</span></label><i className="autoBar" /></div>
              </article>
              <div className="stackedCards benefitStack">{benefitCards.map(([Icon, title, text], index) => <article className="infoCard" key={title} tabIndex="0" data-reveal style={{ '--delay': `${index * 80}ms` }}><span className="iconBox"><Icon /></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
            </div>
          </div>
        </section>

        <section className="contentSection alt" id="como-funciona">
          <div className="pageContainer">
            <div className="sectionIntro narrow" data-reveal><span className="eyebrow">COMO FUNCIONA</span><h2>Quatro passos, do cadastro à impressora.</h2></div>
            <div className="stepsGrid">{steps.map(([number, title, text]) => <article key={number} data-reveal><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
            <div className="workflowStrip" data-reveal><div><span>HOJE</span><strong>Modelo em branco preenchido manualmente para cada funcionário.</strong></div><div><span>COM O CRONOS AUTO</span><strong>Seleção da lista + geração automática do lote completo.</strong></div><div><span>RESULTADO</span><strong>Folhas padronizadas, sem erro de digitação, prontas para a assinatura.</strong></div></div>
          </div>
        </section>

        <section className="contentSection" id="proximos-passos">
          <div className="pageContainer twoColumn">
            <div className="sectionIntro" data-reveal><span className="eyebrow">PRÓXIMOS PASSOS</span><h2>Começa no Bento Quirino. Não precisa parar aí.</h2><p>A ineficiência no preparo das folhas de ponto não é exclusiva de uma unidade. Com a implementação validada na ETEC Bento Quirino, o objetivo é levar o Cronos Auto a outras unidades do Centro Paula Souza que enfrentam o mesmo processo manual.</p></div>
            <div className="stackedCards phaseStack">{phases.map(([tag, title, text, Icon, current], index) => <article className={`infoCard phaseCard ${current ? 'current' : ''}`} key={title} tabIndex="0" data-reveal style={{ '--delay': `${index * 80}ms` }}><span className="iconBox"><Icon /></span><div><small>{tag}</small><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          </div>
        </section>

        <section className="contentSection alt" id="equipe">
          <div className="pageContainer twoColumn teamGrid">
            <div className="sectionIntro" data-reveal><span className="eyebrow">EQUIPE</span><h2>Quem está construindo o Cronos Auto.</h2><p>Um projeto pensado dentro da própria unidade, a partir de um problema observado na rotina administrativa.</p></div>
            <div className="teamCards">
              {teamMembers.map(({ initials, name, linkedin }, index) => (
                <article
                  className={selectedMember === index ? 'selected' : ''}
                  key={initials}
                  tabIndex="0"
                  role="button"
                  aria-pressed={selectedMember === index}
                  data-reveal
                  onClick={() => setSelectedMember(index)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      setSelectedMember(index)
                    }
                  }}
                >
                  <span>{initials}</span>
                  <h3>{name}</h3>
                  <p>Desenvolvimento &amp; produto</p>
                  <small>ETEC Bento Quirino</small>
                  <a
                    className="teamLinkedin"
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    aria-label={`Abrir o LinkedIn de ${name}`}
                  >
                    <FiLinkedin /> Ver LinkedIn
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contactSection" id="contato">
          <div className="pageContainer contactContent" data-reveal>
            <span className="statusBadge">Em desenvolvimento para a ETEC Bento Quirino</span>
            <h2>Pronto para tirar as folhas de ponto da fila de tarefas manuais?</h2>
            <p>Fale com a equipe para acompanhar a implementação na unidade ou avaliar o uso do Cronos Auto na sua escola.</p>
            <div><a className="contactPrimary" href="mailto:contato@cronosauto.com.br"><FiMail /> Falar com a equipe</a><a className="contactSecondary" href="#top">Rever o funcionamento <FiArrowRight /></a></div>
          </div>
        </section>
      </main>

      <footer className="siteFooter"><div className="pageContainer"><a className="footerBrand" href="#top" aria-label="Cronos Auto — voltar ao início"><Image src={logoCronos} alt="Cronos Auto" /></a><p>© 2026 Cronos Auto · Projeto acadêmico — ETEC Bento Quirino, Centro Paula Souza</p></div></footer>
    </div>
  )
}

export default LandingPage
