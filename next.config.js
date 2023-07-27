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
    //output: 'export',
    images: images
    // output: 'standalone',
    //trailingSlash: true,
    // images: {
    //     // remotePatterns: [
    //     //   {
    //     //     protocol: 'https',
    //     //     hostname: 'cdn.sanity.io',
    //     //     port: '',
    //     //     pathname: path,
    //     //   },
    //     // ],
    //     // loader: 'imgix',
    //     // loaderFile: './imgix.ts',
    //     // path: "https://exploredynamo.imgix.net/",
    //     // unoptimized: true,


    //   },
     
    //   webpack: (config, { isServer }) => {
    //     if (!isServer) {
    //         // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
    //         config.resolve.fallback = {
    //             fs: false,
    //             child_process: false,
    //             http2: false,
    //             net: false,
    //             tls: false
    //         }
    //     }

    //     return config;
    // }  
}

console.log("images",images)

module.exports = nextConfig
