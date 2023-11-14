import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Condensed } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'

const inter = Roboto_Condensed({
  weight: ['300','400','700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'De la Cuna al Exito',
  description: 'De la Cuna al Exito es una organizacion de representacion de jugadores, ademas de tener sus propias academias de futbol para formar futuros talentos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <body className={inter.className}>
        <Header />
        <main className='mainbody'>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
