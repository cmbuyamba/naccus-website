'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function DonatePage() {
  const [amount, setAmount] = useState(25);
  const [frequency, setFrequency] = useState<'monthly' | 'oneTime'>('oneTime');
  const [loading, setLoading] = useState(false);
  const t = useTranslations('donate');

  const predefinedAmounts = [10, 25, 50, 100, 250, 500];

  const handleDonation = async () => {
    setLoading(true);
    
    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount * 100, // Convert to cents
          currency: 'usd',
          frequency,
        }),
      });

      const { url } = await response.json();
      
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error creating payment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <div className="card">
            <h2 className="text-2xl font-semibold mb-6">Make a Donation</h2>
            
            {/* Frequency Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Donation Frequency
              </label>
              <div className="flex space-x-4">
                <button
                  onClick={() => setFrequency('oneTime')}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    frequency === 'oneTime'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {t('oneTime')}
                </button>
                <button
                  onClick={() => setFrequency('monthly')}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    frequency === 'monthly'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {t('monthly')}
                </button>
              </div>
            </div>

            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {t('amount')} (USD)
              </label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {predefinedAmounts.map((value) => (
                  <button
                    key={value}
                    onClick={() => setAmount(value)}
                    className={`p-3 rounded-lg font-medium ${
                      amount === value
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    ${value}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">$</span>
                <input
                  type="number"
                  min="1"
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            <button
              onClick={handleDonation}
              disabled={loading || amount <= 0}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : `${t('donateButton')} $${amount}`}
            </button>

            <p className="text-xs text-gray-500 mt-4 text-center">
              Donations are processed securely through Stripe. Your generosity is greatly appreciated and helps support our parish community.
            </p>
          </div>

          {/* Impact Information */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">How Your Donation Helps</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 text-sm">⛪</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Church Maintenance</h4>
                    <p className="text-gray-600 text-sm">Keeping our sacred space beautiful and welcoming for all.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 text-sm">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Community Programs</h4>
                    <p className="text-gray-600 text-sm">Supporting youth programs, senior services, and community outreach.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 text-sm">💡</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Ministry Support</h4>
                    <p className="text-gray-600 text-sm">Enabling our ministers to serve the community effectively.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 text-sm">❤️</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Charity Work</h4>
                    <p className="text-gray-600 text-sm">Supporting local families and those in need in our community.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Other Ways to Give</h3>
              <div className="space-y-3 text-gray-600">
                <p>• <strong>In-Person:</strong> During Sunday Mass or at the parish office</p>
                <p>• <strong>By Mail:</strong> Send check to 123 Faith Street, Community City, CC 12345</p>
                <p>• <strong>Planned Giving:</strong> Contact us about including our parish in your will</p>
                <p>• <strong>Volunteer:</strong> Donate your time and talents to our community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
