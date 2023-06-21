'use client'
import Image from "next/image";
import React, {useRef,useState,useLayoutEffect} from "react"
import {motion , useTransform , useScroll , useSpring,useInView , useMotionValue} from 'framer-motion'
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
    data: {img: string , title: string ,description: string}[],
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
    // offset: ["start","end"]
  })

  const scrollY = useMotionValue(0)

  const transform = useTransform(isInView ? scrollY : scrollYProgress,[0,0.9],[1,-scrollRange])
  
  


  const spring = useSpring(transform,{
    velocity: -300,
    damping: 100,
    stiffness: 350,
  })

  

    return (
        <div className="pb-10"
             ref={scrollYRef}
        >
            <motion.div 
               ref={scrollRef}
               className={`carousel flex-row gap-3  ${settings?.margin} ` }
               style={{
                x: spring,
                scrollBehavior: "smooth",
                width: "100%",
                // transform: isInView ? "translateX(0px)" : ""
                // marginLeft: "-10rem"
               }}
              // viewport={{
              //   margin: "-10"
              // }}
               >
            {
                  data.map((item,index) => {
                    return (
                        <div key={item.title + "__" + index} className={`carousel-item flex-col p-6 ${settings?.width} ${settings?.bg} ${settings.height}`}>
                            <div>
                              <Image 
                                src={item.img}
                                alt={item.title}
                                width={250}
                                height={250}
                                className="mx-auto"
                                style={{
                                   'aspectRatio': '1/1',
                                   'objectFit': 'fill',
                                    // 'width': '100%',
                                }}
                                />
                            </div> 
                            <div className="">
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