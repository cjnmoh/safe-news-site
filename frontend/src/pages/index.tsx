import React, { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';
import { GetStaticProps } from 'next';
import Layout from '@components/Layout';
import Hero from '@components/Hero';
import NewsSection from '@components/NewsSection';
import FinanceSection from '@components/FinanceSection';
import CryptoSection from '@components/CryptoSection';
import CTA from '@components/CTA';
import { Article, Stock, Cryptocurrency } from '@types/index';
import apiClient from '@lib/api';

interface HomeProps {
  initialNews: Article[];
  initialStocks: Stock[];
  initialCrypto: Cryptocurrency[];
}

export default function Home({ initialNews, initialStocks, initialCrypto }: HomeProps) {
  const [news, setNews] = useState(initialNews);
  const [stocks, setStocks] = useState(initialStocks);
  const [crypto, setCrypto] = useState(initialCrypto);

  useEffect(() => {
    // Optional: Refresh data on client side
    const refreshData = async () => {
      try {
        const [newsRes, stocksRes, cryptoRes] = await Promise.all([
          apiClient.get('/news/trending?limit=6'),
          apiClient.get('/finance/top-stocks?limit=6'),
          apiClient.get('/crypto/top-coins?limit=6'),
        ]);

        setNews(newsRes.data.data || initialNews);
        setStocks(stocksRes.data.data || initialStocks);
        setCrypto(cryptoRes.data.data || initialCrypto);
      } catch (error) {
        console.error('Error refreshing data:', error);
      }
    };

    const interval = setInterval(refreshData, 5 * 60 * 1000); // Refresh every 5 minutes
    return () => clearInterval(interval);
  }, []);

  const title = 'Safe News - Unified News, Finance & Crypto Aggregator';
  const description =
    'Stay informed with curated news, real-time stock data, and live cryptocurrency prices all in one place. Your trusted source for financial and crypto insights.';

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical="https://safe-news-site.com"
        openGraph={{
          type: 'website',
          url: 'https://safe-news-site.com',
          title: title,
          description: description,
          images: [
            {
              url: 'https://safe-news-site.com/og-image.png',
              width: 1200,
              height: 630,
              alt: 'Safe News - Content Aggregator',
              type: 'image/png',
            },
          ],
          siteName: 'Safe News',
        }}
        twitter={{
          handle: '@SafeNews',
          site: '@SafeNews',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          {
            name: 'keywords',
            content: 'news, finance, stocks, cryptocurrency, crypto, market, trading',
          },
          {
            httpEquiv: 'x-ua-compatible',
            content: 'IE=edge',
          },
        ]}
      />
      <Layout>
        <Hero />
        <NewsSection initialData={news} />
        <FinanceSection initialData={stocks} />
        <CryptoSection initialData={crypto} />
        <CTA />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const [newsRes, stocksRes, cryptoRes] = await Promise.all([
      apiClient.get('/news/trending?limit=6'),
      apiClient.get('/finance/top-stocks?limit=6'),
      apiClient.get('/crypto/top-coins?limit=6'),
    ]);

    return {
      props: {
        initialNews: newsRes.data?.data || [],
        initialStocks: stocksRes.data?.data || [],
        initialCrypto: cryptoRes.data?.data || [],
      },
      revalidate: 300, // Revalidate every 5 minutes
    };
  } catch (error) {
    console.error('Error fetching initial data:', error);
    return {
      props: {
        initialNews: [],
        initialStocks: [],
        initialCrypto: [],
      },
      revalidate: 60,
    };
  }
};