import React from 'react'
import { Footer , Contact } from '../components'
export default function layout({
    children,
  }: {
    children: React.ReactNode
  }){
    return (
        <div className='container mx-auto px-4'>
            {children}
            <Contact/> 
            <Footer />
        </div>
    )
}