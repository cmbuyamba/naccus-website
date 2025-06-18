module.exports = {
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 1337,
  app: {
    keys: process.env.APP_KEYS?.split(',') || ['default-key-1', 'default-key-2'],
  },
  webhooks: {
    populateRelations: process.env.WEBHOOKS_POPULATE_RELATIONS || false,
  },
};
