'use client'
import Image from "next/image";
import React, {useRef,useState,useLayoutEffect,useEffect} from "react"
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


interface SwipeDataType {
    title: string,
    data: {img: string , title: string ,description: string,bgImage: string,bgSize: string}[],
    settings: { margin: string , width: string , bg: string , height: string }
  }

gsap.registerPlugin(ScrollTrigger);


export function SwipeSlider({title,data,settings}:SwipeDataType ){
  const scrollRef = useRef<HTMLDivElement>(null)

  const [scrollRange,setScrollRange] = useState<number>(0)
  
  const useIsomorphicLayoutEffect  = typeof window !== 'undefined' ? useLayoutEffect : useEffect; 

  useLayoutEffect(() => {
    if(scrollRef.current){
      
      // setScrollRange(scrollRef.current.scrollWidth/3)
      setScrollRange(scrollRef.current.scrollWidth)
    }

     
  },[scrollRange])


  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
    const boxes = gsap.utils.toArray('.carousel-item')

    gsap.to(boxes,{
      xPercent: -100 * (boxes.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".carousel-section",
        pin: true,
        scrub: 1,
        snap: 1/(boxes.length - 1),
        //start: "top top",
        end: "+=" + window.innerWidth,
        invalidateOnRefresh: true,
        markers: false

      }
    })
      
      
    },scrollRef)
    return () => ctx.revert();
  },[])

 
    return (
        <div className="pb-5 carousel-wrapper " 
            //  style={{
            //   height: "100%",
            //   overscrollBehavior: "none",
            //  }}
             ref={scrollRef}
             >
             <div className={`carousel-section flex flex-col gap-3  ${settings?.margin} ` } >
               <h2 className="font-sora md:text-3xl text-2xl font-bold pt-5 pb-8">{title}</h2>
              <div className="flex gap-3">
              {
                  data.map((item,index) => {
                    return (
                        <div key={item.title + "__" + index} 
                             className={`carousel-item flex-col p-6 bg-contain bg-center bg-no-repeat ${settings?.width} ${settings?.bg} ${settings.height}`}
                             style={{
                              backgroundImage: `url(${item.bgImage})`,
                              backgroundSize: item.bgSize
                             }}
                             >
                            <div>
                              <Image 
                                src={item.img}
                                alt={item.title}
                                width={280}
                                height={280}
                                className="mx-auto"
                                style={{
                                   'aspectRatio': '1/1',
                                   'objectFit': 'fill',
                                    // 'width': '100% justify-end h-screen',
                                }}
                                />
                            </div> 
                            <div className="relative top-[-14px]">
                                <h2 className="font-sora font-bold text-lg mt-8 mb-1">{item.title}</h2>
                                <p className="font-sora font-light text-base mb-2">{item.description}</p>
                            </div>  
                           
                      </div>
                    )
                })
            }
              </div>
            
               </div>
            {/* </div> */}
        </div>
    )
}