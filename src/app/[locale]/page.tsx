import {useTranslations} from 'next-intl';
import Hero from '../../components/Hero';
import EventsPreview from '../../components/EventsPreview';
import NewsPreview from '../../components/NewsPreview';
import LivestreamWidget from '../../components/LivestreamWidget';

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <div>
      <Hero />
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('upcomingEvents')}</h2>
              <EventsPreview />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('watchLive')}</h2>
              <LivestreamWidget />
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest News</h2>
          <NewsPreview />
        </div>
      </section>
    </div>
  );
}
