#!/bin/bash

# Wholesale Ordering App Deployment Script

echo "🚀 Building Wholesale Ordering App..."

# Install dependencies
npm install

# Build the app
npm run build

echo "✅ Build completed successfully!"
echo "📁 Build files are in the 'build' directory"
echo ""
echo "🌐 To deploy:"
echo "   - Upload the 'build' folder to your web server"
echo "   - Or use: npm install -g serve && serve -s build"
echo "   - Or deploy to Netlify/Vercel using their CLI tools" 