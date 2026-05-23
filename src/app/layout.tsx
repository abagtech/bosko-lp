import type { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Footer } from '@/components/footer'
import { HealthProvider } from '@/components/health-provider'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Bosko · Pronto para sua próxima história?',
  description: 'Leitor de eBooks com biblioteca de clássicos em domínio público e estante pessoal.',
  creator: 'abag.tech',
  openGraph: {
    title: 'Bosko · Pronto para sua próxima história?',
    description: 'Leitor de eBooks com biblioteca de clássicos em domínio público e estante pessoal.',
    url: 'https://bosko.abag.tech',
    siteName: 'Bosko',
    images: [
      {
        url: '/assets/bosko-app-icon.png',
        width: 1024,
        height: 1024,
        alt: 'Bosko - Pronto para sua próxima história?',
        type: 'image/png',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bosko · Pronto para sua próxima história?',
    description: 'Leitor de eBooks com biblioteca de clássicos em domínio público e estante pessoal.',
    images: ['/assets/bosko-app-icon.png'],
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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
