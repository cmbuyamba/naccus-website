import { useTranslations } from 'next-intl';
import EventsPreview from '../../../components/EventsPreview';

export default function EventsPage() {
  const t = useTranslations('events');

  return (
    <div className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">{t('title')}</h1>
        <EventsPreview />
      </div>
    </div>
  );
}
