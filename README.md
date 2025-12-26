# Victor Obasi - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and automatic deployment to GitHub Pages.

## ✨ Features

- 🎨 **Dark/Light Mode** - Toggle between themes with persistent preference
- 📱 **Fully Responsive** - Optimized for all screen sizes
- 🚀 **Fast & Modern** - Built with Vite for lightning-fast development
- 🎭 **Smooth Animations** - Subtle, professional animations throughout
- 📊 **Solana Architecture Diagram** - Interactive SVG visualization
- 📄 **Resume Integration** - Embedded PDF viewer with download option
- 🔧 **TypeScript** - Full type safety
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML
- 🤖 **Auto Deploy** - GitHub Actions workflow for automatic deployment

## 🚀 Quick Start

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### 2. Customize Your Content

Edit these files to add your information:

**`src/data/projects.ts`** - Your projects
```typescript
export const projects: Project[] = [
  {
    title: "Your Project",
    description: "Description here...",
    tech: ["React", "TypeScript"],
    links: {
      github: "https://github.com/YOUR_USERNAME/project",
      live: "https://yourproject.com"
    },
    featured: true,
  },
];
```

**`src/data/skills.ts`** - Your skills
```typescript
export const skills: Skill[] = [
  {
    category: "Your Category",
    items: ["Skill 1", "Skill 2"],
  },
];
```

**`src/pages/Home.tsx`** - Update personal info
- Your name and title
- About section
- Contact links (GitHub, LinkedIn, Email)

**`public/resume.pdf`** - Add your resume PDF
- Place your resume in the `public/` folder
- Uncomment the iframe in `src/components/ResumeSection.tsx`

### 3. Configure for GitHub Pages

**`vite.config.ts`** - Update the base path:
```typescript
export default defineConfig({
  plugins: [react()],
  base: "/YOUR_REPO_NAME/", // Change this to your repo name
});
```

**`package.json`** - Add homepage:
```json
{
  "name": "portfolio",
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/"
}
```

### 4. Run Locally

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

2. Enable GitHub Pages:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

3. The site will automatically deploy on every push to `main`!

### Option 2: Manual Deployment

```bash
# Build the project
npm run build

# The dist/ folder contains your static site
# Upload this to any static hosting service
```

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment workflow
├── public/
│   └── resume.pdf              # Your resume (add this)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation with theme toggle
│   │   ├── Section.tsx         # Reusable section wrapper
│   │   ├── ProjectCard.tsx     # Project display card
│   │   ├── SkillCard.tsx       # Skill category card
│   │   ├── SolanaArchitecture.tsx  # SVG diagram
│   │   └── ResumeSection.tsx   # Resume embed
│   ├── contexts/
│   │   └── ThemeContext.tsx    # Dark mode logic
│   ├── data/
│   │   ├── projects.ts         # Your projects data
│   │   └── skills.ts           # Your skills data
│   ├── pages/
│   │   └── Home.tsx            # Main page
│   ├── types/
│   │   └── index.ts            # TypeScript types
│   ├── App.tsx                 # Root component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization Guide

### Colors

Edit `tailwind.config.js` to change the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#YOUR_COLOR',
        // ... more shades
      },
    },
  },
}
```

### Animations

Add custom animations in `tailwind.config.js`:
```javascript
animation: {
  'your-animation': 'animationName 1s ease-in-out',
},
keyframes: {
  animationName: {
    '0%': { /* ... */ },
    '100%': { /* ... */ },
  },
}
```

### Fonts

Import fonts in `src/index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');

body {
  font-family: 'Your Font', sans-serif;
}
```

## 🔧 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD

## 📝 Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/pages/Home.tsx`
3. Update navigation links in `src/components/Navbar.tsx`

Example:
```tsx
// src/components/Blog.tsx
export default function Blog() {
  return (
    <Section title="Blog" id="blog">
      {/* Your content */}
    </Section>
  );
}

// Add to Home.tsx
import Blog from "../components/Blog";
// ... then add <Blog /> in the JSX
```

## 🐛 Troubleshooting

**Site not loading after deployment?**
- Check that `base` in `vite.config.ts` matches your repo name
- Verify GitHub Pages is enabled in repository settings
- Check the Actions tab for deployment logs

**Dark mode not working?**
- Clear browser cache and localStorage
- Check browser console for errors

**Icons not showing?**
- Ensure `lucide-react` is installed: `npm install lucide-react`

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Found a bug or have a suggestion? Feel free to open an issue or submit a pull request!

---

Built with ❤️ by Victor Obasi
