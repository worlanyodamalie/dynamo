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
    <section className=" ">
    <div className="grid min-h-screen place-content-center max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hidden md:mt-0 md:col-span-5 md:flex">
                 <Image 
                      src="/mobile.gif"
                      width={650}
                      height={650}
                     alt="Hero Image"
                />
        </div> 
        <div className="mr-auto place-self-center lg:col-span-7">
            <h2 className="font-sora font-bold  text-3xl  md:text-6xl break-words mb-2 max-w-2xl">Rewarding your daily life</h2>
            <h6 className="font-sora font-normal text-base mb-6">Unlocking and creating opportunities in our digital world</h6>
            {/* <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Payments tool for software companies</h1> */}
            {/* <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p> */}
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
                         <div>
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
</section>
  )
}
 
      
          