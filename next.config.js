/** @type {import('next').NextConfig} */
const path = '/images/' + process.env.NEXT_PUBLIC_SANITY_PROJECT_ID + '/production/**' 

const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
            pathname: path,
          },
        ],
      },
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

module.exports = nextConfig
