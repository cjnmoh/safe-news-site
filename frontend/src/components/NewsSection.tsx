import React, { useState } from 'react';
import Link from 'next/link';
import { Article } from '@types/index';
import NewsCard from './NewsCard';

interface NewsSectionProps {
  initialData: Article[];
}

export default function NewsSection({ initialData }: NewsSectionProps) {
  const [articles, setArticles] = useState(initialData);

  return (
    <section className="section bg-white dark:bg-gray-800">
      <div className="container-max">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-display font-bold mb-2 text-gray-900 dark:text-white">
              Latest News
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Stay updated with trending stories from around the world
            </p>
          </div>
          <Link
            href="/news"
            className="text-primary-600 dark:text-primary-400 hover:underline font-semibold"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}