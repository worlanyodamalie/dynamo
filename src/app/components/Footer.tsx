'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { handleClickScroll } from "../utilities";


const socials = [
    {
        img: "facebook.svg",
    },
    {
        img: "twitter.svg",
    },
    {
        img: "instagram.svg",
    },
    {
        img: "linkedin.svg",
    },
]

export function Footer(){
    return (
        <div className="container mx-auto px-4">
             <div className="flex justify-end mb-6 border-b-[0.7px] border-[#C9C9C9]">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a onClick={event => handleClickScroll('personal')}>
                            <h3 className="font-sora text-sm font-light">Personal</h3>
                        </a>
                    </li>
                    <li>
                        <a onClick={event => handleClickScroll('business')}>
                            <h3 className="font-sora text-sm font-light">Business</h3>
                        </a>
                    </li>
                    <li>
                        <Link href="/blog">
                            <h3 className="font-sora text-sm font-light">Blog</h3>
                        </Link>
                    </li>
                    
                    
                </ul>   
             </div>
             <div className="flex justify-end pt-1 pb-6">
                {
                    socials.map((social,index) => {
                       return (
                        <Link key={"socials--" + index} href="/" className="px-2">
                            <Image 
                                src={social.img}
                                alt="Social media icon"
                                width={28}
                                height={29}
                            />
                        </Link>
                       )
                    })
                }
                  
             </div>
             <div className="flex flex-wrap justify-between flex-row">
                <div className="flex flex-row w-2/5 justify-between">
                    <div>
                       <Link href="/">
                            <Image 
                            src="/Logo.svg"
                            alt="Dynamo Logo"
                            width={140}
                            height={20}
                            />
                       </Link>
                    </div>
                    <div>
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link className="" href="/">
                                <h3 className="font-sora text-sm font-light">Terms of use</h3>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <h3 className="font-sora text-sm font-light">Privacy Policy</h3>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <h3 className="font-sora text-sm font-light">License</h3>
                            </Link>
                        </li>
                        
                        
                    </ul>
                    </div>
                </div>
                <div className="flex items-center">
                    <p className="font-sora font-normal text-sm ">© All rights reserved. Powered by Simplified Complications Technologies Ltd.</p>
                </div>
             </div>
        </div>
    )
}