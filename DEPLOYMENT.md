# Vercel Deployment Guide for Grease Shoes

## Pre-Deployment Checklist ✅

Your Next.js project is ready for deployment! Here's what's been configured:

- ✅ Next.js 14 with App Router
- ✅ TypeScript configuration
- ✅ Tailwind CSS setup
- ✅ `.gitignore` file created
- ✅ `vercel.json` configuration
- ✅ No linter errors
- ✅ All photos copied to `public/Photos/`
- ✅ Logo integrated in Header, Footer, and MobileNav

## Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Grease Shoes"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Your site will be live in ~2 minutes!**

### Option 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **For production deployment**
   ```bash
   vercel --prod
   ```

## Environment Variables

Currently, your app doesn't require any environment variables. If you need to add any in the future:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy your project

## Build Settings

Vercel will automatically detect:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

These are configured in `vercel.json`, but Vercel will auto-detect them anyway.

## Custom Domain

After deployment:

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow the DNS configuration instructions

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch = auto-deploy to production
- Every pull request = preview deployment

## Post-Deployment

1. ✅ Verify all pages load correctly
2. ✅ Check that images are displaying
3. ✅ Test navigation and filters
4. ✅ Verify mobile responsiveness
5. ✅ Test dark mode toggle

## Troubleshooting

### Build Errors
- Check Vercel build logs in the "Deployments" tab
- Ensure `npm run build` works locally first
- Verify all dependencies are in `package.json`

### Image Issues
- Ensure all photos are in `public/Photos/` directory
- Check file paths in `lib/data.ts`
- Verify image formats are supported (.png, .jpg, etc.)

### Environment Variables
- Double-check variable names and values
- Ensure variables are added for all environments (Production, Preview, Development)

## Support

For issues specific to:
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)

## Deployment URL

After successful deployment, your site will be available at:
```
https://YOUR_PROJECT_NAME.vercel.app
```

Your project metadata is already configured to use:
```
https://grease-shoes.vercel.app
```

