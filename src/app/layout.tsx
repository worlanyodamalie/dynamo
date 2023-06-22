import './globals.css'
import {  Sora } from 'next/font/google'
import { NavBar , Footer } from './components/index'
import React from 'react'


// const inter = Inter({ subsets: ['latin'] })

const sora = Sora({
   weight: ["200","300" , "400" , "500","600","700"],
   variable: '--font-sora',
   subsets: ['latin'],
   display: 'swap',
})

export const metadata = {
  title: 'Dynamo Web App',
  description: 'Dynamo Web App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  
  return (
    <html lang="en">
      <body className={`${sora.variable}`}>
        <main className="flex min-h-screen flex-col ">
            <div className='container mx-auto pt-4 md:px-8 px-4'><NavBar /></div>
            {children}
        </main>
        <div className="mt-10">
          <Footer />
       </div>
      </body>
    </html>
  )
}
