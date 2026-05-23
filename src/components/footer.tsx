'use client'

import { StatusBadge } from './status-components'

export function Footer() {
  return (
    <footer>
      <div className="foot-inner">
        <div className="foot-brand">
          <img src="/assets/bosko-logo-horizontal-black.svg" alt="bosko" />
          <p>Leitor de eBooks para iOS e Android. Construído no Brasil para quem ainda lê de capa a capa.</p>
        </div>
        <div className="foot-col">
          <h4>Produto</h4>
          <a href="/#recursos">Recursos</a>
          <a href="/#biblioteca">Biblioteca</a>
          <a href="/#baixar">Baixar</a>
        </div>
        <div className="foot-col">
          <h4>Empresa</h4>
          <a href="/faq">Suporte</a>
          <a href="/privacy">Privacidade</a>
          <a href="mailto:tech.abag@gmail.com">Contato</a>
        </div>
        <div className="foot-col">
          <h4>Legal</h4>
          <a href="/privacy">Política de Privacidade</a>
          <a href="/privacy">Termos de Uso</a>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2026 abag.tech · Todos os direitos reservados.</span>
        <span>Feito com cuidado no Brasil.</span>
        <StatusBadge />
      </div>
    </footer>
  )
}
