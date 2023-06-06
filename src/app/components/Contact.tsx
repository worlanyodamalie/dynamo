"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useForm , SubmitHandler } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

type Inputs = {
  name: string,
  email: string,
  phone: string,
  message: string
}




export function Contact(){
    const {register,handleSubmit,formState,formState: {errors , isSubmitSuccessful},reset} = useForm<Inputs>()

    useEffect(() => {
        if(formState.isSubmitSuccessful)
         {
            reset({
                name: '',
                phone: '',
                email: '',
                message: ''
            })
         }
        
      }, [formState,reset])

      const notify = () => toast('Thanks for contacting us. We will get back to you soon')

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log("data" , data)
       
        const contact = {
            name: data?.name,
            phone: data?.phone,
            email: data?.email,
            message: data?.message
        }
        
        const response = await fetch('/api/sheet' , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        })

        const content = await response.json()

        // console.log("content",content)
        
        if(content?.status === 200){
            notify()
        }

        
        
    }
    return (
        <div className='container mx-auto px-4'>
             <div className='w-full border-t-[0.7px] border-[#C9C9C9] mt-8 mb-8'></div>
             <h2 className='font-sora text-3xl font-bold mb-10  text-center'>Contact Us</h2>
             <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col md:mx-auto  md:w-2/5'>
                  <div className='flex flex-col mb-5'>
                      <h2 className='mb-1 font-sora text-xs  font-bold'>Name</h2>
                      <input type="text" placeholder="" className="input input-ghost h-8 w-full  rounded-none border-x-0 border-y-0 border-b-[0.7px] border-[#ACACAC]" 
                        {...register("name", {required: true,minLength: 2}) }
                      />
                      {errors.name?.type === 'required' &&  <span role="alert" className='mt-1 font-sora text-xs font-bold text-red-600'>A name is required</span>}
                      
                  </div>
                  <div className='flex flex-col mb-5'>
                      <h2 className='mb-1 font-sora text-xs  font-bold'>Email</h2>
                      <input type="text"   placeholder="" className="input input-ghost h-8 w-full  rounded-none border-x-0 border-y-0 border-b-[0.7px] border-[#ACACAC]" 
                       {...register("email", {required: "Email Address is required"}) }
                      />
                       {errors.email &&  <span role="alert" className='mt-1 font-sora text-xs font-bold text-red-600'>{errors.email?.message}</span>}
                  </div>
                  <div className='flex flex-col mb-5'>
                      <h2 className='mb-1 font-sora text-xs  font-bold'>Phone</h2>
                      <input type="text"  placeholder="" className="input input-ghost h-8 w-full  rounded-none border-x-0 border-y-0 border-b-[0.7px] border-[#ACACAC]"
                          {...register("phone", {required: true}) }
                      />
                      {errors.phone?.type === 'required' &&  <span role="alert" className='mt-1 font-sora text-xs font-bold text-red-600'>A phone number is required</span>}
                  </div>
                  <div className='flex flex-col mb-5'>
                      <h2 className='mb-1 font-sora text-xs  font-bold'>Message</h2>
                      <input type="text" placeholder="" className="input input-ghost h-8 w-full  rounded-none border-x-0 border-y-0 border-b-[0.7px] border-[#ACACAC]" 
                        {...register("message", {required: true,minLength: 2}) }
                      />
                     {errors.message?.type === 'required' &&  <span role="alert" className='mt-1 font-sora text-xs font-bold text-red-600'>Message  is required</span>}
                  </div>
                  <button type="submit" className='mt-4 flex  items-center font-sora font-normal text-lg ml-auto cursor-pointer'>
                            Send
                            <Image 
                               src="send-button.svg"
                               alt="send button"
                               width={36}
                               height={36}
                               className='ml-2'

                            />
                    </button>
                  {/* <div className='flex items-end mt-4 w-full'>
                         
                  </div> */}
             </form>
             <ToastContainer />
        </div>
    )
}