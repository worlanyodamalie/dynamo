"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useForm , SubmitHandler , Controller } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { SvgComponent , ToastContent } from './index';

// import 'react-phone-number-input/style.css'
// import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import PhoneInput   from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
// import {isValidPhoneNumber,isPossiblePhoneNumber} from "libphonenumber-js/min"

type Inputs = {
  name: string,
  email: string,
  phone: string,
  message: string
}




export function Contact({range = 'Contacts!A2:D'}){
    const {register,handleSubmit,formState,formState: {errors , isSubmitSuccessful},reset , control} = useForm<Inputs>()
    
    const [loadingState,setLoadingState] = React.useState(false)



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

      const toastMsg = range === 'Individual!A2:D'  ? <ToastContent /> : 'Thanks for contacting us. We will get back to you soon'

      const notify = () => toast(toastMsg)

      const onSubmit: SubmitHandler<Inputs> = async (data) => {
        // console.log("data",data)


        setLoadingState(true)

       

        const contact = [data?.name , data?.email , data?.phone ,  data?.message ]

        const sheetData = {
            range: range,
            name: data?.name,
            email: data?.email,
            phone: data?.phone,
            message: data?.message
            // data: contact
        }
        
        // const response = await fetch('/api/sheet' , {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(sheetData)
        // })
        const response = await fetch('/api/sheet'+ '?' + new URLSearchParams(sheetData) )


        

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
          className="flex flex-col md:mx-auto  lg:w-2/5 md:w-3/5"
        >
          <div className="flex flex-col mb-5">
            <h2 className="mb-1 font-sora text-xs  font-normal">Name</h2>
            <input
              type="text"
              placeholder=""
              className="input px-0  h-8 w-full  rounded-none border-x-0 border-y-0 border-b-[0.7px] border-[#ACACAC] focus:outline-none"
              {...register("name", { required: true, minLength: 2 })}
            />
            {errors.name?.type === "required" && (
              <span
                role="alert"
                className="mt-1 font-sora text-xs font-bold text-red-600"
              >
                A name is required
              </span>
            )}
          </div>
          <div className="flex flex-col mb-5">
            <h2 className="mb-1 font-sora text-xs  font-normal">Email</h2>
            <input
              type="text"
              placeholder=""
              className="input px-0 h-8 w-full  rounded-none border-x-0 border-y-0 border-b-[0.7px] border-[#ACACAC] focus:outline-none"
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
          </div>
          <div className="flex flex-col mb-5">
            <h2 className="mb-1 font-sora text-xs  font-normal">Phone</h2>
            {/* <input
              type="text"
              placeholder=""
              className="input px-0 h-8 w-full  rounded-none border-x-0 border-y-0 border-b-[0.7px] border-[#ACACAC] focus:outline-none"
              {...register("phone", { required: true })}
            /> */}
            <Controller
                control={control}
                name="phone"
                rules={{
                  required: 'A phone number is required',
                  //validate: (value) => isPossiblePhoneNumber(value) || 'Phone number is incorrect',
                }}
                render={({ field: { onChange, name } }) => (
                  <PhoneInput
              
                    country={'gh'}
                    value={name}
                    onChange={onChange} 
                    autoFormat={false}
                   
                    inputStyle={{
                      width: "100%",
                      borderTop: "0px",
                      borderRight: "0px",
                      borderLeft: "0px",
                      borderBottom: "1px solid #acacac",
                      color: "#000",
                      borderRadius: "unset"
                    }}  
                    buttonStyle={{
                      borderTop: "0px",
                      borderRight: "0px",
                      borderLeft: "0px",
                      background: "transparent"
                    }} 
                                
                  />
                )}
              />
              {errors.phone && (
                <span
                role="alert"
                className="mt-1 font-sora text-xs font-bold text-red-600"
              >
                  {errors.phone.message}
                </span>
              )}
            {/* {errors.phone?.type === "required" && (
              <span
                role="alert"
                className="mt-1 font-sora text-xs font-bold text-red-600"
              >
                A phone number is required
              </span>
            )} */}
          </div>
          <div className="flex flex-col mb-5">
            <h2 className="mb-1 font-sora text-xs  font-normal">Message</h2>
            <input
              type="text"
              placeholder=""
              className="input px-0  h-8 w-full  rounded-none border-x-0 border-y-0 border-b-[0.7px] border-[#ACACAC] focus:outline-none"
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
          </div>
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

// Contact.defaultProps = {
//     range: 'Contacts!A2:D'
// }