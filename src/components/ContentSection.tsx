import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SwipeSlider } from "./index";

const features = [
    {
        img: 'mobile-application.svg',
        title: 'Mobile Application',
        description: 'Android and iOS mobile application providing digital consumer service marketplace including financial (insurance; investments; and banking transactions); bill & utility payments; entertainment; lead generation; service discovery; etc.'
    },
    {
        img: 'salesforce.svg',
        title: 'Sales Force And Agent Network Management & Enhancement',
        description: 'Service providers can leverage the platform to build and/or empower their human distribution network to increase efficiency, and profitability'
    },
    {
        img: 'business-management.svg',
        title: 'Business Management Solution',
        description: 'Administrative tools for self-motivated entrepreneurs to track their recommendations and overall performance. General and specific training modules to strengthen digital and financial awareness as well as overall sales and soft-skill capacity building to aid in more effective service promotion.'
    },
    {
        img: 'analytics.svg',
        title: 'Analytics Capability',
        description: 'Consolidated and anonymized data for business intelligence for service providers; and financial management for individuals and eventual credit scoring'
    },
]

const joinUs = [
    'Single, aggregated service discovery and delivery platform where majority of an individual’s service needs can be met. No need for multiple apps',
    'Most transactions provide a financial reward whether recommending a service or consuming a service',
    'Introduces new services with explanations on the value of the service',
    'Provides a means of generating income for entrepreneurial platform users',
]

const benefits = [
    {
        img: 'direct-reward.svg',
        title: 'Direct reward',
        description: 'Most transactions come with a reward or a cash back'
    },
    {
        img: '/youthful-modern.svg',
        title: 'Youthful and modern',
        description: 'Digitized transactions and engagements'
    },
    {
        img: 'nexus.svg',
        title: 'Nexus',
        description: 'Bringing all your digital transactions in one place'
    },
    {
        img: '/youthful-modern.svg',
        title: 'Youthful and modern',
        description: 'Digitized transactions and engagements'
    },
    {
        img: 'nexus.svg',
        title: 'Nexus',
        description: 'Bringing all your digital transactions in one place'
    },
    {
        img: '/youthful-modern.svg',
        title: 'Youthful and modern',
        description: 'Digitized transactions and engagements'
    },
    {
        img: 'nexus.svg',
        title: 'Nexus',
        description: 'Bringing all your digital transactions in one place'
    },
  
  ]

export function ContentSection(){
    return (
        
            <div className="container mx-auto px-4 py-5">
               <h2 className="font-sora font-bold text-3xl leading-10 mb-3 text-center">What is Dynamo?</h2>
               <p className="font-sora font-extralight text-base leading-9 mb-3">Dynamo is an optimized digital platform providing access to multiple consumer-facing services across various emerging and underserved markets. The platform creates easy access to an aggregated service environment directly and uniquely allows any user to recommend and promote a service to any other eligible user for a reward. This secondary feature was purpose built to accommodate the significant population that are currently digitally handicapped due to poor access to internet; device constraints; or low digital literacy.</p>
               <p className="font-sora font-extralight text-base leading-9 mb-3">As a business-to-business-to-consumer (B2B2C) environment, Dynamo creates efficiency and accountability for the field forces of service providers while decreasing customer acquisition costs. A wealth of data analytics on customer behavior and service distribution is captured that service providers can leverage on for service improvement and distribution.</p>
               <p className="my-8 font-sora text-lg font-semibold">The platform&apos;s key feature include:</p>
               <div className="flex flex-row flex-wrap gap-6">
                  {
                    features.map((feature,index) => {
                        return (
                            <div key={'feauture--dynamo--' + index} className="flex-auto md:w-2/5">
                                  <div className="my-4"> 
                                        <Image 
                                            src={feature.img}
                                            alt={feature.title}
                                            width={38}
                                            height={47}
                                       />
                                  </div> 
                                  <h2 className='font-sora text-base font-semibold mb-3'>{feature.title}</h2>
                                  <p className="font-sora text-base font-extralight">{feature.description}</p>
                            </div>
                        )
                    })
                  }
                  
               </div>
                {/* <div className="flex justify-center items-center flex-wrap gap-10 py-12">
                    <div className="flex-auto md:w-1/6">
                      <Image 
                        src="join-us.svg"
                        alt="image of a lady holding a phone"
                        width={280}
                        height={550}
                        className="mx-auto"/>
                    </div>
                    <div className="flex-auto w-2/6">
                        <h2 className="font-sora font-bold text-3xl mb-8 md:text-left text-center">Join Us</h2>
                        <ul className="list-decimal">
                            {
                                joinUs.map((item,index) => {
                                    return (
                                        <li key={'join--us--'+index} className='font-sora text-base font-light mb-6'>{item}</li>
                                    )
                                })
                            }
                            
                        </ul>
                    </div> 
               </div>  */}
                 
               {/* <div className="pb-10">
               <SwipeSlider
                    data={benefits}
                    settings={{
                    margin: "ml-[2rem] md:ml-[4rem]",
                    width: "w-1/2  md:w-1/5",
                    bg: "bg-[#F3F3F3]",
                    }}
                />

               </div> */}
           </div>
       
       
        
    )
}