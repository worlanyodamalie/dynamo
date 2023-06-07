import Link from "next/link";
import Image from "next/image";
import React from "react";

const data = [
   {
     img: 'apple.svg',
     header: 'Available on',
     title: 'APP STORE',
     link: '/'
   },
   {
    img: 'android.svg',
    header: 'Available on',
    title: 'PLAY STORE',
    link: '/'
  }

]

export function Hero(){
  return (
    <div className="hero min-h-screen pb-10">
      <div className="hero-content flex-col gap-10 lg:flex-row">
       
        <div>
          <Image src="/mobile.gif" width={200} height={350} alt="Hero Image" />
        </div>
        <div>
            <h2 className="font-sora font-bold  text-3xl  md:text-6xl break-words mb-2 max-w-xl">Rewarding your daily life</h2>
            <h6 className="font-sora font-normal text-base mb-6">Unlocking and creating opportunities in our digital world</h6>
            <div className="flex flex-row items-center gap-6">
            {
                    data.map((item,index) => {
                       return (
                        <Link key={"dynamo__item__" + index} className="btn btn-outline normal-case " href="/">
                        <Image
                              src={item.img}
                              width={25}
                              height={25}
                              alt="Apple icon"
                              
                           />
                           <div className="ml-3">
                           <h4 className="font-sora text-xs font-light text-left">Available on</h4>
                            <h4 className="font-sora text-xs font-bold text-left">{item.title}</h4>
                            </div>

                       </Link>
                       )
                })
                }
            </div>
        </div>
      </div>
    </div>

    // <section className=" ">
    // <div className="grid min-h-screen place-content-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-8 lg:py-16 lg:grid-cols-12">
    //     <div className="flex w-full flex-row gap-8 ">
    //      <div className="flex-1 w-4/12">
    //              <Image
    //                   src="/mobile.gif"
    //                   width={700}
    //                   height={650}
    //                  alt="Hero Image"
    //             />
    //       </div>
    //     <div className="flex-1 w-6/12">
    //         <h2 className="font-sora font-bold  text-3xl  md:text-6xl break-words mb-2 max-w-2xl">Rewarding your daily life</h2>
    //         <h6 className="font-sora font-normal text-base mb-6">Unlocking and creating opportunities in our digital world</h6>
    //         <div className="flex flex-row items-center gap-6">
    //            {
    //               data.map((item,index) => {
    //                  return (
    //                   <Link key={"dynamo__item__" + index} className="btn btn-outline normal-case " href="/">
    //                   <Image
    //                         src={item.img}
    //                         width={25}
    //                         height={25}
    //                         alt="Apple icon"
    //                      />
    //                      <div>
    //                      <h4 className="font-sora text-xs font-light text-left">Available on</h4>
    //                       <h4 className="font-sora text-xs font-bold text-left">{item.title}</h4>
    //                       </div>

    //                  </Link>
    //                  )
    //           })
    //           }

    //        </div>
    //     </div>
    //     </div>

    // </div>
    //</section>
  );
}
 
      
          