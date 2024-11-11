import '@styles/globals.css'

import type { Metadata, Viewport } from 'next'
import { Providers } from '@lib/providers/providers'
import { BgTheme } from '@/lib/providers/bgTheme'

export const metadata: Metadata = {
  title: 'Gamer Joy',
  description: 'Gamer Joy, just enjoy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en"suppressHydrationWarning>
      <body>
        <Providers>
          <BgTheme>{children}</BgTheme>
        </Providers>
      </body>
    </html>
  )
}
