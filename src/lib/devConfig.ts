// Development configuration
export const devConfig = {
  // Set to true to use mock data instead of Strapi API
  useMockData: true,
  
  // Mock API base URL (not used when useMockData is true)
  strapiUrl: process.env.STRAPI_API_URL || 'http://localhost:1337',
  
  // Frontend URL
  frontendUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  
  // Enable development features
  showLoadingStates: true,
  enableDebugLogs: true,
};

// API service that can switch between mock and real data
export const apiService = {
  async get(endpoint: string) {
    if (devConfig.useMockData) {
      // Import mock service dynamically to avoid issues
      const { mockApiService } = await import('./mockData');
      
      switch (endpoint) {
        case 'events':
          return mockApiService.getEvents();
        case 'news':
          return mockApiService.getNews();
        case 'gallery-images':
          return mockApiService.getGalleryImages();
        case 'livestream':
          return mockApiService.getLivestream();
        default:
          throw new Error(`Mock endpoint ${endpoint} not implemented`);
      }
    } else {
      // Use real Strapi API
      const response = await fetch(`${devConfig.strapiUrl}/api/${endpoint}?populate=*`);
      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }
      return response.json();
    }
  }
};

// Logger utility
export const logger = {
  log: (...args: any[]) => {
    if (devConfig.enableDebugLogs) {
      console.log('[Parish Website]', ...args);
    }
  },
  error: (...args: any[]) => {
    console.error('[Parish Website Error]', ...args);
  }
};
