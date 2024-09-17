/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s3-inventorymanagement-app.s3.ca-central-1.amazonaws.com", // Remove 'https://'
                port: "",
                pathname: "/**",
            },
        ]
    }
};

export default nextConfig;
