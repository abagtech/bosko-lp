import type { Metadata } from 'next'

import { Footer } from '@/components/footer'
import { HealthProvider } from '@/components/health-provider'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Bosko · Pronto para sua próxima história?',
  description: 'Leitor de eBooks com biblioteca de clássicos em domínio público e estante pessoal.',
  openGraph: {
    title: 'Bosko · Pronto para sua próxima história?',
    description: 'Leitor de eBooks com biblioteca de clássicos em domínio público e estante pessoal.',
    url: 'https://bosko.abag.tech',
    siteName: 'Bosko',
    images: [
      {
        url: '/assets/bosko-logo-horizontal-orange.png',
        width: 1200,
        height: 630,
        alt: 'Bosko - Pronto para sua próxima história?',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bosko · Pronto para sua próxima história?',
    description: 'Leitor de eBooks com biblioteca de clássicos em domínio público e estante pessoal.',
    images: ['/assets/bosko-logo-horizontal-orange.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="/colors_and_type.css" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/assets/bosko-mark-white.svg" />
      </head>
      <body>
        <HealthProvider>
          {children}
          <Footer />
        </HealthProvider>
      </body>
    </html>
  )
}
