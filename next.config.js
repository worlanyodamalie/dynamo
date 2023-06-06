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
}

module.exports = nextConfig
