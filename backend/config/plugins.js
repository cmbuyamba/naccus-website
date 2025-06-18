module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '7d',
      },
    },
  },
  'i18n': {
    enabled: true,
    config: {
      defaultLocale: 'en',
      locales: ['en', 'es', 'pt'],
    },
  },
  'email': {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('EMAIL_PROVIDER_OPTIONS_HOST', 'smtp.gmail.com'),
        port: env('EMAIL_PROVIDER_OPTIONS_PORT', 587),
        auth: {
          user: env('EMAIL_PROVIDER_OPTIONS_AUTH_USER'),
          pass: env('EMAIL_PROVIDER_OPTIONS_AUTH_PASS'),
        },
      },
      settings: {
        defaultFrom: env('EMAIL_PROVIDER_OPTIONS_AUTH_USER'),
        defaultReplyTo: env('EMAIL_PROVIDER_OPTIONS_AUTH_USER'),
      },
    },
  },
  'upload': {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
