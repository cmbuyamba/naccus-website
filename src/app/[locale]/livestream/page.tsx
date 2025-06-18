import { useTranslations } from 'next-intl';
import LivestreamWidget from '../../../components/LivestreamWidget';

export default function LivestreamPage() {
  const t = useTranslations('home');

  return (
    <div className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">{t('watchLive')}</h1>
        <LivestreamWidget />
        
        <div className="mt-12 card">
          <h2 className="text-2xl font-semibold mb-6">Mass Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Weekend Masses</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Saturday (Vigil):</span>
                  <span>5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>8:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>10:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>12:00 PM</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-3">Weekday Masses</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>7:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>12:10 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>8:00 AM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-primary-50 rounded-lg">
            <h3 className="text-lg font-medium mb-2 text-primary-800">Special Liturgies</h3>
            <div className="text-sm text-primary-700 space-y-1">
              <p>• First Friday Adoration: 7:00 PM</p>
              <p>• Confession: Saturday 3:30-4:30 PM</p>
              <p>• Rosary: Daily 30 minutes before Mass</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
