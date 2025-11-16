/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  
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
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },

  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
    ];
  },

  redirects: async () => {
    return [];
  },

  rewrites: async () => {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    };
  },
};

module.exports = nextConfig;