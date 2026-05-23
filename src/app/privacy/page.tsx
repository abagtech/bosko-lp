export const metadata = {
  title: 'Política de Privacidade · Bosko',
  description: 'Como o Bosko coleta, usa e protege seus dados pessoais.',
}

export default function PrivacyPage() {
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

      <header className="doc-hero">
        <div className="doc-hero-inner">
          <div className="doc-eyebrow">Legal</div>
          <h1>Política de Privacidade</h1>
          <p>
            Resumindo: o Bosko coleta o mínimo possível. Livros que você importa do seu dispositivo ficam 100% locais, e
            a gente nunca vende seus dados.
          </p>
          <div className="doc-meta">Atualizada em 23 de maio de 2026 · Vigente desde a versão 1.0.0</div>
        </div>
      </header>

      <div className="doc-body">
        <aside className="toc">
          <h4>Nesta página</h4>
          <a href="#resumo">Resumo</a>
          <a href="#dados">Dados que coletamos</a>
          <a href="#uso">Como usamos</a>
          <a href="#armazenamento">Armazenamento</a>
          <a href="#anuncios">Anúncios (AdMob)</a>
          <a href="#compartilhamento">Compartilhamento</a>
          <a href="#criancas">Crianças</a>
          <a href="#direitos">Seus direitos (LGPD)</a>
          <a href="#cookies">Cookies e analytics</a>
          <a href="#alteracoes">Alterações</a>
          <a href="#contato">Contato</a>
        </aside>

        <article>
          <h2 id="resumo">Resumo</h2>
          <p>
            O Bosko é um leitor de eBooks. Para funcionar, precisamos guardar algumas coisas:{' '}
            <strong>quem você é</strong> (e-mail e senha, se você criar uma conta),{' '}
            <strong>o que você está lendo</strong> na biblioteca em nuvem, e{' '}
            <strong>como o app está se comportando</strong> (logs de erros anônimos). Tudo o mais é opcional.
          </p>
          <div className="callout">
            <p>
              <strong>Sobre livros locais:</strong> arquivos .epub que você importa do seu dispositivo ficam 100% no
              aparelho. A gente não captura, não envia e não tem acesso a nada dessa parte da sua leitura.
            </p>
          </div>

          <h2 id="dados">Dados que coletamos</h2>

          <h3>Dados de conta</h3>
          <ul>
            <li>
              <strong>E-mail.</strong> Para autenticação e recuperação de senha.
            </li>
            <li>
              <strong>Senha.</strong> Armazenada com hash bcrypt. Jamais em texto puro.
            </li>
            <li>
              <strong>Nome de exibição e avatar.</strong> Opcionais, visíveis apenas para você.
            </li>
          </ul>

          <h3>Dados de leitura na nuvem</h3>
          <p>
            Só se aplicam a livros adicionados pela biblioteca pública integrada do Bosko. Livros locais não entram
            aqui.
          </p>
          <ul>
            <li>
              <strong>Sua estante em nuvem.</strong> Quais livros você adicionou pela biblioteca pública e em qual
              status (Para Ler, Lendo, Lidos).
            </li>
            <li>
              <strong>Progresso.</strong> Última localização lida e percentual concluído, para sincronizar entre
              dispositivos.
            </li>
            <li>
              <strong>Preferências do leitor.</strong> Tema, tipografia, tamanho de fonte, alinhamento.
            </li>
          </ul>

          <h3>Dados técnicos</h3>
          <ul>
            <li>
              <strong>Logs de erro anônimos.</strong> Quando o app trava, registramos a pilha do erro. Sem conteúdo do
              livro nem dados pessoais.
            </li>
            <li>
              <strong>Plataforma e versão do app.</strong> iOS/Android, versão do app, modelo do dispositivo.
            </li>
            <li>
              <strong>Identificadores de anúncio.</strong> Quando o Google AdMob exibe um anúncio (veja seção{' '}
              <em>Anúncios</em> abaixo), o SDK pode receber o identificador de publicidade do seu dispositivo (IDFA no
              iOS, AAID no Android), conforme as políticas do Google.
            </li>
          </ul>

          <h3>Livros e arquivos locais</h3>
          <p>
            Arquivos .epub que você importa do seu dispositivo ficam <strong>apenas no seu aparelho</strong>, no
            encrypted storage do iOS/Android. A gente <strong>não coleta, não acessa, não envia</strong> esses arquivos
            nem o progresso de leitura deles aos nossos servidores. Eles são 100% seus, 100% locais.
          </p>

          <h2 id="uso">Como usamos seus dados</h2>
          <p>Usamos as informações coletadas exclusivamente para:</p>
          <ul>
            <li>Fazer o app funcionar: autenticação, sincronização da estante em nuvem entre seus dispositivos.</li>
            <li>Mostrar sua biblioteca pessoal e seu progresso dentro do app.</li>
            <li>Diagnosticar e corrigir falhas técnicas.</li>
            <li>Exibir anúncios através do Google AdMob (veja seção dedicada abaixo).</li>
            <li>Comunicar mudanças importantes na política, no produto ou na sua conta.</li>
          </ul>
          <p>Não vendemos seus dados a terceiros.</p>

          <h2 id="armazenamento">Onde os dados ficam</h2>
          <p>
            Dados de conta e de leitura na nuvem ficam em servidores hospedados, com criptografia em trânsito (TLS 1.3)
            e em repouso. Livros locais e o progresso deles ficam <strong>apenas no seu dispositivo</strong>, no
            encrypted storage do iOS/Android.
          </p>
          <p>
            Tokens de autenticação são armazenados no Keychain (iOS) ou Keystore (Android). Nunca em texto puro
            acessível ao restante do sistema.
          </p>

          <h2 id="anuncios">Anúncios (Google AdMob)</h2>
          <p>
            O Bosko exibe anúncios através do <strong>Google AdMob</strong>, serviço de publicidade do Google. O AdMob é
            um terceiro independente que pode coletar e processar dados para servir anúncios, conforme a{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
              Política de Privacidade do Google
            </a>
            .
          </p>
          <p>Dados que o Google AdMob pode receber:</p>
          <ul>
            <li>
              Identificador de publicidade do dispositivo (IDFA no iOS, AAID no Android), se você não tiver desativado a
              personalização de anúncios.
            </li>
            <li>Informações técnicas: modelo do dispositivo, sistema operacional, idioma, endereço IP aproximado.</li>
            <li>Eventos de interação com o anúncio (impressão, clique).</li>
          </ul>
          <p>Você pode limitar o rastreamento publicitário a qualquer momento:</p>
          <ul>
            <li>
              <strong>iOS:</strong> Ajustes {'>'} Privacidade e Segurança {'>'} Rastreamento (desative para o Bosko).
            </li>
            <li>
              <strong>Android:</strong> Configurações {'>'} Google {'>'} Anúncios {'>'} Excluir ID de publicidade.
            </li>
          </ul>

          <h2 id="compartilhamento">Compartilhamento com terceiros</h2>
          <p>Compartilhamos dados apenas com os processadores estritamente necessários para operar o serviço:</p>
          <ul>
            <li>
              <strong>Provedor de hospedagem em nuvem.</strong> Para armazenar e servir dados de conta e leitura na
              nuvem.
            </li>
            <li>
              <strong>Provedor de monitoramento de erros.</strong> Para receber crash reports anônimos.
            </li>
            <li>
              <strong>Google AdMob.</strong> Para exibição de anúncios no app.
            </li>
            <li>
              <strong>Apple App Store e Google Play.</strong> Para distribuição do app.
            </li>
          </ul>
          <p>Não compartilhamos seus dados de leitura com brokers de dados ou empresas de marketing.</p>

          <h2 id="criancas">Uso por crianças</h2>
          <p>
            O Bosko é destinado a maiores de 13 anos. Não coletamos intencionalmente dados de crianças menores de 13. Se
            identificarmos uma conta nessa faixa etária, ela será removida.
          </p>

          <h2 id="direitos">Seus direitos (LGPD)</h2>
          <p>De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:</p>
          <ul>
            <li>
              <strong>Acessar</strong> os dados pessoais que mantemos sobre você.
            </li>
            <li>
              <strong>Corrigir</strong> dados incompletos, inexatos ou desatualizados.
            </li>
            <li>
              <strong>Excluir</strong> seus dados. Disponível diretamente no app em <em>Perfil {'>'} Excluir conta</em>.
            </li>
            <li>
              <strong>Portar</strong> seus dados para outro serviço em formato legível por máquina.
            </li>
            <li>
              <strong>Revogar</strong> o consentimento a qualquer momento.
            </li>
          </ul>
          <p>
            Para exercer qualquer um desses direitos, envie um e-mail para{' '}
            <a href="mailto:tech.abag@gmail.com">tech.abag@gmail.com</a>. Respondemos em até 15 dias úteis.
          </p>

          <h2 id="cookies">Cookies e analytics</h2>
          <p>
            O app não usa cookies. Apenas armazenamento local seguro (Keychain/Keystore + MMKV criptografado). Não
            usamos Google Analytics, pixels do Facebook, ou ferramentas similares de rastreamento próprias.
          </p>
          <p>
            O Google AdMob, conforme descrito na seção <em>Anúncios</em>, pode operar com identificadores próprios
            independentes.
          </p>

          <h2 id="alteracoes">Alterações nesta política</h2>
          <p>
            Se atualizarmos esta política de forma material, avisaremos você por e-mail e dentro do app, com pelo menos
            30 dias de antecedência. A versão atual e o histórico ficam sempre disponíveis nesta página.
          </p>

          <h2 id="contato">Contato</h2>
          <p>
            Dúvidas, pedidos ou reclamações sobre privacidade:{' '}
            <a href="mailto:tech.abag@gmail.com">tech.abag@gmail.com</a>
          </p>
          <p>Encarregado de Proteção de Dados (DPO): equipe abag.tech.</p>
        </article>
      </div>
    </>
  )
}
