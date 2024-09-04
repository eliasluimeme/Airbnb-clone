/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: 'your-production-backend.com',
                port: '',
                pathname: '/**'
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: process.env.NODE_ENV === 'production'
                    ? 'https://your-production-backend.com/api/:path*'
                    : 'http://localhost:8000/api/:path*',
            },
        ];
    },
};

export default nextConfig;
