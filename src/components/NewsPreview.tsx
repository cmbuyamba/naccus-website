'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { mockApiService } from '../lib/mockData';

interface NewsPost {
  id: number;
  attributes: {
    title: string;
    content: string;
    publishedAt: string;
    featuredImage?: {
      data?: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export default function NewsPreview() {
  const [news, setNews] = useState<NewsPost[]>([]);
  const [loading, setLoading] = useState(true);
  const t = useTranslations('news');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      // Use mock data instead of API call
      const data = await mockApiService.getNews();
      setNews(data.data || []);
    } catch (error) {
      console.error('Error fetching news:', error);
      setNews([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card animate-pulse">
            <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-full"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {news.map((post) => (
        <article key={post.id} className="card">
          {post.attributes.featuredImage?.data ? (
            <div className="w-full h-48 bg-gradient-to-br from-primary-200 to-primary-300 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-primary-600 text-4xl">📰</span>
            </div>
          ) : (
            <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-4xl">📰</span>
            </div>
          )}
          <h3 className="font-semibold text-lg mb-2">{post.attributes.title}</h3>
          <p className="text-sm text-gray-600 mb-2">
            {t('publishedOn')} {new Date(post.attributes.publishedAt).toLocaleDateString()}
          </p>
          <p className="text-gray-700 mb-4">
            {post.attributes.content.substring(0, 150)}...
          </p>
          <button className="text-primary-600 hover:text-primary-800 font-medium">
            {t('readMore')} →
          </button>
        </article>
      ))}
    </div>
  );
}
