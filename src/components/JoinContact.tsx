"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useForm , SubmitHandler , Controller } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { SvgComponent , ToastContent } from './index';
import Select from 'react-select';
import {InlineWidget} from 'react-calendly'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'


type Inputs = {
    name: string,
    email: string,
    phone: string,
    message: string,
    services: {}[],
  }

const options = [
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Brand Promotion', label: 'Brand Promotion' },
    { value: 'Advertisement', label: 'Advertisement' }
  ]
  

export function JoinContact(){
    const {register,handleSubmit,formState,formState: {errors , isSubmitSuccessful},reset , control} = useForm<Inputs>()

    const [loadingState,setLoadingState] = React.useState(false)

    const [formStep,setFormStep] = React.useState(1)
    const [isNextStep,setNextStep] = React.useState(false)

    const API = process.env.NEXT_PUBLIC_API!


    useEffect(() => {
        if(formState.isSubmitSuccessful)
         {
            reset({
                name: '',
                phone: '',
                email: '',
                message: '',
                services: []
            })
         }
        
      }, [formState,reset])

   

    const nextStep = (step: number) => {
        // console.log("inside next step",step)
        // console.log("inside next step",formState)
        setFormStep(step+1)
        // if(formState?.isValid){
        //     setFormStep(step+1)
        // }
        
    }

    const prevStep = (step: number) => {
        setFormStep(step-1)
    }

    const notify = () => toast(ToastContent)


    const onSubmit: SubmitHandler<Inputs> = async (data) => {
       
      try {
        setLoadingState(true);

        const services = data?.services.map((service: any) => {
          return service.value;
        });

        const dynamoService = services.toString();

        const contact = [
          data?.name,
          data?.email,
          data?.phone,
          dynamoService,
          data?.message,
        ];

        const sheetData = {
          range: "Organisation!A2:D",
          // name: data?.name,
          // email: data?.email,
          // phone: data?.phone,
          // service: dynamoService,
          // message: data?.message

          data: contact,
          type: "dynamo",
        };

        const response = await fetch(API, {
          method: "POST",
          headers: {
            // 'Accept': 'application/json',
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sheetData),
        });
        // const response = await fetch('/api/sheet'+ '?' + new URLSearchParams(sheetData) )

        const content = await response.json();

        if (content?.status === 200) {
          notify();
          setLoadingState(false);
        } else {
          setLoadingState(false);
        }
      } catch (error) {
        setLoadingState(false);
      }
      
      
    }


    return (
      <div className="container mx-auto ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col md:mx-auto  lg:w-2/5 md:w-3/5"
        >
          {formStep == 1 && (
            <div>
              <div className="flex flex-col mb-5">
                <h2 className="mb-1 font-sora text-xs  font-normal">
                  Organisation Name
                </h2>
                <input
                  type="text"
                  placeholder=""
                  className="input px-0 h-8 w-full  rounded-none border-x-0 border-y-0 border-b-[0.7px] border-[#ACACAC] focus:outline-none"
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
                <h2 className="mb-1 font-sora text-xs  font-normal">
                  Organisation Email
                </h2>
                <input
                  type="text"
                  placeholder=""
                  className="input px-0 h-8 w-full  rounded-none border-x-0 border-y-0 border-b-[0.7px] border-[#ACACAC] focus:outline-none"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
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
              <div className="flex flex-col mb-5 organisation--contact">
                <h2 className="mb-1 font-sora text-xs  font-normal">
                  Organisation Phone
                </h2>
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
                {/* <input
                  type="text"
                  placeholder=""
                  className="input px-0 h-8 w-full  rounded-none border-x-0 border-y-0 border-b-[0.7px] border-[#ACACAC] focus:outline-none"
                  {...register("phone", { required: true })}
                />
                {errors.phone?.type === "required" && (
                  <span
                    role="alert"
                    className="mt-1 font-sora text-xs font-bold text-red-600"
                  >
                    A phone number is required
                  </span>
                )} */}
              </div>
              <div className="flex flex-col mb-5">
                <h2 className="mb-1 font-sora text-xs  font-normal">
                  What Dynamo Services are you interested in?
                </h2>
                <div>
                  <Controller
                    name="services"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <Select {...field} options={options} isMulti />
                    )}
                  />
                  {errors.services?.type === "required" && (
                    <span
                      role="alert"
                      className="mt-1 font-sora text-xs font-bold text-red-600"
                    >
                      Please select a service
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col mb-5">
                <h2 className="mb-1 font-sora text-xs  font-normal">
                  Comments
                </h2>
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
            </div>
          )}
          { formStep === 2 && (
            <div>
              <div className="flex flex-col mb-5">
                  <InlineWidget url="https://calendly.com/exploredynamo/30min" />
              </div>
            </div>
          )}
          {/* <button
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
                  {loadingState && (
                    <div className="px-2">
                      <SvgComponent />
                    </div>
                  )}
                </button> */}
          <div className="flex">
            {formStep > 1 && (
              <>
                <button
                  className="mt-4 flex  items-center font-sora font-normal text-sm ml-auto cursor-pointer"
                  onClick={() => prevStep(formStep)}
                >
                  <span>Previous</span>
                  <div className="px-2">
                    <Image
                      src="left-arrow.svg"
                      alt="send button"
                      width={36}
                      height={36}
                      className="ml-2"
                    />
                  </div>
                </button>
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
                  {loadingState && (
                    <div className="px-2">
                      <SvgComponent />
                    </div>
                  )}
                </button>
              </>
            )}
            {formStep !== 2 && (
              <button
                className="mt-4 flex  items-center font-sora font-normal text-sm ml-auto cursor-pointer"
                onClick={() => nextStep(formStep)}
              >
                <span>Next</span>
                <div className="px-2">
                  <Image
                    src="send-button.svg"
                    alt="send button"
                    width={36}
                    height={36}
                    className="ml-2"
                  />
                </div>
              </button>
            )}
          </div>
        </form>
        <ToastContainer />
      </div>
    );
}