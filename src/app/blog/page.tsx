import Image from "next/image";
import Link from "next/link";
import { groq } from "next-sanity";
import { client } from "../utilities/index";

// const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: "production",
//   apiVersion: formatDate(new Date()),
//   useCdn: false
// })

export async function getStaticPaths(){
    const paths = await client.fetch(`*[_type == "post" && defined(slug.current)][].slug.current`)

    return {
        paths: paths.map((slug) => ({params: {slug}})),
        fallback: true
    }
}

export async function getStaticProps(){  
    const posts = await client.fetch(groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc) `) 
    return {
        props: {
            posts
        }
    } 
    // const {slug = ""} = context.params

    // const posts = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, {slug})
    // return {
    //     props: {
    //         posts
    //     }
    // }
}

// const posts = [
//     {
//        "body":[
//           {
//              "_key":"8138b12dfa12",
//              "markDefs":[
                
//              ],
//              "children":[
//                 {
//                    "_key":"5cfea0d417ed",
//                    "_type":"span",
//                    "marks":[
                      
//                    ],
//                    "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at dui sapien. In auctor vehicula purus vel consectetur. Pellentesque ac eleifend mauris, vitae convallis lectus. Donec malesuada blandit neque vel pharetra. Donec at fermentum massa. Phasellus non erat erat. In laoreet lorem quis egestas pulvinar. Quisque accumsan non ex in laoreet. Sed tincidunt, ante at maximus pellentesque, tortor eros iaculis odio, ac maximus tellus magna nec quam.\n\nNam ex urna, fringilla vitae risus vel, hendrerit viverra nulla. Quisque felis purus, cursus ut justo non, condimentum consectetur felis. Fusce laoreet lorem at fringilla dapibus. Quisque ultricies sed velit ac pretium. Sed ante nibh, hendrerit vitae tincidunt nec, blandit quis justo. Sed hendrerit risus sit amet elementum porta. Quisque id ipsum et magna malesuada luctus auctor nec ante. Sed eget facilisis nisl. Suspendisse lectus dui, rhoncus id posuere nec, scelerisque vel orci. Proin aliquam volutpat ullamcorper. Pellentesque interdum metus sit amet tortor rutrum, egestas suscipit felis lacinia.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at dui sapien. In auctor vehicula purus vel consectetur. Pellentesque ac eleifend mauris, vitae convallis lectus. Donec malesuada blandit neque vel pharetra. Donec at fermentum massa. Phasellus non erat erat. In laoreet lorem quis egestas pulvinar. Quisque accumsan non ex in laoreet. Sed tincidunt, ante at maximus pellentesque, tortor eros iaculis odio, ac maximus tellus magna nec quam.\n\nNam ex urna, fringilla vitae risus vel, hendrerit viverra nulla. Quisque felis purus, cursus ut justo non, condimentum consectetur felis. Fusce laoreet lorem at fringilla dapibus. Quisque ultricies sed velit ac pretium. Sed ante nibh, hendrerit vitae tincidunt nec, blandit quis justo. Sed hendrerit risus sit amet elementum porta. Quisque id ipsum et magna malesuada luctus auctor nec ante. Sed eget facilisis nisl. Suspendisse lectus dui, rhoncus id posuere nec, scelerisque vel orci. Proin aliquam volutpat ullamcorper. Pellentesque interdum metus sit amet tortor rutrum, egestas suscipit felis lacinia.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at dui sapien. In auctor vehicula purus vel consectetur. Pellentesque ac eleifend mauris, vitae convallis lectus. Donec malesuada blandit neque vel pharetra. Donec at fermentum massa. Phasellus non erat erat. In laoreet lorem quis egestas pulvinar. Quisque accumsan non ex in laoreet. Sed tincidunt, ante at maximus pellentesque, tortor eros iaculis odio, ac maximus tellus magna nec quam.\n\nNam ex urna, fringilla vitae risus vel, hendrerit viverra nulla. Quisque felis purus, cursus ut justo non, condimentum consectetur felis. Fusce laoreet lorem at fringilla dapibus. Quisque ultricies sed velit ac pretium. Sed ante nibh, hendrerit vitae tincidunt nec, blandit quis justo. Sed hendrerit risus sit amet elementum porta. Quisque id ipsum et magna malesuada luctus auctor nec ante. Sed eget facilisis nisl. Suspendisse lectus dui, rhoncus id posuere nec, scelerisque vel orci. Proin aliquam volutpat ullamcorper. Pellentesque interdum metus sit amet tortor rutrum, egestas suscipit felis lacinia."
//                 }
//              ],
//              "_type":"block",
//              "style":"normal"
//           }
//        ],
//        "_updatedAt":"2023-06-04T09:20:59Z",
//        "slug":{
//           "current":"rewarding-your-daily-life",
//           "_type":"slug"
//        },
//        "publishedAt":"2023-06-02T06:55:00.000Z",
//        "author":{
//           "_ref":"7afda680-9bc9-4747-9fc1-6afc830c15c9",
//           "_type":"reference"
//        },
//        "_createdAt":"2023-06-02T06:51:35Z",
//        "_id":"f4aa64c3-70a5-4540-be27-0b8cf7861551",
//        "mainImage":{
//           "_type":"image",
//           "alt":"Blog picture",
//           "asset":{
//              "_ref":"image-aa5bc7f30b23d6093331f386dea513a5306e1feb-306x252-png",
//              "_type":"reference"
//           }
//        },
//        "_rev":"7cGkUfKBdO09eJNATbKNed",
//        "_type":"post",
//        "title":"Rewarding your daily life"
//     }
//  ]


export default function Blog({posts}){
    return (
        <div className="flex flex-col justify-center items-center p-6">
            <h2 className="font-sora font-normal text-lg mb-2">Blog</h2>
            <h1 className="font-sora font-semibold text-2xl md:text-4xl mb-1">Rewarding your daily life</h1>
            <p className="font-sora font-light text-lg mb-2">Unlocking and creating opportunities in our digital world</p>
            <div className="w-full lg:w-11/12 relative h-80 md:h-96 mt-8 mb-8">
                <div className="absolute inset-0 w-full">
                    <Image 
                       src="/blog-banner.png"
                       alt="Blog banner"
                       fill
                    />
                </div>
                <div className="relative p-4 z-10 flex flex-col justify-end h-80 md:h-96">
                    <p className="font-sora font-light text-xs text-white mb-2 ">Ghana Web | 12 May 2023</p>
                    <h1 className="font-sora font-semibold text-white text-lg ">Rewarding your daily life</h1>
                    <h2 className="font-sora font-light text-white text-sm mb-1">Unlocking and creating opportunities in our digital world</h2>
                </div>
                    
            </div>
            <div className="flex flex-row flex-wrap w-full lg:w-11/12 gap-3">
              
                {
                    posts?.length > 0 && posts?.map(({ _id,title= '' ,slug = '' , publishedAt = ''   }) =>  slug && (
                        <Link key={_id} href={`/blog/${encodeURIComponent(slug.current)}`} className="flex-auto w-1/2 lg:w-3/12 md:w-4/12  ">
                        <div>
                             <div className="relative h-52 md:h-60 mb-4">
                                 <Image 
                                 src="/subiyanto.png"
                                 alt="blog image"
                                 fill
                                 />
                             </div>
                             <div className="flex flex-col">
                             <p className="font-sora font-light text-xs">Ghana Web | {new Date(publishedAt).toDateString()}</p>
                             <h1 className="font-sora font-semibold text-lg mb-3">{title}</h1>
                             <p className="font-sora font-light text-base mb-2">Lorem ipsum dolor sit amet,consectetur adipiscing elit. Suspendisse semper, nisl.</p>
                             </div>
                        </div>
                     </Link>
                    ))
                }
                {/* {
                    [1,2,3,4,5,6].map((item) => {
                        return (

                            <Link key={item} href={`/blog/rewarding-your-daily-life`} className="flex-auto w-1/2 lg:w-3/12 md:w-4/12  ">
                               <div>
                                    <div className="relative h-52 md:h-60 mb-4">
                                        <Image 
                                        src="/subiyanto.png"
                                        alt="blog image"
                                        fill
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                    <p className="font-sora font-light text-xs">Ghana Web | 12 May 2023</p>
                                    <h1 className="font-sora font-semibold text-lg mb-3">Rewarding your daily life</h1>
                                    <p className="font-sora font-light text-base mb-2">Lorem ipsum dolor sit amet,consectetur adipiscing elit. Suspendisse semper, nisl.</p>
                                    </div>
                               </div>
                            </Link>

                            
                        )
                        
                    })
                } */}
                
                
            </div>

        </div>
    )
} 

