'use client'
import Navbar from './components/Navbar'
import { Tooltip } from './components/tooltip'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Passagertal',
  description: 'Trafikstyrelsens side om passagertal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
     <main> 
      <Navbar/>
      <body className={inter.className}>{children}</body>
      <Tooltip/>
      </main>
    </html>
  )
}
