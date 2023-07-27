import Image from "next/image";
import { client , customLoader } from "../../utilities/index";
import { groq } from "next-sanity";
import imageUrlBuilder  from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "@portabletext/react";
import { LoadingScreen } from '@/components';
import Layout from '@/components/Layout';
import { Suspense } from "react";
import { useRouter } from 'next/router'


function urlFor(source: SanityImageSource ){
  // const prefix = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/production`
  

  // const regex = new RegExp(`^${prefix}`)
  // const str =  source.replace(regex, '')


  // return str

  return imageUrlBuilder(client).image(source)
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
            // width={320}
            // height={240}
            // src={urlFor(value)}
            // loader={customLoader}
            src={urlFor(value).width(320).height(240).fit('max').auto('format').url()}
            
          />
         )
      }
    }
  }

  const query = groq`*[_type == "post" && defined(slug.current)  == $slug][0]{
    title,
    "name": author->name,
    "categories": categories[]->title,
    "imageUrl": mainImage.asset->url,
    body,
    publishedAt,
    slug

}`

// async function getPost(query: string,slug: string){
//    const post = await client.fetch(query,{slug})
//    return post
// }



export default  function BlogPost({ post  }: any){
   
    // console.log("params new" , post)



    
    
    return (
    <Layout>   
      <Suspense fallback={<LoadingScreen />}>
        <div className="flex flex-col justify-center items-center p-6">
              <h2 className="font-sora font-normal text-lg mb-2">Blog</h2>
              <h1 className="font-sora font-semibold text-2xl md:text-4xl mb-1">{post?.title}</h1>
              <p className="font-sora font-light text-lg mb-2 md:text-start text-center">Unlocking and creating opportunities in our digital world</p>
              <div className="w-full  relative h-52 md:h-[30rem] mt-8 mb-8">
                <div className="absolute inset-0 w-full">
                    {
                        post?.imageUrl && (
                            <Image 
                               src={urlFor(post?.imageUrl).url()}
                               alt="Blog banner"
                               fill
                               className="object-cover"
                               loader={customLoader}
                         />
                        )
                    }
                    
                </div>
                <div className="relative p-4 z-10 flex flex-col justify-end h-full">
                    <p className="font-sora font-light text-xs text-white mb-2 ">{post?.name} | {new Date(post?.publishedAt).toDateString()}</p>
                    <h1 className="font-sora font-semibold text-white text-lg ">{post?.title}</h1>
                    <h2 className="font-sora font-light text-white text-sm mb-1">Unlocking and creating opportunities in our digital world</h2>
                </div>
                    
            </div>
            <div className="md:p-4 max-w-7xl mx-auto font-sora font-light text-base mb-2">
                <PortableText value={post?.body}
                              components={ptComponents}
                />
               
               {/* <p className="font-sora font-light text-base mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at dui sapien. In auctor vehicula purus vel consectetur. Pellentesque ac eleifend mauris, vitae convallis lectus. Donec malesuada blandit neque vel pharetra. Donec at fermentum massa. Phasellus non erat erat. In laoreet lorem quis egestas pulvinar. Quisque accumsan non ex in laoreet. Sed tincidunt, ante at maximus pellentesque, tortor eros iaculis odio, ac maximus tellus magna nec quam.

                    Nam ex urna, fringilla vitae risus vel, hendrerit viverra nulla. Quisque felis purus, cursus ut justo non, condimentum consectetur felis. Fusce laoreet lorem at fringilla dapibus. Quisque ultricies sed velit ac pretium. Sed ante nibh, hendrerit vitae tincidunt nec, blandit quis justo. Sed hendrerit risus sit amet elementum porta. Quisque id ipsum et magna malesuada luctus auctor nec ante. Sed eget facilisis nisl. Suspendisse lectus dui, rhoncus id posuere nec, scelerisque vel orci. Proin aliquam volutpat ullamcorper. Pellentesque interdum metus sit amet tortor rutrum, egestas suscipit felis lacinia.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at dui sapien. In auctor vehicula purus vel consectetur. Pellentesque ac eleifend mauris, vitae convallis lectus. Donec malesuada blandit neque vel pharetra. Donec at fermentum massa. Phasellus non erat erat. In laoreet lorem quis egestas pulvinar. Quisque accumsan non ex in laoreet. Sed tincidunt, ante at maximus pellentesque, tortor eros iaculis odio, ac maximus tellus magna nec quam.

                    Nam ex urna, fringilla vitae risus vel, hendrerit viverra nulla. Quisque felis purus, cursus ut justo non, condimentum consectetur felis. Fusce laoreet lorem at fringilla dapibus. Quisque ultricies sed velit ac pretium. Sed ante nibh, hendrerit vitae tincidunt nec, blandit quis justo. Sed hendrerit risus sit amet elementum porta. Quisque id ipsum et magna malesuada luctus auctor nec ante. Sed eget facilisis nisl. Suspendisse lectus dui, rhoncus id posuere nec, scelerisque vel orci. Proin aliquam volutpat ullamcorper. Pellentesque interdum metus sit amet tortor rutrum, egestas suscipit felis lacinia.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at dui sapien. In auctor vehicula purus vel consectetur. Pellentesque ac eleifend mauris, vitae convallis lectus. Donec malesuada blandit neque vel pharetra. Donec at fermentum massa. Phasellus non erat erat. In laoreet lorem quis egestas pulvinar. Quisque accumsan non ex in laoreet. Sed tincidunt, ante at maximus pellentesque, tortor eros iaculis odio, ac maximus tellus magna nec quam.

                    Nam ex urna, fringilla vitae risus vel, hendrerit viverra nulla. Quisque felis purus, cursus ut justo non, condimentum consectetur felis. Fusce laoreet lorem at fringilla dapibus. Quisque ultricies sed velit ac pretium. Sed ante nibh, hendrerit vitae tincidunt nec, blandit quis justo. Sed hendrerit risus sit amet elementum porta. Quisque id ipsum et magna malesuada luctus auctor nec ante. Sed eget facilisis nisl. Suspendisse lectus dui, rhoncus id posuere nec, scelerisque vel orci. Proin aliquam volutpat ullamcorper. Pellentesque interdum metus sit amet tortor rutrum, egestas suscipit felis lacinia.
               </p> */}
            </div>

        </div>
        </Suspense> 
        </Layout>      
    )
}

export async function getStaticPaths() {
  const paths = await client.fetch( `*[_type == "post" && defined(slug.current)][].slug.current`)
  
  
  return {
    paths: paths.map((slug: any) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context: any) {

  const { slug = "" } = context.params
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]{
    title,
    "name": author->name,
    "categories": categories[]->title,
    "imageUrl": mainImage.asset->url,
    body,
    publishedAt,
    slug

}`, { slug })
  return {
    props: {
      post
    }
  }
}

// export async function getStaticPaths(){
//     const paths = await client.fetch(`*[_type == "post" && defined(slug.current)][].slug.current`)

//     return {
//         paths: paths.map((slug) => ({params: {slug}})),
//         fallback: true
//     }
// }



// export async function getStaticProps(context) {
//     const {slug = ''} = context.params
//     const post = await client.fetch(query, {slug})

//     return {
//         props: {
//             post
//         }
//     }
// }