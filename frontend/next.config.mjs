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
                hostname: 'airbnb-clone-8nmo.onrender.com',
                port: '',
                pathname: '/media/**'
            }
        ],
        domains: ['airbnb-clone-8nmo.onrender.com', 'res.cloudinary.com'],
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: process.env.NODE_ENV === 'production'
                    ? 'https://airbnb-clone-8nmo.onrender.com/api/:path*'
                    : 'http://localhost:8000/api/:path*',
            },
        ];
    },
};

export default nextConfig;
