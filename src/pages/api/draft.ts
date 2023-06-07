import { createClient } from "next-sanity";
import {formatDate} from '../../app/utilities/index'

// export default function handler(req,res){
//     res.setDraftMode({enable: true})
//     res.end('Draft mode is enabled')
// }

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: formatDate(new Date()),
    useCdn: false
  })

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: { query: { secret: string | undefined; }; },res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): any; new(): any; }; }; setDraftMode: (arg0: { enable: boolean; }) => void; redirect: (arg0: string) => void; }) => {   
     if(req.query.secret !== process.env.DRAFT_TOKEN){
        return res.status(401).json({message: 'Invalid token'})
     } 

     const posts = await client.fetch(`*[_type == "post"]`)
     console.log("draft post",posts)
     if(!posts) {
        return res.status(401).json({message: 'Inalid slug'})
     }

     res.setDraftMode({enable: true})

     res.redirect('/blog')

}