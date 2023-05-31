import './globals.css'
import { Inter , Sora } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const sora = Sora({
   weight: ["300" , "400" , "500","600"],
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
      <body className={`${sora.variable}`}>{children}</body>
    </html>
  )
}
