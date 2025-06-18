# Saint Ignatius of Loyola Parish Website

A modern, multilingual parish website built with Next.js and Strapi CMS, featuring event management, donation processing, photo galleries, livestreaming, and comprehensive parish information.

## Features

### 🎯 Core Features
- **Event Calendar**: Custom CMS collection with date, description, and images
- **Contact Form**: API route to send emails using Nodemailer
- **Donation Page**: Stripe integration with one-time and recurring donations
- **Photo Gallery**: Image management with Cloudinary integration
- **Livestreams**: Embedded video player with CMS-managed stream URLs
- **Blog/News**: CMS collection for posts with categories and tags
- **Parish History**: Timeline of parish milestones and information
- **Admin Dashboard**: Strapi CMS with customized roles and permissions
- **Multi-language Support**: English, Spanish, and Portuguese with Next.js i18n

### 🔧 Technical Features
- **Frontend**: Next.js 14 with App Router
- **Backend**: Strapi 4.15 Headless CMS
- **Styling**: Tailwind CSS with custom parish branding
- **Database**: SQLite (configurable for PostgreSQL/MySQL)
- **Image Storage**: Cloudinary integration
- **Payment Processing**: Stripe for donations
- **Email**: Nodemailer for contact forms
- **Internationalization**: next-intl for multi-language support

## Project Structure

```
saint-ignatius-of-loyola/
├── backend/                 # Strapi CMS
│   ├── config/             # Strapi configuration
│   ├── src/api/            # Content types and API routes
│   └── package.json
├── src/                    # Next.js application
│   ├── app/                # App Router pages
│   ├── components/         # Reusable components
│   ├── i18n.ts            # Internationalization config
│   └── middleware.ts       # Next.js middleware
├── messages/               # Translation files
│   ├── en.json
│   ├── es.json
│   └── pt.json
└── package.json
```

## Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/saint-ignatius-of-loyola.git
   cd saint-ignatius-of-loyola
   ```

2. **Install dependencies**
   ```bash
   npm run setup
   ```

3. **Environment Configuration**
   
   Copy the environment files and update with your values:
   ```bash
   cp .env.local.example .env.local
   cp backend/.env.example backend/.env
   ```

   Update the following environment variables:

   **Frontend (.env.local):**
   ```env
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   STRAPI_API_URL=http://localhost:1337
   STRIPE_PUBLISHABLE_KEY=pk_test_your_key
   STRIPE_SECRET_KEY=sk_test_your_key
   NODEMAILER_USER=your_email@gmail.com
   NODEMAILER_PASS=your_app_password
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

   **Backend (backend/.env):**
   ```env
   HOST=0.0.0.0
   PORT=1337
   APP_KEYS=generate_random_keys_here
   API_TOKEN_SALT=generate_random_salt
   ADMIN_JWT_SECRET=generate_random_secret
   JWT_SECRET=generate_random_secret
   TRANSFER_TOKEN_SALT=generate_random_salt
   ```

4. **Start the development servers**
   
   Terminal 1 - Strapi Backend:
   ```bash
   npm run strapi
   ```
   
   Terminal 2 - Next.js Frontend:
   ```bash
   npm run dev
   ```

5. **Access the applications**
   - Frontend: http://localhost:3000
   - Strapi Admin: http://localhost:1337/admin

## Configuration Guide

### Strapi CMS Setup

1. **Create Admin User**
   - Go to http://localhost:1337/admin
   - Create your admin account
   - Complete the setup wizard

2. **Configure Content Types**
   The following content types are pre-configured:
   - **Events**: Parish events and activities
   - **News**: Parish news and announcements  
   - **Gallery Images**: Photo gallery management
   - **Livestream**: Live streaming configuration
   - **History Entries**: Parish history timeline

3. **Set up Permissions**
   - Go to Settings > Users & Permissions Plugin > Roles
   - Configure Public role permissions for API access
   - Enable `find` and `findOne` for all content types

### Third-Party Integrations

#### Cloudinary (Image Storage)
1. Create account at https://cloudinary.com
2. Get your cloud name, API key, and API secret
3. Add credentials to environment variables

#### Stripe (Donations)
1. Create account at https://stripe.com
2. Get your publishable and secret keys (use test keys for development)
3. Configure webhook endpoints for payment confirmation

#### Gmail (Contact Forms)
1. Enable 2-factor authentication on your Gmail account
2. Generate an app-specific password
3. Use your Gmail address and app password in environment variables

## Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend (Railway/Heroku)
1. Create new app on Railway or Heroku
2. Connect your repository
3. Add environment variables
4. Configure database (PostgreSQL recommended for production)

### Database Migration
For production, update `backend/config/database.js` to use PostgreSQL:

```javascript
// Production database configuration
postgres: {
  connection: {
    connectionString: env('DATABASE_URL'),
    ssl: env.bool('DATABASE_SSL', false) && {
      rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
    },
  },
}
```

## Content Management

### Adding Content

1. **Events**
   - Title, description, date, time, location
   - Featured image upload
   - Multi-language support

2. **News Posts**
   - Rich text content editor
   - Featured images
   - Categories and tags
   - Publication scheduling

3. **Gallery Images**
   - Bulk image upload
   - Categorization
   - Descriptions and titles

4. **Livestream**
   - YouTube/Vimeo URL configuration
   - Live status toggle
   - Schedule information

### Multi-language Content
- All content types support English, Spanish, and Portuguese
- Switch between languages in the Strapi admin
- Frontend automatically displays content based on user's language preference

## Customization

### Styling
- Modify colors in `tailwind.config.js`
- Update global styles in `src/app/globals.css`
- Parish branding colors are defined in the primary and gold color schemes

### Adding New Content Types
1. Create schema in `backend/src/api/[content-type]/content-types/`
2. Add corresponding React components
3. Update navigation and routing as needed

### Translation Management
- Add new translation keys to files in `/messages/`
- Use `useTranslations` hook in components
- Follow the existing translation structure

## Maintenance

### Regular Tasks
- **Content Updates**: Keep events, news, and gallery current
- **Security Updates**: Regularly update npm packages
- **Backup Database**: Regular backups of Strapi database
- **Monitor Performance**: Check page load times and optimize images

### Troubleshooting

**Common Issues:**
- **CORS Errors**: Check middleware configuration in Strapi
- **Image Upload Failures**: Verify Cloudinary credentials
- **Email Not Sending**: Check Gmail app password setup
- **Payment Issues**: Verify Stripe webhook configuration

## Support

For technical support or questions about the parish website:
- Email: tech@saintignatiusloyola.org
- Documentation: [Link to detailed docs]
- Issues: [GitHub Issues page]

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ for Saint Ignatius of Loyola Parish Community
