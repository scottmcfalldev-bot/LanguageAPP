# Deploying PolyPath to GitHub Pages

This app is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Automatic Deployment

### First-Time Setup

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: **GitHub Actions**
   - Save the changes

2. **Push your code:**
   ```bash
   git push origin main
   ```

   The GitHub Action will automatically:
   - Build the app
   - Deploy to GitHub Pages
   - Your app will be live at: `https://[your-username].github.io/LanguageAPP/`

### Automatic Updates

Every time you push to `main` or your branch, the app automatically rebuilds and redeploys.

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Add deploy script to package.json
# "deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

## Local Testing

To test the production build locally:

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

This starts a local server serving the production build at http://localhost:4173

## Troubleshooting

### Assets not loading (404 errors)
- Make sure `base: '/LanguageAPP/'` is set in `vite.config.ts`
- The base path must match your repository name

### GitHub Actions fails
- Check that GitHub Pages is enabled in Settings → Pages
- Verify Node.js version in `.github/workflows/deploy.yml` matches your local version
- Check the Actions tab for detailed error logs

### LocalStorage data between environments
- Data is stored per domain
- `localhost:5173` and `username.github.io` will have separate data
- This is normal browser behavior for security

## Configuration Files

- **`.github/workflows/deploy.yml`** - GitHub Actions workflow
- **`vite.config.ts`** - Build configuration (includes base path)
- **`public/.nojekyll`** - Tells GitHub to not process as Jekyll site

## Monitoring Deployments

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. See build status for each commit
4. Click any workflow run to see detailed logs

---

**Your app will be live at:** `https://[your-username].github.io/LanguageAPP/`

Replace `[your-username]` with your actual GitHub username.
