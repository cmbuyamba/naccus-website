'use client';

import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('home');

  return (
    <div className="hero-section bg-gradient-to-r from-primary-800 to-primary-600">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-primary-100">
          {t('subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary text-lg px-8 py-3">
            {t('watchLive')}
          </button>
          <button className="btn-secondary text-lg px-8 py-3">
            {t('donateNow')}
          </button>
        </div>
      </div>
      
      {/* Mass Schedule Card */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-6 text-gray-800 max-w-md mx-4">
        <h3 className="text-lg font-semibold mb-3 text-center">{t('massSchedule')}</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="font-medium">Saturday:</span>
            <span>5:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Sunday:</span>
            <span>8:00 AM, 10:00 AM, 12:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Weekdays:</span>
            <span>7:00 AM, 12:10 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
