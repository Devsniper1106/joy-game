import Footer from '@components/shared/footer'
import Header from '@components/shared/header'

import type { Metadata, Viewport } from 'next'
import { Providers } from '@lib/providers/providers'


import '@styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { BgTheme } from '@/lib/providers/bgTheme'

export const metadata: Metadata = {
  title: 'Gamer Joy',
  description: 'Gamer Joy, just enjoy',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#ffffff' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
       
      >
        <Providers>
          <BgTheme>
            <Header />
            {children}
            <Footer />{' '}
          </BgTheme>
        </Providers>
      </body>
    </html>
  )
}
