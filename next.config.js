/** @type {import('next').NextConfig} */
// const path = '/images/' + process.env.NEXT_PUBLIC_SANITY_PROJECT_ID + '/production/**' 

let isGithubActions = process.env.ONEGALLON_ACTIONS || false

let images = {
  loader: 'default',
  path: "https://exploredynamo.imgix.net/",
  
}

if (isGithubActions) {
 

  images['loader'] = 'custom'
  images['loaderFile'] = './imgix.ts'
  
  
  
}


const nextConfig = {
    images: images  
     
}


module.exports = nextConfig
