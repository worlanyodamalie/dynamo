"use client"
import Image from "next/image";
import Link from "next/link";
import React  from "react";
import { Contact } from "../components";

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




export default function Join(){
   
    // const { status , setStatus } = useState(false)
    const [title, setTitle] = React.useState('')

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
       
                <div className="w-10/12 mx-auto rounded-sm mt-10 mb-6 p-8 bg-[#F4F4F4]">
                     <div className="flex gap-3 flex-row justify-center">
                        {
                            groups.map((group,index) => {
                                return (
                                <div key={group.title + "--" + index} className="flex-col p-6 bg-[#ECECEC] cursor-pointer"
                                 onClick={() => contactSubmit(group.title)}
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
                     
                     <div>
                        {
                            title === 'Individual' || title === 'Company'  || title === 'Organisation' ? (
                                <Contact />
                            ) : null
                        }
                        
                     </div>
                          
                </div>
       
    )
}