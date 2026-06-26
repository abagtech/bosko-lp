import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Convite para clube · Bosko',
  description: 'Você foi convidado para um clube de leitura no Bosko.',
}

const AppStoreSvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M17.05 12.04c-.03-3.14 2.56-4.65 2.68-4.73-1.46-2.13-3.74-2.42-4.55-2.45-1.94-.2-3.78 1.14-4.77 1.14-.99 0-2.5-1.11-4.11-1.08-2.12.03-4.08 1.23-5.18 3.13-2.21 3.83-.57 9.51 1.59 12.62 1.05 1.52 2.31 3.23 3.96 3.17 1.59-.06 2.19-1.03 4.11-1.03s2.46 1.03 4.14.99c1.71-.03 2.79-1.55 3.84-3.08 1.21-1.77 1.71-3.48 1.74-3.57-.04-.02-3.34-1.28-3.37-5.07zm-3.12-9.29C14.81 1.72 15.41.31 15.24 0c-.96.04-2.12.64-3.04 1.68-.83.92-1.55 2.39-1.36 3.39 1.07.08 2.16-.55 3.09-1.62z" />
  </svg>
)

const GooglePlaySvg = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893 2.302 2.302-10.937 6.333zM6.86 2.546l9.937 5.6L14.5 10.7 4.39 1.05zm11.052 7.026 2.836 1.6c.842.475.842 1.685 0 2.16l-2.836 1.6L15.6 12z" />
  </svg>
)

interface Props {
  params: Promise<{ code: string }>
}

export default async function JoinPage({ params }: Props) {
  const { code } = await params
  const deepLink = `bosko://join/${code}`

  return (
    <main className="join-page">
      <div className="join-card">
        <img src="/assets/bosko-mark-black.svg" alt="Bosko" className="join-logo" />

        <h1 className="join-title">Você foi convidado para um clube de leitura</h1>
        <p className="join-subtitle">Abra o Bosko para aceitar o convite e começar a ler junto.</p>

        <a href={deepLink} className="join-btn-primary">
          Abrir no Bosko
        </a>

        <p className="join-divider">Ainda não tem o app?</p>

        <div className="join-store-btns">
          <a
            href="https://apps.apple.com/app/bosko/id6743344773"
            className="join-store-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppStoreSvg />
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=tech.abag.bosko"
            className="join-store-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GooglePlaySvg />
            Google Play
          </a>
        </div>
      </div>
    </main>
  )
}
