import React from 'react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="container-max text-center mb-16">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
            Your All-in-One
          </span>
          <br />
          <span className="text-gray-900 dark:text-white">Content Hub</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Stay informed with curated news, real-time stock market data, and live cryptocurrency prices all in one trusted platform.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/news"
            className="btn btn-primary"
          >
            📰 Explore News
          </Link>
          <Link
            href="/finance"
            className="btn btn-secondary"
          >
            📈 View Markets
          </Link>
          <Link
            href="/crypto"
            className="btn bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500"
          >
            🪙 Crypto Prices
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-12 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Trusted by thousands of users worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>Real-time Data</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>100% Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>Ad-free Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✅</span>
              <span>24/7 Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}