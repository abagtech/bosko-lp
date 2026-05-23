'use client'

import { useHealth } from './health-provider'

export const StatusBadge = () => {
  const { status } = useHealth()

  return (
    <a href="/faq#reader" className="status-footer" title="Status do serviço Bosko">
      <div className="status">
        <span className={`dot ${status === 'ok' ? 'online' : 'offline'}`}></span>
        {status === 'ok' ? 'Tudo operando normalmente' : 'Serviço indisponível'}
      </div>
    </a>
  )
}

export const StatusCard = () => {
  const { status, lastCheck } = useHealth()

  return (
    <div className="cnt-card">
      <div className="status">
        <span className={`dot ${status === 'ok' ? 'online' : 'offline'}`}></span>
        {status === 'ok' ? 'Tudo operando normalmente' : 'Serviço indisponível'}
      </div>
      <h3>
        Status
        <br />
        do serviço
      </h3>
      <p>
        {status === 'ok'
          ? 'Sincronização e biblioteca em domínio público estão online.'
          : 'Sincronização ou biblioteca podem estar indisponíveis.'}
        {lastCheck && ` Última verificação há ${Math.floor((Date.now() - lastCheck.getTime()) / 1000)}s.`}
      </p>
    </div>
  )
}
