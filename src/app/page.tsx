import Image from 'next/image'
import {LoadingScreen ,  NavBar , Hero , ContentSection, SwipeSlider,BusinessBenefits, Contact , Footer} from './components/index'
import { Suspense } from "react";
import Loading from './loading';

const benefits = [
  {
      img: 'direct-reward.svg',
      title: 'Direct reward',
      description: 'Most transactions come with a reward or a cash back'
  },
  {
      img: '/youthful-modern.svg',
      title: 'Youthful and modern',
      description: 'Digitized transactions and engagements'
  },
  {
      img: 'nexus.svg',
      title: 'Nexus',
      description: 'Bringing all your digital transactions in one place'
  },
  {
      img: '/artificial-intelligence.svg',
      title: 'Artificial Intelligence',
      description: 'Artificial Intelligence(AI) based training and monitoring to enhance user experience'
  },
  {
      img: 'marketing-opportunities.svg',
      title: 'Marketing opportunities',
      description: 'Promoting services to others for a commision'
  },
  {
      img: '/one-stop-service.svg',
      title: 'One-stop service',
      description: 'One-stop service aggregation providing convenience'
  },
  

]

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
    <Suspense fallback={<Loading />}>  
    <div>
      <div className="container mx-auto pt-4  px-4">
        <Hero />
        <ContentSection />
        <div className='px-4 py-8' id="personal">
          <h2 className="font-sora md:text-3xl text-2xl font-bold  pb-8">What are the benefits you enjoy</h2>
          <SwipeSlider
            data={benefits}
            settings={{
              // margin: "ml-[2rem] md:ml-[4rem]",
              margin: "",
              // width: "w-1/2  md:w-1/5",
              // height: "h-1/2 md:h-1/5",
              width: "md:w-96 w-4/5",
              height: "md:h-96 h-4/5",
              bg: "bg-[#F3F3F3]",
              
            }}
        />
        </div>
        
      </div>
      
      
      
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
        </div>
        <Contact />
      </div>
      

      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </div>
   </Suspense> 
  );
}
