'use client';

import { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

interface LivestreamData {
  id: number;
  attributes: {
    title: string;
    url: string;
    isLive: boolean;
    description?: string;
  };
}

export default function LivestreamWidget() {
  const [livestream, setLivestream] = useState<LivestreamData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLivestream();
  }, []);

  const fetchLivestream = async () => {
    try {
      const response = await fetch(`${process.env.STRAPI_API_URL}/api/livestream`);
      const data = await response.json();
      setLivestream(data.data || null);
    } catch (error) {
      console.error('Error fetching livestream:', error);
      setLivestream(null);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="card animate-pulse">
        <div className="h-64 bg-gray-200 rounded-lg mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-full"></div>
      </div>
    );
  }

  if (!livestream || !livestream.attributes.url) {
    return (
      <div className="card text-center">
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
          <div className="text-gray-500">
            <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <p>No live stream available at the moment</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="relative">
        {livestream.attributes.isLive && (
          <div className="absolute top-2 left-2 z-10 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
            🔴 LIVE
          </div>
        )}
        <div className="aspect-video">
          <ReactPlayer
            url={livestream.attributes.url}
            width="100%"
            height="100%"
            controls
            playing={livestream.attributes.isLive}
          />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-lg mb-2">{livestream.attributes.title}</h3>
        {livestream.attributes.description && (
          <p className="text-gray-700">{livestream.attributes.description}</p>
        )}
      </div>
    </div>
  );
}
