import React, { useState } from 'react';
import Link from 'next/link';
import { Stock } from '@types/index';
import { formatCurrency } from '@utils/helpers';

interface FinanceSectionProps {
  initialData: Stock[];
}

export default function FinanceSection({ initialData }: FinanceSectionProps) {
  const [stocks, setStocks] = useState(initialData);

  return (
    <section className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-max">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-display font-bold mb-2 text-gray-900 dark:text-white">
              Market Trends
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Real-time stock prices and market insights
            </p>
          </div>
          <Link
            href="/finance"
            className="text-primary-600 dark:text-primary-400 hover:underline font-semibold"
          >
            View All →
          </Link>
        </div>

        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Symbol
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                    Company Name
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 dark:text-white">
                    Price
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 dark:text-white">
                    Change
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 dark:text-white">
                    Change %
                  </th>
                </tr>
              </thead>
              <tbody>
                {stocks.map((stock) => (
                  <tr
                    key={stock.symbol}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      <Link
                        href={`/finance/${stock.symbol}`}
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        {stock.symbol}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                      {stock.name}
                    </td>
                    <td className="px-6 py-4 text-right font-semibold text-gray-900 dark:text-white">
                      {formatCurrency(stock.price)}
                    </td>
                    <td
                      className={`px-6 py-4 text-right font-semibold ${
                        stock.change >= 0
                          ? 'text-accent-600 dark:text-accent-400'
                          : 'text-red-600 dark:text-red-400'
                      }`}
                    >
                      {stock.change >= 0 ? '+' : ''}{formatCurrency(stock.change)}
                    </td>
                    <td
                      className={`px-6 py-4 text-right font-semibold ${
                        stock.changePercent >= 0
                          ? 'text-accent-600 dark:text-accent-400'
                          : 'text-red-600 dark:text-red-400'
                      }`}
                    >
                      {stock.changePercent >= 0 ? '▲' : '▼'} {Math.abs(stock.changePercent).toFixed(2)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}