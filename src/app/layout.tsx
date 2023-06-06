import './globals.css'
import {  Sora } from 'next/font/google'
import { NavBar } from './components/index'


// const inter = Inter({ subsets: ['latin'] })

const sora = Sora({
   weight: ["300" , "400" , "500","600","700"],
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
            <div className='container mx-auto pt-4 px-8'><NavBar /></div>
            {children}
        </main>
        
      </body>
    </html>
  )
}
