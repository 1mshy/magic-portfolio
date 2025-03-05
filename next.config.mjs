import mdx from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: {},
});

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
    output: 'export', // Enables static export
    basePath: '', // Set to '/repo-name' if hosted at username.github.io/repo-name
    trailingSlash: true, // Optional: Ensures cleaner URLs
};

module.exports = nextConfig;

export default withNextIntl(withMDX(nextConfig));