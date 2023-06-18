import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SwipeSlider } from "./index";


const benefits = [
    {
        img: 'data-analytics.svg',
        title: 'Data Analytics',
        description: 'Use insights through platform analytics and direct user feedback'
    },
    {
        img: 'yield-oriented.svg',
        title: 'Yield-Oriented Incentives',
        description: 'Expand your existing sales force generating a tangible financial return on top of increased market'
    },
    {
        img: 'customer-acquisition.svg',
        title: 'New Customer Acquisitions',
        description: 'Expand service reach and client segments'
    },
    {
        img: 'yield-oriented.svg',
        title: 'Accessible & Simple',
        description: 'No upfront fee required to connect to Dynamo with increased distribution and marketing channels'
    },
    {
        img: 'data-analytics.svg',
        title: 'Modular',
        description: 'Service set up allows flexibility for business to determine who (profile and experience) can promote services'
    },
    {
        img: 'yield-oriented.svg',
        title: 'Operational Enhancement',
        description: 'Every user of Dynamo has the potential to access and/or promote a service if the user meets established requirements'
    },
   
  
  ]

export function BusinessBenefits(){
    return (
        <div className="bg-[#F3F3F3] pt-10  pb-10" id="business">
            <div className="container mx-auto  px-8">
               <p className="font-sora font-light text-base py-10 px-1 md:px-0">Any registered organization that has a service that can be delivered digitally or is interested in increasing their retail reach can sign up to the platform. Dyanmo provides a robust and secure environment to connect your services to new and existing customers.</p>
               <p className="font-sora font-bold text-2xl py-6">What are the benefit to your business</p>
               <SwipeSlider data={benefits} settings={{ margin: "" , width: "w-9/12 md:w-1/4" , bg: 'bg-[#EAE9E9]' , height: '' }}/>
               <div className="mt-10">
                 <Link className="flex flex-row gap-2 items-center font-sora font-semibold text-xl align-top" href="/join">
                    Partner with us 
                      <div >
                        <Image 
                            src="/arrow-btn.svg"
                            alt="partner us"
                            width={20}
                            height={20}
                        />
                      </div>
                     
                 </Link>
            </div>
            </div>
            
            
        </div>
    )
}