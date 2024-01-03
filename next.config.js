/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
}

module.exports = {
    transpilePackages: ['gridstack'],
    /* Your Next.js config */
    webpack: (config) => {
        config.resolve.extensions.push(".ts", ".tsx");
        return config;
    },
};
