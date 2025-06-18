export default function DonationSuccessPage() {
  return (
    <div className="section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <div className="card">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h1>
          <p className="text-lg text-gray-700 mb-6">
            Your generous donation has been received successfully. Your support helps us continue our mission 
            of serving our community with faith, hope, and love.
          </p>
          <div className="space-y-4 text-gray-600">
            <p>You will receive a confirmation email shortly with your donation receipt.</p>
            <p>May God bless you for your generosity.</p>
          </div>
          <div className="mt-8">
            <a href="/" className="btn-primary">
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
