#!/bin/bash

echo "Portfolio Quick Setup Script"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install it from https://nodejs.org/"
    exit 1
fi

echo "Node.js detected: $(node --version)"
echo ""

# Install dependencies
echo "Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "Dependencies installed successfully!"
else
    echo "Failed to install dependencies"
    exit 1
fi

echo ""
echo "Your portfolio is ready!"
echo ""
echo "Next steps:"
echo "1. Edit src/data/projects.ts - Add your projects"
echo "2. Edit src/data/skills.ts - Add your skills"  
echo "3. Edit src/pages/Home.tsx - Update personal info"
echo "4. Add public/resume.pdf - Your resume PDF"
echo "5. Edit vite.config.ts - Set your repo name in 'base' field"
echo ""
echo "Then run:"
echo "  npm run dev     # Start development server"
echo "  npm run build   # Build for production"
echo ""
echo "See SETUP.md for detailed instructions!"
