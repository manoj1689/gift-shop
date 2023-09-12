

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      appDir: true,
      serverComponentsExternalPackages:['@prisma/client','bcrypt'],
      serverActions:true
    },
 
}

module.exports = nextConfig
