import { StatusCard } from '@/components/status-components'

export const metadata = {
  title: 'Suporte · Bosko',
  description: 'Central de ajuda do Bosko. Perguntas frequentes, contato e status do serviço.',
}

const SearchIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

const BookIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
)

const BarsIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="m16 6 4 14M12 6v14M8 8v12M4 4v16" />
  </svg>
)

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24">
    <polyline points="4 7 4 4 20 4 20 7" />
    <line x1="9" x2="15" y1="20" y2="20" />
    <line x1="12" x2="12" y1="4" y2="20" />
  </svg>
)

const UserIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="10" r="3" />
    <path d="M7 20.6c.7-2 2.7-3.6 5-3.6s4.3 1.6 5 3.6" />
  </svg>
)

export default function SupportPage() {
  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <img src="/assets/bosko-logo-horizontal-white.svg" alt="bosko" />
          </a>
          <div className="nav-links">
            <a href="/#recursos">Recursos</a>
            <a href="/#biblioteca">Biblioteca</a>
            <a href="/faq">Suporte</a>
            <a href="/privacy">Privacidade</a>
          </div>
          <a className="nav-cta" href="/#baixar">
            Baixar
          </a>
        </div>
      </nav>

      <header className="doc-hero support-hero">
        <div className="doc-hero-inner">
          <div className="doc-eyebrow">Central de Ajuda</div>
          <h1>
            Como podemos
            <br />
            ajudar?
          </h1>
          <p>Encontre respostas rápidas, ou fale com a gente diretamente. Respondemos em até 24 horas.</p>
          <div className="search-wrap">
            <SearchIcon />
            <input type="search" placeholder="Buscar: importar EPUB, sincronização, senha…" />
          </div>
        </div>
      </header>

      <section className="cats">
        <div className="cats-grid">
          <a className="cat" href="#getting-started">
            <div className="cat-icon">
              <BookIcon />
            </div>
            <h3>Começando</h3>
            <p>Primeiros passos, conta e configuração inicial.</p>
          </a>
          <a className="cat" href="#shelf">
            <div className="cat-icon">
              <BarsIcon />
            </div>
            <h3>Estante & EPUBs</h3>
            <p>Importar, organizar e gerenciar seus livros.</p>
          </a>
          <a className="cat" href="#reader">
            <div className="cat-icon">
              <SettingsIcon />
            </div>
            <h3>Leitor</h3>
            <p>Temas, tipografia, progresso e marcadores.</p>
          </a>
          <a className="cat" href="#account">
            <div className="cat-icon">
              <UserIcon />
            </div>
            <h3>Conta & Privacidade</h3>
            <p>Senha, exclusão de conta, exportar dados.</p>
          </a>
        </div>
      </section>

      <section className="faq">
        <h2 id="getting-started">Perguntas frequentes</h2>
        <p className="sub">Atualizado para a versão 1.0.0 do Bosko.</p>

        <details open>
          <summary>Como importo um arquivo .epub para a minha estante?</summary>
          <p>
            Na tela <strong>Estante</strong>, toque no botão laranja com o sinal de mais (canto inferior direito).
            Selecione <em>Importar EPUB</em> e escolha o arquivo no seu dispositivo. O Bosko vai extrair automaticamente
            a capa, o título e o autor. Você pode editar tudo isso antes de salvar.
          </p>
        </details>

        <details>
          <summary>O Bosko funciona offline?</summary>
          <p>
            Sim. Depois que o livro está na sua estante, você pode lê-lo sem internet. A sincronização do progresso
            entre dispositivos exige conexão, mas leitura propriamente dita é 100% offline.
          </p>
        </details>

        <details>
          <summary id="shelf">Por que meu EPUB não está abrindo?</summary>
          <p>
            Verifique se o arquivo é <strong>EPUB 2 ou 3 válido</strong>, sem proteção DRM (livros comprados na
            Amazon/Apple Books costumam ter DRM e não vão abrir). Se o arquivo está íntegro mas ainda assim falha,
            exporte os logs em <em>Configurações → Diagnóstico</em> e mande pra gente.
          </p>
        </details>

        <details>
          <summary>Posso ler livros pagos da Amazon, Google Play Livros ou Apple Books?</summary>
          <p>
            Não diretamente. Esses arquivos têm DRM proprietário. O Bosko foi feito para EPUBs sem DRM e para a
            biblioteca de domínio público integrada.
          </p>
        </details>

        <details>
          <summary id="reader">Como mudo o tema do leitor para sépia ou escuro?</summary>
          <p>
            Dentro de qualquer livro, toque uma vez na tela para revelar a barra superior. Toque no ícone <code>T</code>{' '}
            (tipografia/estilo) e selecione o tema desejado em <em>Opções de Estilo</em>. A escolha vale para todos os
            seus livros.
          </p>
        </details>

        <details>
          <summary id="account">Como excluo minha conta e todos os meus dados?</summary>
          <p>
            Em{' '}
            <em>
              Perfil {'>'} Configurações {'>'} Excluir conta
            </em>
            . A exclusão é definitiva e remove a estante em nuvem e seus dados de conta em até 7 dias. Arquivos .epub
            que estavam no seu dispositivo permanecem lá. Para removê-los, desinstale o app.
          </p>
        </details>

        <details>
          <summary>Vocês têm versão para iPad e Android tablet?</summary>
          <p>
            Sim. O mesmo app roda em iPhone, iPad, Android phone e Android tablet. Use a mesma conta para sincronizar
            progresso entre eles.
          </p>
        </details>

        <details>
          <summary>O Bosko é gratuito? Tem assinatura?</summary>
          <p>
            Bosko é gratuito. Não há assinatura, não há paywall, não há propaganda direcionada. A biblioteca de domínio
            público é integralmente livre.
          </p>
        </details>

        <details>
          <summary>Como sugiro um livro para a biblioteca?</summary>
          <p>
            Mande um e-mail para <a href="mailto:tech.abag@gmail.com">tech.abag@gmail.com</a> com o nome da obra, o autor, e
            se possível a fonte em domínio público (mojo.org.br, Project Gutenberg, etc).
          </p>
        </details>
      </section>

      <section className="contact-row">
        <div className="cnt-card orange">
          <div className="label">Fale com a gente</div>
          <h3>
            Não achou
            <br />
            sua resposta?
          </h3>
          <p>Escreva pra gente. Respondemos em até 24 horas em dias úteis.</p>
          <a className="cnt-cta" href="mailto:tech.abag@gmail.com">
            tech.abag@gmail.com
          </a>
        </div>
        <StatusCard />
      </section>
    </>
  )
}
