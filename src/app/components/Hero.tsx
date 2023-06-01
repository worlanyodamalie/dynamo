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
        <div className="hero min-h-screen mb-[5rem]">
            <div className="hero-content flex-row flex-wrap gap-16">
                <div>
                    <Image 
                       src="/hero.svg"
                       width={250}
                       height={300}
                       alt="Hero Image"
                    />
                </div>
                <div>
                    <h2 className="font-sora font-bold  text-3xl  md:text-6xl break-words mb-2 lg:w-2/3">Rewarding your daily life</h2>
                    <h6 className="font-sora font-normal text-sm mb-6">Unlocking and creating opportunities in our digital world</h6>
                    <div className="flex flex-row items-center gap-6">
                        {
                            data.map((item,index) => {
                               return (
                                <Link key={"dynamo__item__" + index} className="btn btn-outline normal-case " href="/">
                                    <div className="flex flex-row gap-2">
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
                                    </div>
                                </Link>
                               )
                            })
                        }
                        

                    </div>
                </div>
            </div>

        </div>
    )
}

