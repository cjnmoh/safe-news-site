import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@types/index';
import { formatDate, truncateText } from '@utils/helpers';

interface NewsCardProps {
  article: Article;
}

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <Link href={`/news/${article.id}`}>
      <div className="card cursor-pointer group">
        {/* Image */}
        <div className="relative h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
          {article.image ? (
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-4xl">
              📰
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-2 py-1 rounded">
              {article.category || 'News'}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {article.source}
            </span>
          </div>

          <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">
            {article.title}
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-4">
            {truncateText(article.description, 100)}
          </p>

          <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-700">
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {formatDate(article.publishedAt)}
            </span>
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm group-hover:translate-x-1 transition-transform">
              Read →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}