import { useTranslations } from 'next-intl';

export default function HistoryPage() {
  const t = useTranslations('history');

  return (
    <div className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600">{t('subtitle')}</p>
        </div>

        <div className="space-y-8">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>
            
            <div className="space-y-12">
              {/* Timeline item */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1955
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold mb-2">Foundation of the Parish</h3>
                  <p className="text-gray-700">
                    Saint Ignatius of Loyola Parish was established in 1955 by Archbishop John Smith to serve 
                    the growing Catholic community in the area. The first Mass was celebrated in a small chapel 
                    that could accommodate only 50 parishioners.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1962
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold mb-2">Construction of the Main Church</h3>
                  <p className="text-gray-700">
                    With the growing congregation, construction began on the current church building. 
                    The beautiful Gothic Revival architecture was designed by renowned architect Mary Johnson, 
                    featuring stunning stained glass windows depicting the life of Saint Ignatius.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1975
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold mb-2">Community Center Addition</h3>
                  <p className="text-gray-700">
                    The parish expanded with the addition of a community center, providing space for 
                    religious education, social gatherings, and community outreach programs. This marked 
                    the beginning of our extensive community service initiatives.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  1995
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold mb-2">Youth Ministry Program</h3>
                  <p className="text-gray-700">
                    Recognizing the importance of engaging young people in faith, the parish established 
                    a comprehensive youth ministry program. This includes youth groups, summer camps, 
                    and service projects that continue to thrive today.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2010
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold mb-2">Digital Renovation</h3>
                  <p className="text-gray-700">
                    The parish embraced modern technology with the installation of audio-visual systems, 
                    enabling livestreaming of Masses and digital communication with parishioners. 
                    This proved invaluable during the challenging times of the COVID-19 pandemic.
                  </p>
                </div>
              </div>

              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2025
                </div>
                <div className="ml-8">
                  <h3 className="text-xl font-semibold mb-2">70th Anniversary Celebration</h3>
                  <p className="text-gray-700">
                    As we celebrate our 70th anniversary, we look back with gratitude on seven decades 
                    of faithful service to our community. We continue to grow and adapt while staying 
                    true to our mission of bringing people closer to God through faith, hope, and love.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Saint Ignatius */}
        <div className="mt-16 card">
          <h2 className="text-2xl font-semibold mb-6">About Saint Ignatius of Loyola</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                Saint Ignatius of Loyola (1491-1556) was a Spanish priest and theologian who founded 
                the Society of Jesus (Jesuits). Born into a noble family, he initially pursued a 
                military career but experienced a profound spiritual conversion after being wounded in battle.
              </p>
              <p className="text-gray-700 mb-4">
                After his recovery, Ignatius dedicated his life to God and developed the Spiritual Exercises, 
                a set of Christian meditations, prayers, and mental exercises that continue to guide 
                countless people in their spiritual journey today.
              </p>
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                He was canonized as a saint in 1622 and is known for his motto "Ad Majorem Dei Gloriam" 
                (For the Greater Glory of God). Saint Ignatius emphasized the importance of finding God 
                in all things and using one's talents in service to others.
              </p>
              <p className="text-gray-700">
                Our parish strives to embody the spirit of Saint Ignatius through our commitment to 
                education, service, and spiritual growth, always seeking to discern God's will in our lives 
                and work for the greater good of our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
