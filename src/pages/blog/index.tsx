import Link from "next/link";
import { groq } from "next-sanity";
import { client , customLoader } from "../../utilities";
import imageUrlBuilder  from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { ImageUrlBuilder } from '@sanity/image-url/lib/types/builder';
import { Suspense } from "react";
import { LoadingScreen } from '@/components';
import Layout from '@/components/Layout';

interface ImageProps extends Omit<React.HTMLProps<HTMLImageElement>, 'src'> {
    src: string | ImageUrlBuilder;
  }

function urlFor(source: string ){
  const prefix = `https://exploredynamo.imgix.net/`
  

  const regex = new RegExp(`^${prefix}`)
  const str =  source.replace(regex, '')

  

  return str

  // return imageUrlBuilder(client).image(source)
}

const ptComponents = {
    types: {
      image: ({ value }: any) => {
        if (!value?.asset?._ref) {
          return null
        }

        return (
          <Image
            alt={value.alt || ' '}
            loading="lazy"
            width={320}
            height={240}
            src={value}
            loader={customLoader}
            //src={urlFor(value).width(320).height(240).fit('max').auto('format').url()}
            
          />
         )
      }
    }
  }

  const query = groq`*[_type == "post" && publishedAt < now()]| order(publishedAt desc){
    _id,
    title,
    "name": author->name,
    "categories": categories[]->title,
    "imageUrl": mainImage.asset->url,
    body,
    publishedAt,
    slug

}`



// async function getPosts(){
//     const posts = await client.fetch(query)
//     return posts
// }



function truncateBody(body: any){

    //return (str.length > maxlength) ?
    // str.slice(0, maxlength - 1) + '…' : str;
    const maxlength = 100
    const str = body[0]?.children[0]?.text
    
    const text =  (str.length > maxlength) ? str.slice(0,maxlength - 1) + '...' : str

    
    const block = [{
        _key: body[0]?.children[0]._key,
        _type: body[0]?.children[0]._type,
        children: [
            {
                _key: body[0]?.children[0]._key,
                _type: body[0]?.children[0]._type,
                marks: body[0]?.children[0].marks,
                text: text
            }
        ] ,
        "markDefs": [],
        "style": "normal"
        
    }]
        
    return block

}


// const customLoader = ({ src, width, quality }: ImageLoaderProps) => {
//   return `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production/${src}?w=${width}&q=${quality || 75}`
// }


export default function Blog( {posts} : any){
    // const posts = await getPosts();

    return (
    <Layout>    
      <Suspense fallback={<LoadingScreen />}>
             <div className="flex flex-col justify-center items-center p-6">
            <h2 className="font-sora font-normal text-lg mb-2">Blog</h2>
            <h1 className="font-sora font-semibold text-2xl md:text-4xl mb-1">Rewarding your daily life</h1>
            <p className="font-sora font-light text-lg md:text-inherit text-center mb-2">Unlocking and creating opportunities in our digital world</p>
            <div className="w-full lg:w-11/12 relative h-52 md:h-[30rem] mt-8 mb-8">
                <Link href={`/blog/${encodeURIComponent(posts[0]?.slug?.current)}`}  >
                {
                    posts?.length > 0 && (
                      <>  
                        <div className="absolute inset-0 w-full">
                            <Image 
                              src={posts[0].imageUrl}
                              alt="Blog banner"
                              fill
                              className="object-cover"
                              loader={customLoader}
                            />
                            
                         </div>
                          <div className="relative p-4 z-10 flex flex-col justify-end h-full">
                          <p className="font-sora font-light text-xs text-white mb-2 ">{posts[0].name} | {new Date(posts[0].publishedAt).toDateString()}</p>
                          <h1 className="font-sora font-semibold text-white text-lg ">{posts[0].title}</h1>
                          <h2 className="font-sora font-light text-white text-sm mb-1">Unlocking and creating opportunities in our digital world</h2>
                       </div>
                      </> 
                    )
                }
               
               </Link>
                    
            </div>
            <div className="flex flex-row flex-wrap w-full lg:w-11/12 gap-5">
              
                {
                    posts?.length > 0 && posts?.map(({ _id,title= '' ,slug  , publishedAt = '' , body , name , imageUrl }: {_id: string ,title: string ,slug:  { _type: string, current: string } , publishedAt: string , body: any , name:string , imageUrl: string}) =>  slug && (
                        <Link key={_id} href={`/blog/${encodeURIComponent(slug.current)}`} className="flex-auto w-1/2 lg:w-3/12 md:w-4/12  max-w-sm">
                         <div className="">
                             <div className="relative h-52 md:h-60 mb-4">
                                 <Image 
                                   src={imageUrl}
                                   alt="blog image"
                                   fill
                                   className="object-cover"
                                  loader={customLoader}
                                 />
                             </div>
                             <div className="flex flex-col">
                             <p className="font-sora font-light text-xs">{name} | {new Date(publishedAt).toDateString()}</p>
                             <h1 className="font-sora font-semibold text-lg mb-3">{title}</h1>
                             <div className="font-sora font-light text-base mb-2">
                                
                                <PortableText value={truncateBody(body)}
                                   components={ptComponents}
                                />
                             </div>
                             {/* <p className="font-sora font-light text-base mb-2">Lorem ipsum dolor sit amet,consectetur adipiscing elit. Suspendisse semper, nisl.</p> */}
                             </div>
                        </div>
                     </Link>
                    ))
                }
                
            </div>

        </div>
      </Suspense> 
    </Layout>   
        
    )
} 

// export async function getStaticPaths() {
//   const paths = await client.fetch(query)

//   return {
//     paths: paths.map((slug: any) => ({params: {slug}})),
//     fallback: true,
//   }
// }

export async function getStaticProps () {
  const posts = await client.fetch(query);

  return { props: { posts } };
};

