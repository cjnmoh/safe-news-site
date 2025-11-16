const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.newsapi.org',
      },
      {
        protocol: 'https',
        hostname: '**.cryptocompare.com',
      },
      {
        protocol: 'https',
        hostname: '**.finnhub.io',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
});