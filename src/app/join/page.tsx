import Image from "next/image";
import Link from "next/link";
import React from "react";

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
    return (
       
                <div className="w-full rounded-sm p-4 bg-[#F4F4F4]">
                     <div className="flex gap-3 flex-row">
                        {
                            groups.map((group,index) => {
                                return (
                                <div key={group.title + "--" + index} className="flex-col p-6 bg-[#ECECEC]">
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
                          
                </div>
       
    )
}