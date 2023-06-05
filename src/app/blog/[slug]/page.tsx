import Image from "next/image";
import { client } from "../../utilities/index";
import { groq } from "next-sanity";
import imageUrlBuilder  from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "@portabletext/react";


function urlFor(source: SanityImageSource){
    return imageUrlBuilder(client).image(source)
}

const ptComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null
        }
        return (
          <Image
            alt={value.alt || ' '}
            loading="lazy"
            src={urlFor(value).width(320).height(240).fit('max').auto('format')}
          />
        )
      }
    }
  }

export default function BlogPost({ params , post }: { params: { slug: string } }){
    const {
        title = '',
        name = '',
        categories ,
        imageUrl,
        body = [],
        publishedAt
    } = post
    
    return (
        <div className="flex flex-col justify-center items-center p-6">
              <h2 className="font-sora font-normal text-lg mb-2">Blog</h2>
              <h1 className="font-sora font-semibold text-2xl md:text-4xl mb-1">{title}</h1>
              <p className="font-sora font-light text-lg mb-2">Unlocking and creating opportunities in our digital world</p>
              <div className="w-full lg:w-11/12 relative h-80 md:h-96 mt-8 mb-8">
                <div className="absolute inset-0 w-full">
                    {
                        imageUrl && (
                            <Image 
                               src={urlFor(imageUrl)}
                               alt="Blog banner"
                               fill
                         />
                        )
                    }
                    
                </div>
                <div className="relative p-4 z-10 flex flex-col justify-end h-80 md:h-96">
                    <p className="font-sora font-light text-xs text-white mb-2 ">{name} | {new Date(publishedAt).toDateString()}</p>
                    <h1 className="font-sora font-semibold text-white text-lg ">{title}</h1>
                    <h2 className="font-sora font-light text-white text-sm mb-1">Unlocking and creating opportunities in our digital world</h2>
                </div>
                    
            </div>
            <div className="p-4 max-w-7xl mx-auto font-sora font-light text-base mb-2">
                <PortableText value={body}
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
    )
}

export async function getStaticPaths(){
    const paths = await client.fetch(`*[_type == "post" && defined(slug.current)][].slug.current`)

    return {
        paths: paths.map((slug) => ({params: {slug}})),
        fallback: true
    }
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
    title,
    "name": author->name,
    "categories": categories[]->title,
    "imageUrl": image.asset->url,
    body,
    publishedAt

}`

export async function getStaticProps(context) {
    const {slug = ''} = context.params
    const post = await client.fetch(query, {slug})

    return {
        props: {
            post
        }
    }
}