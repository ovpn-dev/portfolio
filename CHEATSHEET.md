# ⚡ Quick Reference Cheatsheet

## 🚀 Getting Started (3 minutes)

```bash
# 1. Install
npm install

# 2. Run locally
npm run dev
# Visit: http://localhost:5173

# 3. Build & deploy
npm run build
git add .
git commit -m "Initial commit"
git push
```

## 📝 Files to Edit

| File | What to Update |
|------|---------------|
| `src/data/projects.ts` | Your projects |
| `src/data/skills.ts` | Your skills |
| `src/pages/Home.tsx` | Name, title, about, links |
| `vite.config.ts` | Change `base: "/YOUR_REPO_NAME/"` |
| `public/resume.pdf` | Add your resume |

## 🔗 Important Links to Update

Search and replace these in `src/pages/Home.tsx`:

```typescript
// Line 24
href="https://github.com/ovpn-dev"
// Change to: href="https://github.com/YOUR_USERNAME"

// Line 32  
href="mailto:vobasi15@gmail.com"
// Change to: href="mailto:your.email@example.com"

// Line 40
href="https://linkedin.com/in/victor-obasi"
// Change to: href="https://linkedin.com/in/YOUR_PROFILE"
```

Also update footer links (lines 166-188) with the same URLs.

## 🎨 Customization Quick Tips

### Change Colors
`tailwind.config.js` → `theme.extend.colors.primary`

### Add Animation
`tailwind.config.js` → `theme.extend.animation`

### Change Font
`src/index.css` → Add `@import` at top

### Add Section
1. Create component in `src/components/YourSection.tsx`
2. Import in `src/pages/Home.tsx`
3. Add `<YourSection />` to JSX
4. Add to `src/components/Navbar.tsx` nav links

## 📦 Project Structure

```
src/
├── components/      # Reusable UI components
├── contexts/        # React contexts (theme)
├── data/           # Your content (EDIT THESE!)
├── pages/          # Main pages
├── types/          # TypeScript types
├── App.tsx         # Root component
└── main.tsx        # Entry point
```

## 🐛 Common Issues

**Port already in use?**
```bash
npm run dev -- --port 3001
```

**Build errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Site 404 on GitHub Pages?**
- Check `base` in `vite.config.ts` matches repo name
- Wait 2-3 minutes after push
- Check Settings → Pages is enabled

**Dark mode not working?**
- Clear browser cache + localStorage
- Check browser console for errors

## 🎯 Pre-Deployment Checklist

- [ ] Updated all personal info in `src/pages/Home.tsx`
- [ ] Added projects to `src/data/projects.ts`
- [ ] Added skills to `src/data/skills.ts`
- [ ] Set correct repo name in `vite.config.ts` base field
- [ ] Added `resume.pdf` to `public/` folder
- [ ] Uncommented iframe in `src/components/ResumeSection.tsx`
- [ ] Updated all GitHub/LinkedIn/Email links
- [ ] Tested locally with `npm run dev`
- [ ] Built successfully with `npm run build`
- [ ] Enabled GitHub Pages in repo settings

## 🚀 Deployment Commands

```bash
# First time
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOU/REPO.git
git push -u origin main

# Updates
git add .
git commit -m "Update content"
git push
```

## 📊 Key Components

| Component | Purpose |
|-----------|---------|
| `Navbar` | Top navigation + theme toggle |
| `Section` | Wrapper for page sections |
| `ProjectCard` | Display individual projects |
| `SkillCard` | Display skill categories |
| `SolanaArchitecture` | SVG diagram (customize or remove) |
| `ResumeSection` | PDF embed + download |

## 💡 Pro Tips

1. **Test locally first**: Always run `npm run dev` before pushing
2. **Use featured flag**: Mark best projects with `featured: true`
3. **Keep descriptions short**: 1-2 sentences per project
4. **Optimize images**: Use WebP format, max 1MB size
5. **Mobile first**: Test on phone before deploying

## 🔥 Advanced Features

### Add Analytics
```html
<!-- In index.html before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### Custom Domain
1. Add CNAME record at your domain provider
2. Settings → Pages → Custom domain
3. Change `vite.config.ts` base to `"/"`

### Contact Form
Consider adding [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/)

---

Need more help? Read `SETUP.md` for detailed instructions!
