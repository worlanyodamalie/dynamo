import Head from 'next/head'
import {  Sora } from 'next/font/google'
import { NavBar , Footer } from './index'
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

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  
  
  return (
    <main className={`flex min-h-screen flex-col ${sora.variable}`}>
      <Head>
        <title>Dynamo Web App</title>
        <meta property="og:title" content="Dynamo" key="title" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto pt-4 md:px-8 px-4">
        <NavBar />
      </div>
      {children}
      <div className="mt-10">
        <Footer />
      </div>
    </main>
  );
}
