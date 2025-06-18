'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

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
      const response = await fetch(`${process.env.STRAPI_API_URL}/api/news?populate=*&sort=publishedAt:desc&pagination[limit]=3`);
      const data = await response.json();
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
          {post.attributes.featuredImage?.data && (
            <img
              src={`${process.env.STRAPI_API_URL}${post.attributes.featuredImage.data.attributes.url}`}
              alt={post.attributes.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
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
