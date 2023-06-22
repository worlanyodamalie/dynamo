"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useForm , SubmitHandler } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { SvgComponent , ToastContent } from './index';

type Inputs = {
  name: string,
//   email: string,
  phone: string,
//   message: string
}




export function CompanyContact({range = 'Company!A2:D'}){
    const {register,handleSubmit,formState,formState: {errors , isSubmitSuccessful},reset} = useForm<Inputs>()
    
    const [loadingState,setLoadingState] = React.useState(false)

    useEffect(() => {
        if(formState.isSubmitSuccessful)
         {
            reset({
                name: '',
                phone: '',
                // email: '',
                // message: ''
            })
         }
        
      }, [formState,reset])

      const toastMsg =  range === 'Company!A2:D' ? <ToastContent /> : 'Thanks for contacting us. We will get back to you soon'

      const notify = () => toast(toastMsg)

      const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setLoadingState(true)

        const contact = [data?.name ,  data?.phone  ]

        const sheetData = {
            range: range,
            data: contact
        }
        
        const response = await fetch('/api/sheet' , {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(sheetData)
        })

        

        const content = await response.json()

        // console.log("content",content)
        
        if(content?.status === 200){
            notify()
            setLoadingState(false)
        } else {
            setLoadingState(true)
        }

        
        
    }
    return (
      <div className="container mx-auto ">
      
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:mx-auto  md:w-2/5"
        >
          <div className="flex flex-col mb-5">
            <h2 className="mb-1 font-sora text-xs  font-normal">Business Name</h2>
            <input
              type="text"
              placeholder=""
              className="input  h-8 w-full  rounded-none border-x-0 border-y-0 border-b-[0.7px] border-[#ACACAC] focus:outline-none"
              {...register("name", { required: true, minLength: 2 })}
            />
            {errors.name?.type === "required" && (
              <span
                role="alert"
                className="mt-1 font-sora text-xs font-bold text-red-600"
              >
                A business name is required
              </span>
            )}
          </div>
          {/* <div className="flex flex-col mb-5">
            <h2 className="mb-1 font-sora text-xs  font-normal">Email</h2>
            <input
              type="text"
              placeholder=""
              className="input  h-8 w-full  rounded-none border-x-0 border-y-0 border-b-[0.7px] border-[#ACACAC] focus:outline-none"
              {...register("email", { required: "Email Address is required" })}
            />
            {errors.email && (
              <span
                role="alert"
                className="mt-1 font-sora text-xs font-bold text-red-600"
              >
                {errors.email?.message}
              </span>
            )}
          </div> */}
          <div className="flex flex-col mb-5">
            <h2 className="mb-1 font-sora text-xs  font-normal">Business Phone number</h2>
            <input
              type="text"
              placeholder=""
              className="input  h-8 w-full  rounded-none border-x-0 border-y-0 border-b-[0.7px] border-[#ACACAC] focus:outline-none"
              {...register("phone", { required: true })}
            />
            {errors.phone?.type === "required" && (
              <span
                role="alert"
                className="mt-1 font-sora text-xs font-bold text-red-600"
              >
                A phone number is required
              </span>
            )}
          </div>
          {/* <div className="flex flex-col mb-5">
            <h2 className="mb-1 font-sora text-xs  font-normal">Message</h2>
            <input
              type="text"
              placeholder=""
              className="input  h-8 w-full  rounded-none border-x-0 border-y-0 border-b-[0.7px] border-[#ACACAC] focus:outline-none"
              {...register("message", { required: true, minLength: 2 })}
            />
            {errors.message?.type === "required" && (
              <span
                role="alert"
                className="mt-1 font-sora text-xs font-bold text-red-600"
              >
                Message is required
              </span>
            )}
          </div> */}
          <button
            type="submit"
            className="mt-4 flex  items-center font-sora font-normal text-sm ml-auto cursor-pointer"
           disabled={loadingState}
          >        

            <span>Submit</span>
            {loadingState === false && (
              <Image
                src="send-button.svg"
                alt="send button"
                width={36}
                height={36}
                className="ml-2"
              />
            )}
              {loadingState &&  <div className="px-2"><SvgComponent /></div>}
           
          </button>
         
        </form>
        <ToastContainer />
      </div>
    );
}

