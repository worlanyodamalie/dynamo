"use client"
import Modal from './Modal'
import Image from "next/image";
import { Contact , JoinContact , CompanyContact } from "../components";
import React from "react"

const groups = [
    {
        img: 'individual.svg',
        title: 'Individual'
    },
    {
        img: 'organisation.svg',
        title: 'Organisation'
    },
    {
        img: 'company.svg',
        title: 'Company'
    },

]


export function JoinModal({isOpen,onClose}: {isOpen: boolean , onClose: () => void}){
    
    const [title, setTitle] = React.useState('')
    const [outlineBorder,setBorder] = React.useState('')

    function contactSubmit(group: string){
        
        switch (group) {
           case 'Individual':
           case 'Organisation':
            case 'Company':
               setTitle(group)
               break;
        
           default:
               break;
        }
   }


    return (
        <Modal isOpen={isOpen} onClose={onClose}>
              <div className="w-11/12 overflow-y-auto max-h-[50rem] mx-auto rounded-sm mt-10 mb-6 md:p-8 bg-[#F4F4F4]">
                     <div className="flex md:flex-nowrap flex-wrap gap-3 flex-row justify-center">
                        {
                            groups.map((group,index) => {
                                return (
                                <div key={group.title + "--" + index} 
                                     className={`flex-col p-6 bg-[#ECECEC] cursor-pointer rounded-sm `}
                                     onClick={() => contactSubmit(group.title)}
                                     style={{
                                        border: title === group.title ? "1px solid #A8A8A8" : ""
                                     }}
                                >
                                    <div>
                                        <Image 
                                          src={group.img}
                                          alt={group.title}
                                          width={350}
                                          height={280}
                                          className="mx-auto"
                                          style={{
                                             'aspectRatio': '4/3',
                                             'objectFit': 'fill',
                                              // 'width': '100%',
                                          }}
                                          />
                                    </div> 
                                    <h2 className="font-sora text-sm font-bold">{group.title}</h2>
                                  </div>
                                )
                            })
                        }
                        
                     </div>
                     
                     <div className="my-8">
                        {
                            title === 'Individual' ? (
                                <div >
                                    <div className=" mx-auto lg:w-2/5 md:w-3/5">
                                       <h2 className="font-sora text-base font-semibold mb-2">{title}</h2>
                                   </div>
                                     <Contact range='Individual!A2:D'/>
                                </div>
                            ) : title === 'Company' ? (
                                <div >
                                    <div className=" mx-auto  lg:w-2/5 md:w-3/5">
                                       <h2 className="font-sora text-base font-semibold mb-3">{title}</h2>
                                       <h3 className='font-sora text-sm font-normal mb-6'>Submit your Business Contact for a Free Brochure on how partnering With Dynamo can boost your sales </h3>
                                   </div>
                                     <CompanyContact range='Company!A2:D'/>
                                </div>
                            ) : title === 'Organisation' ? (
                                <div >
                                    <div className=" mx-auto  lg:w-2/5 md:w-3/5">
                                        <h2 className="font-sora text-base font-semibold mb-2">{title}</h2>
                                    </div>
                                    <JoinContact />
                                </div>
                            ) : null
                        }
                        {/* {
                            title === 'Individual' || title === 'Company'  || title === 'Organisation' ? (
                                

                                <div >
                                    <div className=" mx-auto  md:w-2/5">
                                       <h2 className="font-sora text-base font-semibold mb-2">{title}</h2>
                                   </div>
                                     <Contact />
                                </div>
                               
                            ) : null
                        } */}

                        
                        
                     </div>
                          
                </div>
        </Modal>
    )
}