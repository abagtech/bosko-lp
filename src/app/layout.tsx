import type { Metadata } from 'next'

import { Footer } from '@/components/footer'
import { HealthProvider } from '@/components/health-provider'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Bosko · Levando sua leitura para outro nível',
  description: 'Leitor de eBooks com biblioteca de clássicos em domínio público e estante pessoal.',
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
