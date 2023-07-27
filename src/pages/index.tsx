import Image from 'next/image'
import {  Hero , ContentSection,BusinessBenefits, Contact ,  PersonalBenefits} from '../components'
import { Suspense } from "react";
import { LoadingScreen } from '@/components';
import Layout from '@/components/Layout';

const plannedServices = [
  {
    img: 'electricity.svg',
    title: 'Electricity'
  },
  {
    img: 'financial.svg',
    title: 'Financial Services'
  },
  {
    img: 'insurance.svg',
    title: 'Insurance'
  },
  {
    img: 'internet.svg',
    title: 'Internet'
  },
  {
    img: 'investment.svg',
    title: 'Investment'
  },
  {
    img: 'loan.svg',
    title: 'Loan'
  },
  {
    img: 'pension.svg',
    title: 'Pension'
  },
  {
    img: 'travel.svg',
    title: 'Travel'
  },
  {
    img: 'utilities.svg',
    title: 'Utilities'
  },
]

export default function Home() {
  return (
    <Layout>
      <Suspense fallback={<LoadingScreen />}>  
      <div>
        <div className="container mx-auto pt-4  px-4">
          <Hero />
          <ContentSection />  
        </div>
        <PersonalBenefits /> 
        <BusinessBenefits />
        <div className="container mx-auto px-8">
          <h1 className="font-sora font-bold text-2xl my-10 ">Planned Services</h1>
          <div className="flex flex-row justify-center w-11/12 mx-auto flex-wrap">
            {plannedServices.map((service, index) => {
              return (
                <div
                  key={service.title + "--" + index}
                  className="p-6 flex-auto w-1/2 md:w-1/4"
                >
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={48}
                    height={50}
                    className="mb-2"
                  />
                  <h1 className="font-sora font-medium text-base">
                    {service.title}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-5">
          <div className="container mx-auto px-4">
            <div className="w-full border-t-[0.7px] border-[#C9C9C9] mt-8 mb-8"></div>
            <h2 className="font-sora text-2xl font-bold mb-10  text-center">
              Contact Us
            </h2>
            <Contact />
          </div> 
        </div>
        
        
      </div>
    </Suspense> 
   </Layout>  
  );
}

