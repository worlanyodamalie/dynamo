import Image from "next/image";
import React from "react";
import { SwipeSlider } from "./index";
import { JoinModal } from "./index";



const benefits = [
    {
        img: 'data-analytics.svg',
        title: 'Data Analytics',
        description: 'Use insights through platform analytics and direct user feedback',
        bgImage: '/D.png',
        bgSize: "75%"
    },
    {
        img: 'yield-oriented.svg',
        title: 'Yield-Oriented Incentives',
        description: 'Expand your existing sales force generating a tangible financial return on top of increased market',
        bgImage: '/Y.png',
        bgSize: ""
    },
    {
        img: 'customer-acquisition.svg',
        title: 'New Customer Acquisitions',
        description: 'Expand service reach and client segments',
        bgImage: '/N.png',
        bgSize: ""
    },
    {
        img: 'accesible.svg',
        title: 'Accessible & Simple',
        description: 'No upfront fee required to connect to Dynamo with increased distribution and marketing channels',
        bgImage: '/A.png',
        bgSize: ""
    },
    {
        img: 'modular.svg',
        title: 'Modular',
        description: 'Service set up allows flexibility for business to determine who (profile and experience) can promote services',
        bgImage: '/M.png',
        bgSize: ""
    },
    {
        img: 'operational-enhancement.svg',
        title: 'Operational Enhancement',
        description: 'Every user of Dynamo has the potential to access and/or promote a service if the user meets established requirements',
        bgImage: '/O.png',
        bgSize: ""
    },
   
  
  ]

export function BusinessBenefits(){
    const [isOpen,setIsOpen] = React.useState(false)

    const handleOpenModal = () => {
        setIsOpen(true)
    }
  
    const handleCloseModal = () => {
        setIsOpen(false)
    }
    return (
        <div className="bg-[#F3F3F3] pt-10  pb-10" id={"business"}>
            <div className="container mx-auto  px-8">
               <p className="font-sora font-light text-base py-10 px-1 md:px-0">Any registered organization that has a service that can be delivered digitally or is interested in increasing their retail reach can sign up to the platform. Dyanmo provides a robust and secure environment to connect your services to new and existing customers.</p>
               {/* <p className="font-sora font-bold text-2xl py-6">What are the benefit to your business</p> */}
               <SwipeSlider  title={"What are the benefits to your business"} data={benefits} settings={{ margin: "" , width: "md:w-96 w-4/5" , bg: 'bg-[#EAE9E9]' , height: "md:h-96 h-4/5" }}/>
               <div className="mt-10">
                 <a className="flex flex-row gap-2 items-center font-sora font-semibold text-xl align-top cursor-pointer" onClick={() => handleOpenModal()}>
                    Partner with us 
                      <div >
                        <Image 
                            src="/arrow-btn.svg"
                            alt="partner us"
                            width={20}
                            height={20}
                        />
                      </div>
                     
                 </a>
            </div>
            </div>
            
            <JoinModal isOpen={isOpen} onClose={handleCloseModal} />

        </div>
    )
}