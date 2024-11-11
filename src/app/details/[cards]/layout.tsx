import '@styles/globals.css'

import Header from '@/components/shared/header'
import Footer from '@/components/shared/footer'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>

    </div>
  )
}
