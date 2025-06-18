'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

interface GalleryImage {
  id: number;
  attributes: {
    title: string;
    description?: string;
    image: {
      data: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
  };
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const t = useTranslations('gallery');

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      const response = await fetch(`${process.env.STRAPI_API_URL}/api/gallery-images?populate=*`);
      const data = await response.json();
      setImages(data.data || []);
    } catch (error) {
      console.error('Error fetching gallery images:', error);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  const galleryItems = images.map((image) => ({
    original: `${process.env.STRAPI_API_URL}${image.attributes.image.data.attributes.url}`,
    thumbnail: `${process.env.STRAPI_API_URL}${image.attributes.image.data.attributes.url}`,
    description: image.attributes.title,
  }));

  if (loading) {
    return (
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">{t('title')}</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">{t('title')}</h1>
        
        {images.length > 0 ? (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <ImageGallery 
              items={galleryItems}
              showThumbnails={true}
              showPlayButton={false}
              autoPlay={false}
            />
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray-600">No images available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
