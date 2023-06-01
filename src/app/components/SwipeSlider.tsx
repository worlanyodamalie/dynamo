'use client'
import Image from "next/image";
import React from "react"
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
    settings: { margin: string , width: string , bg: string }
  }

export function SwipeSlider({data,settings}:SwipeDataType ){
    return (
        <div className=" w-full pb-10">
            <div className={`carousel flex-row gap-3  ${settings?.margin} ` }>
            {
                  data.map((item,index) => {
                    return (
                        <div key={item.title + "__" + index} className={`carousel-item flex-col p-6 ${settings?.width} ${settings?.bg}`}>
                            <div>
                              <Image 
                                src={item.img}
                                alt={item.title}
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
                            <div className="">
                                <h2 className="font-sora font-bold text-lg mt-8 mb-1">{item.title}</h2>
                                <p className="font-sora font-light text-base mb-2">{item.description}</p>
                            </div>  
                           
                      </div>
                    )
                })
            }
            </div>
           


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