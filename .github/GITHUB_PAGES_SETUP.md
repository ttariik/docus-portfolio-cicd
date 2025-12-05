# GitHub Pages Setup Guide

## Problem: 404 Error on GitHub Pages

If you see "There isn't a GitHub Pages site here" even though workflows are running successfully, the repository settings need to be configured.

## Solution: Enable GitHub Pages with GitHub Actions

### Step 1: Repository Settings

1. Navigate to your repository on GitHub: `https://github.com/ttariik/docus-portfolio-cicd`
2. Go to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
4. Save the changes

### Step 2: Verify Environment

1. Go to **Settings** → **Environments**
2. Verify that `github-pages` environment exists
3. If it doesn't exist, it will be created automatically on first workflow run

### Step 3: Verify Workflow Permissions

The workflow requires these permissions:
- `contents: read` - Read repository content
- `pages: write` - Deploy to GitHub Pages
- `id-token: write` - OIDC token for Pages authentication

These are already configured in `.github/workflows/deploy.yml`.

### Step 4: Trigger Deployment

The workflow triggers automatically on:
- Push to `main` branch
- Manual trigger via `workflow_dispatch`

To manually trigger:
1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

### Step 5: Verify Deployment

After workflow completion:
1. Check workflow logs for deployment URL
2. Wait 1-2 minutes for DNS propagation
3. Visit: `https://ttariik.github.io/docus-portfolio-cicd/`

## Configuration Details

### Base URL

The site is configured with baseUrl: `/docus-portfolio-cicd/`

This means:
- Repository: `ttariik/docus-portfolio-cicd`
- GitHub Pages URL: `https://ttariik.github.io/docus-portfolio-cicd/`

### Build Output

The workflow builds Docusaurus and deploys the `build/` directory to GitHub Pages.

### Environment Variables

Set during build:
- `DEPLOYMENT_URL=https://ttariik.github.io`
- `BASE_URL=/docus-portfolio-cicd/`
- `GITHUB_ORG=ttariik`
- `GITHUB_PROJECT=docus-portfolio-cicd`

## Troubleshooting

### Workflow succeeds but site shows 404

1. Verify **Settings** → **Pages** → **Source** is set to **GitHub Actions**
2. Check that `github-pages` environment exists
3. Verify workflow completed successfully in **Actions** tab
4. Wait 2-3 minutes for deployment to propagate

### Build fails

1. Check workflow logs in **Actions** tab
2. Verify all environment variables are set correctly
3. Ensure `pnpm install` completes without errors

### Site loads but assets are broken

1. Verify `baseUrl` in `docusaurus.config.ts` matches repository name
2. Check that `BASE_URL` environment variable is set correctly
3. Ensure trailing slash in baseUrl: `/docus-portfolio-cicd/`

## Verification Checklist

- [ ] GitHub Pages source set to "GitHub Actions"
- [ ] `github-pages` environment exists
- [ ] Workflow has correct permissions
- [ ] Workflow runs successfully
- [ ] Base URL matches repository name
- [ ] Site accessible at expected URL

