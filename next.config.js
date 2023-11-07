/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    transpilePackages: ['gridstack'],
    /* Your Next.js config */
    webpack: (config) => {
        config.resolve.extensions.push(".ts", ".tsx");
        return config;
    },
};
