import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Cryptocurrency } from '@types/index';
import { formatCurrency, formatLargeNumber } from '@utils/helpers';

interface CryptoSectionProps {
  initialData: Cryptocurrency[];
}

export default function CryptoSection({ initialData }: CryptoSectionProps) {
  const [coins, setCoin] = useState(initialData);

  return (
    <section className="section bg-white dark:bg-gray-800">
      <div className="container-max">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-display font-bold mb-2 text-gray-900 dark:text-white">
              Top Cryptocurrencies
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Live crypto prices and market data
            </p>
          </div>
          <Link
            href="/crypto"
            className="text-primary-600 dark:text-primary-400 hover:underline font-semibold"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coins.map((coin) => (
            <Link key={coin.id} href={`/crypto/${coin.id}`}>
              <div className="card cursor-pointer group p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {coin.image && (
                      <Image
                        src={coin.image}
                        alt={coin.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    )}
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">
                        {coin.name}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase">
                        {coin.symbol}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    #{coin.market_cap_rank}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>