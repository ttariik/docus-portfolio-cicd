# GitHub Pages Deployment Setup

## Prerequisites

- GitHub repository: `ttariik/docus-portfolio-cicd`
- GitHub Actions enabled
- GitHub Pages enabled

## Step-by-Step Setup

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Configure Repository Settings

The workflow is already configured to deploy automatically when you push to the `main` branch.

### 3. Deployment Process

The deployment happens automatically:

1. **Push to main branch** → Triggers `deploy.yml` workflow
2. **Build job** → Creates Docusaurus build
3. **Deploy job** → Deploys to GitHub Pages

### 4. Access Your Site

After successful deployment, your site will be available at:

**Project Page (if BASE_URL=/docus-portfolio-cicd/):**
```
https://ttariik.github.io/docus-portfolio-cicd/
```

**User Page (if BASE_URL=/):**
```
https://ttariik.github.io/
```

## Manual Deployment

You can also trigger deployment manually:

1. Go to **Actions** tab
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select branch (usually `main`)
5. Click **Run workflow**

## Configuration Files

### Environment Variables

The deployment uses these environment variables (set in `.github/workflows/deploy.yml`):

- `DEPLOYMENT_URL`: `https://ttariik.github.io`
- `BASE_URL`: `/docus-portfolio-cicd/` (or `/` for user page)
- `GITHUB_ORG`: `ttariik`
- `GITHUB_PROJECT`: `docus-portfolio-cicd`
- `DEPLOYMENT_BRANCH`: `main`

### Changing BASE_URL

If you want to deploy as a user page (BASE_URL=/):

1. Update `.github/workflows/deploy.yml`:
   ```yaml
   echo "BASE_URL=/" >> .env
   ```

2. Update `docusaurus.config.ts` default:
   ```typescript
   baseUrl: process.env.BASE_URL ?? '/',
   ```

3. Push changes to `main` branch

## Troubleshooting

### Deployment Not Working

1. Check GitHub Pages settings:
   - Source must be set to **GitHub Actions**
   - Not "Deploy from a branch"

2. Check workflow permissions:
   - Go to **Settings** → **Actions** → **General**
   - Under **Workflow permissions**, select **Read and write permissions**
   - Check **Allow GitHub Actions to create and approve pull requests**

3. Check workflow logs:
   - Go to **Actions** tab
   - Click on failed workflow run
   - Review error messages

### Build Fails

- Check that all dependencies are installed correctly
- Verify `.env` file is created correctly
- Check for TypeScript or linting errors

### Site Not Accessible

- Wait a few minutes after deployment (GitHub Pages can take 1-2 minutes)
- Check the deployment URL in the workflow output
- Verify BASE_URL matches your repository structure

## Workflow Status

Monitor deployment status:

- **Actions** tab → **Deploy to GitHub Pages** workflow
- Green checkmark = successful deployment
- Red X = deployment failed (check logs)

