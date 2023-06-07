import React from 'react'
import { Footer , Contact } from '../components'
export default function layout({
    children,
  }: {
    children: React.ReactNode
  }){
    return (
      <div className="container mx-auto px-4">
        {children}
        <div className="container mx-auto px-4">
          <div className="w-full border-t-[0.7px] border-[#C9C9C9] mt-8 mb-8"></div>
          <h2 className="font-sora text-2xl font-bold mb-10  text-center">
            Contact Us
          </h2>
        </div>
        <Contact />
      </div>
    );
}