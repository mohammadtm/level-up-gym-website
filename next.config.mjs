/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'hips.hearstapps.com',
                port: '',
                pathname: '/hmg-prod/images/**',
            },
        ]
    }
};

export default nextConfig;
