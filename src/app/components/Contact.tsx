import Image from 'next/image'
import React from 'react'

export function Contact(){
    return (
        <div className='container mx-auto px-4'>
             <div className='w-full border-t-[0.7px] border-[#C9C9C9] mt-8 mb-8'></div>
             <h2 className='font-sora text-3xl font-bold mb-10  text-center'>Contact Us</h2>
             <div className='flex flex-col mx-auto  w-2/5'>
                  <div className='mb-5'>
                      <h2 className='mb-1 font-sora text-xs  font-bold'>Name</h2>
                      <input type="text" placeholder="" className="input input-ghost h-8 w-full  rounded-none border-x-0 border-y-0 border-b-[0.7px] border-[#ACACAC]" />
                  </div>
                  <div className='mb-5'>
                      <h2 className='mb-1 font-sora text-xs  font-bold'>Email</h2>
                      <input type="text" placeholder="" className="input input-ghost h-8 w-full  rounded-none border-x-0 border-y-0 border-b-[0.7px] border-[#ACACAC]" />
                  </div>
                  <div className='mb-5'>
                      <h2 className='mb-1 font-sora text-xs  font-bold'>Phone</h2>
                      <input type="text" placeholder="" className="input input-ghost h-8 w-full  rounded-none border-x-0 border-y-0 border-b-[0.7px] border-[#ACACAC]" />
                  </div>
                  <div className='mb-5'>
                      <h2 className='mb-1 font-sora text-xs  font-bold'>Message</h2>
                      <input type="text" placeholder="" className="input input-ghost h-8 w-full  rounded-none border-x-0 border-y-0 border-b-[0.7px] border-[#ACACAC]" />
                  </div>
                  <a className='mt-4 flex  items-center font-sora font-normal text-lg ml-auto'>
                            Send
                            <Image 
                               src="send-button.svg"
                               alt="send button"
                               width={36}
                               height={36}
                               className='ml-2'

                            />
                    </a>
                  {/* <div className='flex items-end mt-4 w-full'>
                         
                  </div> */}
             </div>
        </div>
    )
}