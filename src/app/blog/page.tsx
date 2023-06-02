import React from "react";
import Image from "next/image";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: ''  
})

export default function Blog(){
    
    return (
        <div className="flex flex-col justify-center items-center p-6">
            <h2 className="font-sora font-normal text-lg mb-2">Blog</h2>
            <h1 className="font-sora font-semibold text-2xl md:text-4xl mb-1">Rewarding your daily life</h1>
            <p className="font-sora font-light text-lg mb-2">Unlocking and creating opportunities in our digital world</p>
            <div className="w-full lg:w-11/12 relative h-80 md:h-96 mt-8 mb-8">
                <div className="absolute inset-0 w-full">
                    <Image 
                       src="/blog-banner.png"
                       alt="Blog banner"
                       fill
                    />
                </div>
                <div className="relative p-4 z-10 flex flex-col justify-end h-80 md:h-96">
                    <p className="font-sora font-light text-xs text-white mb-2 ">Ghana Web | 12 May 2023</p>
                    <h1 className="font-sora font-semibold text-white text-lg ">Rewarding your daily life</h1>
                    <h2 className="font-sora font-light text-white text-sm mb-1">Unlocking and creating opportunities in our digital world</h2>
                </div>
                    
            </div>
            <div className="flex flex-row flex-wrap w-full lg:w-11/12 gap-3">
                {
                    [1,2,3,4,5,6].map((item) => {
                        return (
                            <div key={item} className="flex-auto w-1/2 lg:w-3/12 md:w-4/12  ">
                                <div className="relative h-52 md:h-60 mb-4">
                                    <Image 
                                    src="/subiyanto.png"
                                    alt="blog image"
                                    fill
                                    />
                                </div>
                                <div className="flex flex-col">
                                <p className="font-sora font-light text-xs">Ghana Web | 12 May 2023</p>
                                <h1 className="font-sora font-semibold text-lg mb-3">Rewarding your daily life</h1>
                                <p className="font-sora font-light text-base mb-2">Lorem ipsum dolor sit amet,consectetur adipiscing elit. Suspendisse semper, nisl.</p>
                                </div>
                            </div>
                        )
                        
                    })
                }
                
                
            </div>

        </div>
    )
} 