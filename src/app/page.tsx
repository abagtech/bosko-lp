const AppStoreSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 12.04c-.03-3.14 2.56-4.65 2.68-4.73-1.46-2.13-3.74-2.42-4.55-2.45-1.94-.2-3.78 1.14-4.77 1.14-.99 0-2.5-1.11-4.11-1.08-2.12.03-4.08 1.23-5.18 3.13-2.21 3.83-.57 9.51 1.59 12.62 1.05 1.52 2.31 3.23 3.96 3.17 1.59-.06 2.19-1.03 4.11-1.03s2.46 1.03 4.14.99c1.71-.03 2.79-1.55 3.84-3.08 1.21-1.77 1.71-3.48 1.74-3.57-.04-.02-3.34-1.28-3.37-5.07zm-3.12-9.29C14.81 1.72 15.41.31 15.24 0c-.96.04-2.12.64-3.04 1.68-.83.92-1.55 2.39-1.36 3.39 1.07.08 2.16-.55 3.09-1.62z" />
  </svg>
)

const GooglePlaySvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893 2.302 2.302-10.937 6.333zM6.86 2.546l9.937 5.6L14.5 10.7 4.39 1.05zm11.052 7.026 2.836 1.6c.842.475.842 1.685 0 2.16l-2.836 1.6L15.6 12z" />
  </svg>
)

const BarsSvg = () => (
  <svg viewBox="0 0 24 24">
    <path d="m16 6 4 14M12 6v14M8 8v12M4 4v16" />
  </svg>
)

const BooksSvg = () => (
  <svg viewBox="0 0 24 24">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
)

const SettingsSvg = () => (
  <svg viewBox="0 0 24 24">
    <polyline points="4 7 4 4 20 4 20 7" />
    <line x1="9" x2="15" y1="20" y2="20" />
    <line x1="12" x2="12" y1="4" y2="20" />
  </svg>
)

const AwardSvg = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="6" />
    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
  </svg>
)

export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <img src="/assets/bosko-logo-horizontal-white.svg" alt="bosko" />
          </a>
          <div className="nav-links">
            <a href="#recursos">Recursos</a>
            <a href="#biblioteca">Biblioteca</a>
            <a href="/faq">Suporte</a>
            <a href="/privacy">Privacidade</a>
          </div>
          <a className="nav-cta" href="#baixar">
            Baixar
          </a>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-inner">
          <div>
            <h1>
              Levando sua leitura
              <br />
              para <em>outro nível</em>.
            </h1>
            <p className="lead">
              Sua estante pessoal, uma biblioteca de clássicos em domínio público e um leitor pensado para a leitura
              longa. Tudo em um lugar só, em português.
            </p>
            <div className="hero-cta">
                <a className="badge" href="https://apps.apple.com/br/app/bosko-app/id6768281883">
                <AppStoreSvg />
                <div>
                  <div className="b-top">Disponível na</div>
                  <div className="b-bot">App Store</div>
                </div>
              </a>
              <div className="badge dark disabled">
                <GooglePlaySvg />
                <div>
                  <div className="b-top">Em breve no</div>
                  <div className="b-bot">Google Play</div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-device">
            <div className="device">
              <img src="/assets/screenshots/02-estante.png" alt="Tela da estante do Bosko" />
            </div>
          </div>
        </div>
      </header>

      <svg
        className="wave-divider"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="1000" height="100" fill="#FBF8F2" />
        <path
          d="M 0 0 L 1000 0 C 811.436 0 637.872 32.452 500 86.344 C 362.128 32.456 188.564 0 0 0 Z"
          fill="#000000"
        />
      </svg>

      <section id="recursos" className="features">
        <div className="section">
          <div className="section-eyebrow">Recursos</div>
          <h2 className="section-h">Tudo que um bom leitor merece. Nada que ele não pediu.</h2>
          <p className="section-lead">
            O Bosko foi feito por leitores. Sem distrações, sem assinaturas, sem caça às suas atenções. Só você, sua
            estante e seus livros.
          </p>

          <div className="feature-grid">
            <div className="feature">
              <div className="feature-icon">
                <BarsSvg />
              </div>
              <h3>Estante pessoal</h3>
              <p>
                Importe seus arquivos .epub diretamente do seu dispositivo. Organize entre <em>Para Ler</em>,{' '}
                <em>Lendo</em> e <em>Lidos</em>. Tudo fica salvo localmente, sob seu controle.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <BooksSvg />
              </div>
              <h3>Clássicos em domínio público</h3>
              <p>
                Uma biblioteca curada de obras brasileiras e internacionais: Machado, Alencar, Wharton, Baum. Tudo
                disponível gratuitamente, sem cadastro.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <SettingsSvg />
              </div>
              <h3>Leitor refinado</h3>
              <p>
                Três temas (Claro, Sépia, Escuro), tipografia configurável, alinhamento, tamanho. Cada detalhe pensado
                para sessões de leitura longas.
              </p>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <AwardSvg />
              </div>
              <div className="feature-badge">Em breve</div>
              <h3>Progresso e níveis</h3>
              <p>
                XP por capítulo concluído, níveis que crescem com você, sequências de dias lidos. Gamificação leve para
                o hábito que importa, chegando em uma próxima versão.
              </p>
            </div>
          </div>
        </div>
      </section>

      <svg
        className="wave-divider"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="1000" height="100" fill="#000000" />
        <path
          d="M 0 0 L 1000 0 C 811.436 0 637.872 32.452 500 86.344 C 362.128 32.456 188.564 0 0 0 Z"
          fill="#FBF8F2"
        />
      </svg>

      <section id="biblioteca" className="showcase">
        <div className="section">
          <div className="section-eyebrow" style={{ color: '#FF6900' }}>
            Biblioteca
          </div>
          <h2 className="section-h">
            Domínio público,
            <br />
            imediatamente seu.
          </h2>
          <p className="section-lead">
            Centenas de obras brasileiras e internacionais selecionadas em edições bilíngues e revisadas. Baixe, leia,
            releia. Sem assinatura, sem propaganda.
          </p>

          <div className="showcase-grid">
            <div className="shot">
              <img src="/assets/screenshots/05-livraria.png" alt="Tela da livraria com livros em domínio público" />
            </div>
            <div className="shot">
              <img src="/assets/screenshots/06-book-detail.png" alt="Detalhe do livro O Magnífico Mágico de Oz" />
            </div>
            <div className="shot">
              <img src="/assets/screenshots/07-reader.png" alt="Tela de leitura com texto serifado em tema sépia" />
            </div>
          </div>
        </div>
      </section>

      <svg
        className="wave-divider"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="1000" height="100" fill="#FFFFFF" />
        <path
          d="M 0 0 L 1000 0 C 811.436 0 637.872 32.452 500 86.344 C 362.128 32.456 188.564 0 0 0 Z"
          fill="#000000"
        />
      </svg>

      <section className="quote-section">
        <div className="quote-block">
          <blockquote>
            Ler não devia depender de assinatura, de algoritmo, ou de pressa. O Bosko devolve esse tempo.
          </blockquote>
          <div className="quote-cite">A equipe Bosko</div>
        </div>
      </section>

      <svg
        className="wave-divider"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="1000" height="100" fill="#FF6900" />
        <path
          d="M 0 0 L 1000 0 C 811.436 0 637.872 32.452 500 86.344 C 362.128 32.456 188.564 0 0 0 Z"
          fill="#FFFFFF"
        />
      </svg>

      <section id="baixar" className="cta">
        <div className="cta-inner">
          <h2>
            Pronto para sua
            <br />
            próxima história?
          </h2>
          <p className="lead">Bosko é gratuito. Baixe e comece em menos de um minuto.</p>
          <div className="cta-buttons">
            <a className="badge" href="https://apps.apple.com/br/app/bosko-app/id6768281883">
              <AppStoreSvg />
              <div>
                <div className="b-top">Disponível na</div>
                <div className="b-bot">App Store</div>
              </div>
            </a>
            <div className="badge disabled">
              <GooglePlaySvg />
              <div>
                <div className="b-top">Em breve no</div>
                <div className="b-bot">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <svg
        className="wave-divider"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="1000" height="100" fill="#0E0C0A" />
        <path
          d="M 0 0 L 1000 0 C 811.436 0 637.872 32.452 500 86.344 C 362.128 32.456 188.564 0 0 0 Z"
          fill="#FF6900"
        />
      </svg>
    </>
  )
}
