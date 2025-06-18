'use client';

import { devConfig } from '../lib/devConfig';

export default function DevBanner() {
  if (!devConfig.useMockData) {
    return null;
  }

  return (
    <div className="bg-yellow-500 text-black px-4 py-2 text-center text-sm font-medium">
      🚧 Development Mode: Using Mock Data - 
      <span className="ml-2">
        Switch to real data in <code className="bg-yellow-600 px-1 rounded">src/lib/devConfig.ts</code>
      </span>
    </div>
  );
}
