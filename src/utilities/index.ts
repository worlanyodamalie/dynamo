import { createClient } from "next-sanity";
import { ImageLoaderProps } from "next/image";


export const client = createClient({
  projectId: "s9y7etk0",
  dataset: "production",
  apiVersion: formatDate(new Date()),
  useCdn: false
})

const date = new Date()

date.setHours(0,0,0,0)

// Format Date to YYYY-MM-DD
function padTo2Digits(num: number){
    return num.toString().padStart(2,'0')
}

export function formatDate(date: { getFullYear: () => any; getMonth: () => number; getDate: () => any; }) {
    return [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-');
  }

 export const handleClickScroll = (type: string) => {
  const element = document.getElementById(type)

  if(element){
      element.scrollIntoView({behavior: 'smooth'})
  }

} 

export const customLoader = ({ src, width, quality }: ImageLoaderProps) => {
  //console.log("customLoader" , src)
  return `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${src}?w=${width}&q=${quality || 75}`
}