'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { mockApiService } from '../lib/mockData';

interface Event {
  id: number;
  attributes: {
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image?: {
      data?: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export default function EventsPreview() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const t = useTranslations('events');

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      // Use mock data instead of API call
      const data = await mockApiService.getEvents();
      setEvents(data.data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="animate-pulse">
        {[1, 2, 3].map((i) => (
          <div key={i} className="card mb-4">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-full"></div>
          </div>
        ))}
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <div className="card text-center text-gray-600">
        <p>{t('noEvents')}</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="card hover:shadow-xl transition-shadow duration-200">
          <div className="flex items-start space-x-4">
            {event.attributes.image?.data && (
              <div className="w-16 h-16 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                <span className="text-primary-600 text-2xl">📅</span>
              </div>
            )}
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">{event.attributes.title}</h3>
              <div className="text-sm text-gray-600 mb-2">
                <p><strong>{t('date')}:</strong> {new Date(event.attributes.date).toLocaleDateString()}</p>
                <p><strong>{t('time')}:</strong> {event.attributes.time}</p>
                {event.attributes.location && (
                  <p><strong>{t('location')}:</strong> {event.attributes.location}</p>
                )}
              </div>
              {event.attributes.description && (
                <p className="text-gray-700 text-sm">{event.attributes.description.substring(0, 150)}...</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
