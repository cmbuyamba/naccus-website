#!/bin/bash

echo "🏛️  Setting up Saint Ignatius of Loyola Parish Website"
echo "=================================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ and try again."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version 16+ is required. You have version $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install frontend dependencies
echo ""
echo "📦 Installing frontend dependencies..."
npm install

# Install backend dependencies
echo ""
echo "📦 Installing backend dependencies..."
cd backend
npm install
cd ..

# Create environment files if they don't exist
if [ ! -f .env.local ]; then
    echo ""
    echo "📝 Creating frontend environment file..."
    cp .env.local .env.local.example
    echo "⚠️  Please update .env.local with your actual values"
fi

if [ ! -f backend/.env ]; then
    echo ""
    echo "📝 Creating backend environment file..."
    cd backend
    cp .env .env.example
    cd ..
    echo "⚠️  Please update backend/.env with your actual values"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update environment variables in .env.local and backend/.env"
echo "2. Start the backend: npm run strapi"
echo "3. Start the frontend: npm run dev"
echo "4. Visit http://localhost:3000 to see the website"
echo "5. Visit http://localhost:1337/admin to access the CMS"
echo ""
echo "📚 Check the README.md for detailed configuration instructions"
