'use client'
import Image from "next/image";
import React, {useRef,useState,useLayoutEffect} from "react"
import {motion , useTransform , useScroll , useSpring,useInView , useMotionValue } from 'framer-motion'
// import Slider from "react-slick"

// const settings = {
//     // className: "center",
//     infinite: true,
//     // centerPadding: "60px",
//     slidesToShow: 3,
//     swipeToSlide: true,
//     adaptiveHeight: true,
//     afterChange: function(index: number) {
//       console.log(
//         `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
//       );
//     }
//   };

  interface SwipeDataType {
    data: {img: string , title: string ,description: string,bgImage: string,bgSize: string}[],
    settings: { margin: string , width: string , bg: string , height: string }
  }

export function SwipeSlider({data,settings}:SwipeDataType ){
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollYRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(scrollRef)

  const [scrollRange,setScrollRange] = useState<number>(0)
  

  useLayoutEffect(() => {
    if(scrollRef.current){
      
      setScrollRange(scrollRef.current.scrollWidth/3)
    }

     
  },[scrollRange])

  const {scrollYProgress} = useScroll({
    target: scrollYRef,
    //isInView ? scrollY : scrollYProgress offset: ["start","end"]
  })

  const scrollY = useMotionValue(0)

  const transform = useTransform(scrollYProgress,[0,0.9],[1,scrollRange])
  
  
//  console.log("scrollRange",scrollRange)

  const spring = useSpring(transform,{
    velocity: -0.9000000000000002,
    // velocity: 2000,
    damping: 100,
    stiffness: 350,
  })


    return (
        <div className="pb-10"
             ref={scrollYRef}
        >
            <motion.div 
               ref={scrollRef}
               className={`carousel gap-3  ${settings?.margin} ` }
               style={{
                x: spring,
                scrollBehavior: "smooth",
               }}
               whileInView={{ transform: "translateX(-1px)" }}
              
               >
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
            </motion.div>
           


            {/* <Slider {...settings}>
                {
                    data.map((item,index) => {
                        return (
                            <div key={item.title + "__" + index} className="bg-[#F3F3F3] p-4 mr-6">
                                <div>
                                  <Image 
                                    src={item.img}
                                    alt={item.title}
                                    width={350}
                                    height={300}
                                    className="mx-auto"
                                    />
                                </div> 
                                   
                              <h2 className="font-sora font-bold text-lg mt-8 mb-1">{item.title}</h2>
                               <p className="font-sora font-light text-base mb-2">{item.description}</p>
                          </div>
                        )
                    })
                }
               
                
                
            </Slider> */}
              
        </div>
    )
}