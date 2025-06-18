import { useTranslations } from 'next-intl';
import NewsPreview from '../../../components/NewsPreview';

export default function NewsPage() {
  const t = useTranslations('news');

  return (
    <div className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">{t('title')}</h1>
        <NewsPreview />
      </div>
    </div>
  );
}
