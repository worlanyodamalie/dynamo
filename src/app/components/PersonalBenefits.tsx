"use client"
import React from "react";
import { SwipeSlider } from "./index";

const benefits = [
    {
        img: 'direct-reward.svg',
        title: 'Direct reward',
        description: 'Most transactions come with a reward or a cash back',
        // bgImage: '/direct-reward.png'
        bgImage: '/D.png',
        bgSize: "75%"
    },
    {
        img: '/youthful-modern.svg',
        title: 'Youthful and modern',
        description: 'Digitized transactions and engagements',
        // bgImage: '/youthful-modern.png'
        bgImage: '/Y.png',
        bgSize: ""
    },
    {
        img: 'nexus.svg',
        title: 'Nexus',
        description: 'Bringing all your digital transactions in one place',
        // bgImage: '/nexus.png'
        bgImage: '/N.png',
        bgSize: ""
    },
    {
        img: '/artificial-intelligence.svg',
        title: 'Artificial Intelligence',
        description: 'Artificial Intelligence(AI) based training and monitoring to enhance user experience',
        // bgImage: '/artificial-intelligence.png'
        bgImage: '/A.png',
        bgSize: ""
    },
    {
        img: 'marketing-opportunities.svg',
        title: 'Marketing opportunities',
        description: 'Promoting services to others for a commision',
        // bgImage: '/marketing-opportunies.png'
        bgImage: '/M.png',
        bgSize: ""
    },
    {
        img: '/one-stop-service.svg',
        title: 'One-stop service',
        description: 'One-stop service aggregation providing convenience',
        // bgImage: '/one-stop-service.png'
        bgImage: '/O.png',
        bgSize: ""
    },
    
  
  ]

export function PersonalBenefits(){
    return (
     <div className='container mx-auto pl-4 py-8'  id={"personal"}>
        <SwipeSlider
         
          data={benefits}
          title={'What are the benefits you enjoy'}
          settings={{
            // margin: "ml-[2rem] md:ml-[4rem]",
            margin: "",
            // width: "w-1/2  md:w-1/5",
            // height: "h-1/2 md:h-1/5",
            width: "md:w-96 w-4/5",
            height: "md:h-96 h-4/5",
            bg: "bg-[#F3F3F3]",
            
          }}
      />
      </div>
    )
}