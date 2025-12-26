# 🚀 Setup & Deployment Guide

This guide will walk you through setting up your portfolio and deploying it to GitHub Pages.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)
- A [GitHub](https://github.com/) account

## Step-by-Step Setup

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `portfolio` (or any name you prefer)
3. **Do NOT** initialize with README, .gitignore, or license
4. Note your repository URL: `https://github.com/YOUR_USERNAME/portfolio`

### 2. Setup Local Project

```bash
# Navigate to the project folder
cd portfolio

# Initialize git (if not already done)
git init

# Install dependencies
npm install

# Test that everything works
npm run dev
```

Visit `http://localhost:5173` - you should see the portfolio!

### 3. Customize Your Portfolio

#### Update Personal Information

**src/pages/Home.tsx** - Line 12-18, update:
```typescript
<h1 className="text-5xl md:text-6xl font-bold mb-4">
  Your Name
</h1>
<p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
  Your Title
</p>
```

**src/pages/Home.tsx** - Line 24-50, update all social links:
```typescript
<a href="https://github.com/YOUR_USERNAME">
<a href="mailto:your.email@example.com">
<a href="https://linkedin.com/in/YOUR_PROFILE">
```

#### Add Your Projects

**src/data/projects.ts**:
```typescript
export const projects: Project[] = [
  {
    title: "Amazing Project",
    description: "What your project does and why it's cool",
    tech: ["React", "Node.js", "MongoDB"],
    links: {
      github: "https://github.com/you/project",
      live: "https://yourproject.com",
      // appstore: "https://apps.apple.com/...",
      // playstore: "https://play.google.com/...",
    },
    featured: true, // Shows in "Featured Projects" section
  },
  // Add more projects...
];
```

#### Update Your Skills

**src/data/skills.ts**:
```typescript
export const skills: Skill[] = [
  {
    category: "Frontend Development",
    items: ["React", "TypeScript", "Next.js"],
  },
  {
    category: "Backend Development",
    items: ["Node.js", "Python", "PostgreSQL"],
  },
  // Add more categories...
];
```

#### Add Your Resume

1. Export your resume as a PDF
2. Name it `resume.pdf`
3. Place it in the `public/` folder
4. Edit `src/components/ResumeSection.tsx`:
   - **Uncomment lines 25-31** to enable the PDF viewer:
   ```typescript
   <div className="mt-6">
     <iframe
       src="/resume.pdf"
       className="w-full h-[600px] rounded-lg border border-gray-200 dark:border-gray-700"
       title="Resume"
     />
   </div>
   ```

#### Configure for Your Repository

**vite.config.ts** - Update the base path:
```typescript
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/", // Change to your repo name
});
```

### 4. Build and Test

```bash
# Build for production
npm run build

# Test the production build
npm run preview
```

Visit `http://localhost:4173` and verify everything looks good!

### 5. Deploy to GitHub

#### First Time Setup

```bash
# Add all files
git add .

# Commit
git commit -m "Initial portfolio setup"

# Connect to your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Build and deployment**:
   - Source: Select **GitHub Actions**
5. Done! Your site will deploy automatically

#### Access Your Site

Your portfolio will be live at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

For example: `https://johndoe.github.io/portfolio/`

### 6. Make Updates

Every time you want to update your portfolio:

```bash
# Make your changes
# Then:

git add .
git commit -m "Updated projects"
git push
```

The site will automatically redeploy within 2-3 minutes!

## Advanced Configuration

### Custom Domain

Want to use your own domain like `yourname.com`?

1. Buy a domain from a provider (Namecheap, Google Domains, etc.)
2. In your repository settings → Pages:
   - Enter your custom domain
   - Enable "Enforce HTTPS"
3. Add DNS records at your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```
4. Update `vite.config.ts`:
   ```typescript
   base: "/", // Remove the repo name
   ```

### Environment Variables

If you need API keys or secrets:

1. Create `.env` file (never commit this!):
   ```
   VITE_API_KEY=your_key_here
   ```
2. Add to `.gitignore`:
   ```
   .env
   .env.local
   ```
3. Use in code:
   ```typescript
   const apiKey = import.meta.env.VITE_API_KEY;
   ```
4. Add to GitHub:
   - Settings → Secrets and variables → Actions
   - Add repository secrets
   - Update `.github/workflows/deploy.yml` to use them

### Analytics

Add Google Analytics:

1. Get your GA4 tracking ID
2. Add to `index.html` before `</head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

## Troubleshooting

### Build Fails

**Error: Cannot find module**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors**
```bash
npm run build -- --mode development
```

### Deployment Issues

**404 Page Not Found**
- Check `base` in `vite.config.ts` matches your repo name
- Verify GitHub Pages is enabled
- Wait 2-3 minutes after pushing

**Images Not Loading**
- Place images in `public/` folder
- Reference as `/image.png` not `./image.png`
- Update paths in code after changing `base`

**Dark Mode Not Saving**
- Check browser localStorage is enabled
- Clear cache and try again

### Local Development

**Port Already in Use**
```bash
# Use a different port
npm run dev -- --port 3001
```

**Hot Reload Not Working**
```bash
# Restart dev server
# Ctrl+C to stop
npm run dev
```

## Need Help?

- Check the [README.md](./README.md) for project structure
- Look at the GitHub Actions logs for deployment errors
- Open an issue on GitHub if you find a bug

## Useful Commands Reference

```bash
# Development
npm run dev              # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build

# Git
git status              # Check what changed
git add .               # Stage all changes
git commit -m "msg"     # Commit changes
git push                # Push to GitHub
git pull                # Pull latest changes

# Maintenance
npm install             # Install dependencies
npm update             # Update packages
npm outdated           # Check outdated packages
```

---

You're all set! 🎉 Your portfolio is ready to impress!
