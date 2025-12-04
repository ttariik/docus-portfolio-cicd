FROM node:20-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm@10

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source files
COPY . .

# Build arguments for Docusaurus configuration
ARG BLOG_ENABLED=false
ARG DEPLOYMENT_URL="https://ttariik.github.io"
ARG BASE_URL="/"
ARG GITHUB_ORG="ttariik"
ARG GITHUB_PROJECT="DevSecOps-Blog"
ARG DEPLOYMENT_BRANCH="main"

# Set environment variables for build
ENV BLOG_ENABLED=${BLOG_ENABLED}
ENV DEPLOYMENT_URL=${DEPLOYMENT_URL}
ENV BASE_URL=${BASE_URL}
ENV GITHUB_ORG=${GITHUB_ORG}
ENV GITHUB_PROJECT=${GITHUB_PROJECT}
ENV DEPLOYMENT_BRANCH=${DEPLOYMENT_BRANCH}

# Copy example.env to .env if it doesn't exist
RUN cp example.env .env || true

# Build the Docusaurus site
RUN pnpm build

# Production stage
FROM nginx:alpine AS runner

# Copy built site from builder
COPY --from=builder /app/build /usr/share/nginx/html

# Copy custom nginx configuration if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]