/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        addDir: true,
        serverComponentsExternalPackages: ["@tremor/react"]
    }
};

export default nextConfig;
