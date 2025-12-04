# Conduit Container

A production-ready, containerized full-stack application deployment solution featuring Django backend, Angular frontend, automated CI/CD pipelines, and cloud VM deployment capabilities.

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition
link="https://github.com/ttariik/Conduit-Container/tree/conduit"
title="View on GitHub"
type="info">
Explore the complete source code, Docker configurations, and deployment workflows
</GithubLinkAdmonition>

## Overview

Conduit Container is a comprehensive containerization and deployment solution for the Conduit application, demonstrating expertise in DevOps, container orchestration, and automated deployment pipelines. The project includes multi-stage Docker builds, GitHub Actions CI/CD workflows, container registry integration, and production-grade deployment automation.

## Key Features

- **Multi-Container Architecture**: Separate Docker containers for backend (Django) and frontend (Angular) with optimized multi-stage builds
- **Automated CI/CD Pipeline**: GitHub Actions workflow for building, pushing, and deploying containers to cloud infrastructure
- **Container Registry Integration**: Automated image building and publishing to GitHub Container Registry (ghcr.io)
- **Production-Ready Configuration**: Gunicorn WSGI server, NGINX static file serving, PostgreSQL database
- **Environment-Based Configuration**: Comprehensive environment variable management with security best practices
- **Health Checks & Monitoring**: Automated health verification and service monitoring
- **Security Hardening**: Non-root containers, secret management, CORS configuration, and security guidelines
- **Automated Deployment**: One-command deployment to cloud VM with SSH-based automation

## Technology Stack

- **Backend**: Django (Python 3.11), Gunicorn, PostgreSQL
- **Frontend**: Angular, NGINX
- **Containerization**: Docker, Docker Compose
- **CI/CD**: GitHub Actions
- **Container Registry**: GitHub Container Registry (ghcr.io)
- **Deployment**: Cloud VM, SSH, rsync
- **Configuration**: YAML, environment variables
- **Scripting**: Bash, Python

## Architecture

The solution consists of:

1. **Backend Container**: Django REST API with Gunicorn WSGI server, PostgreSQL database connection, automated migrations, and static file collection
2. **Frontend Container**: Angular application built via multi-stage Node.js → NGINX pipeline for minimal runtime image
3. **Database Container**: PostgreSQL database with persistent volume storage
4. **CI/CD Pipeline**: Automated build, test, and deployment workflow using GitHub Actions
5. **Container Registry**: Centralized image storage and versioning via GitHub Container Registry
6. **Deployment Automation**: SSH-based deployment scripts for cloud VM provisioning

## Project Structure

```
Conduit-Container/
├── backend/              # Django backend application
├── frontend/            # Angular frontend application
├── docker/              # Docker-related configurations
├── scripts/             # Deployment and utility scripts
├── .github/workflows/   # CI/CD pipeline definitions
├── Dockerfile.backend   # Backend multi-stage build
├── Dockerfile.frontend  # Frontend multi-stage build
├── docker-compose.yaml  # Container orchestration
├── env.example          # Environment variable template
└── README.md            # Comprehensive documentation
```

## Quick Start

### Prerequisites

- Docker and Docker Compose installed
- Git repository access
- Cloud VM with SSH access
- GitHub repository with Actions enabled

### Local Development Setup

1. **Clone the repository**:

```bash
git clone https://github.com/ttariik/Conduit-Container.git
cd Conduit-Container
git checkout conduit
```

2. **Configure environment variables**:

```bash
cp env.example .env
# Edit .env with your local configuration
```

3. **Start services**:

```bash
docker compose up -d --build
```

4. **Verify deployment**:

```bash
# Check backend API
curl http://localhost:8000/api/tags/

# Check frontend
curl http://localhost:8282/
```

### Production Deployment

#### GitHub Actions CI/CD Setup

Configure the following secrets in GitHub repository settings (`Settings → Secrets and variables → Actions`):

1. **SSH_PRIVATE_KEY**: Private SSH key for server authentication
2. **VM_HOST**: Cloud VM IP address or hostname
3. **VM_USER**: SSH username for the cloud VM
4. **ENV_FILE**: Complete contents of production `.env` file

#### Automated Deployment

The CI/CD pipeline automatically:

1. **Builds** Docker images in GitHub Actions (not on VM)
2. **Pushes** images to GitHub Container Registry
3. **Deploys** pre-built images to cloud VM
4. **Verifies** service health and accessibility

**Trigger deployment**:

- Push to `conduit` or `main` branch (automatic)
- Manual trigger via GitHub Actions UI

#### Manual Deployment

For manual deployment without CI/CD:

```bash
# Transfer files to VM
rsync -avz --exclude='.git' --exclude='node_modules' \
  ./ user@YOUR_VM_IP:~/conduit-deployment/

# SSH into VM
ssh user@YOUR_VM_IP

# Navigate to deployment directory
cd ~/conduit-deployment

# Build and start services
docker compose up -d --build

# Verify services
docker compose ps
curl http://127.0.0.1:8000/api/tags/
curl http://127.0.0.1:8282/
```

## Configuration

### Environment Variables

All configuration is managed via environment variables following the `UPPER_CASE_WITH_UNDERSCORE` convention:

**Frontend Configuration**:

- `FRONTEND_PORT`: Frontend service port (default: 8282)
- `API_URL`: Backend API endpoint URL
- `FRONTEND_BUILD_CONFIGURATION`: Build mode (development/production)
- `FRONTEND_PRODUCTION`: Production flag

**Backend Configuration**:

- `BACKEND_PORT`: Backend service port (default: 8000)
- `BACKEND_PYTHON_VERSION`: Python version for backend
- `DJANGO_ALLOWED_HOSTS`: Comma-separated list of allowed hostnames
- `DJANGO_SECRET_KEY`: Django secret key (generate securely)
- `DJANGO_DEBUG`: Debug mode flag (False for production)
- `DJANGO_SUPERUSER_EMAIL`: Admin user email
- `DJANGO_SUPERUSER_USERNAME`: Admin username
- `DJANGO_SUPERUSER_PASSWORD`: Admin password

**Database Configuration**:

- `POSTGRES_DB`: Database name
- `POSTGRES_USER`: Database user
- `POSTGRES_PASSWORD`: Database password
- `POSTGRES_PORT`: Database port
- `DATABASE_URL`: Full database connection URL

**CORS Configuration**:

- `CORS_ALLOWED_ORIGINS`: Comma-separated list of allowed origins

**Logging**:

- `GUNICORN_LOG_LEVEL`: Gunicorn log level (info/debug/warning/error)
- `GUNICORN_TIMEOUT`: Request timeout in seconds

### Security Configuration

**Production Security Checklist**:

- Replace `YOUR_VM_IP` with actual VM IP address
- Generate strong `DJANGO_SECRET_KEY` (min. 50 random characters):
  ```bash
  python3 -c "import secrets; print(secrets.token_urlsafe(50))"
  ```
- Set secure passwords for `DJANGO_SUPERUSER_PASSWORD` and `POSTGRES_PASSWORD` (min. 16 characters)
- Verify `DJANGO_DEBUG=False` for production
- Update `DJANGO_ALLOWED_HOSTS` with actual VM IP
- Update `CORS_ALLOWED_ORIGINS` with actual frontend URL

## CI/CD Pipeline

### Workflow Steps

**Build Job** (runs in GitHub Actions):

1. **Checkout**: Fetches repository code including submodules
2. **Docker Buildx Setup**: Configures multi-platform build support
3. **Registry Login**: Authenticates to GitHub Container Registry
4. **Build Backend**: Builds backend Docker image with caching
5. **Push Backend**: Pushes backend image to registry
6. **Build Frontend**: Builds frontend Docker image with caching
7. **Push Frontend**: Pushes frontend image to registry

**Deploy Job** (runs on Cloud VM):

1. **Checkout**: Fetches deployment configuration
2. **SSH Setup**: Configures SSH authentication
3. **File Transfer**: Syncs necessary files to VM using rsync
4. **Environment Setup**: Transfers production `.env` configuration
5. **Registry Login**: Authenticates VM to GitHub Container Registry
6. **Pull Images**: Downloads pre-built images from registry
7. **Deploy**: Starts services in detached mode via `docker compose up -d`
8. **Health Check**: Waits for services to become healthy
9. **Verification**: Confirms backend API and frontend accessibility
10. **Cleanup on Failure**: Collects logs and stops containers if deployment fails

### Container Registry Setup

After first deployment:

1. Go to repository on GitHub
2. Navigate to `Packages` (right sidebar)
3. For each package (`conduit-container-backend` and `conduit-container-frontend`):
   - Click on the package
   - Go to `Package settings`
   - Scroll to `Danger Zone` → `Change package visibility`
   - Set to `Public` (or grant VM access to private packages)

## Docker Configuration

### Multi-Stage Builds

**Backend Dockerfile**:

- Stage 1: Python base image with dependencies installation
- Stage 2: Runtime image with application code and Gunicorn

**Frontend Dockerfile**:

- Stage 1: Node.js build environment for Angular compilation
- Stage 2: NGINX runtime image serving static files

### Docker Compose

The `docker-compose.yaml` orchestrates:

- **Backend service**: Django application with Gunicorn
- **Frontend service**: Angular application with NGINX
- **Database service**: PostgreSQL with persistent volumes
- **Network configuration**: Internal Docker network for service communication
- **Volume management**: Persistent storage for database and application data
- **Health checks**: Automated service health monitoring
- **Restart policies**: Automatic container restart on failure

## Security Guidelines

### Credential Management

- **Never commit secrets** to the repository
- All sensitive data stored as environment variables or GitHub Secrets
- Use `.env` files for local development (ignored by Git)
- GitHub Secrets used for CI/CD workflows

### Network Security

- No hardcoded IP addresses in repository
- Environment variables for host configurations
- CORS configuration restricts allowed origins
- `ALLOWED_HOSTS` explicitly configured for production

### Docker Security

- Multi-stage builds minimize attack surface
- Non-root users configured where possible
- Health checks ensure service monitoring
- `.dockerignore` prevents sensitive file inclusion

### Security Best Practices

1. Rotate secrets regularly (every 90 days minimum)
2. Use strong passwords (min. 16 characters, mixed case, numbers, symbols)
3. Limit SSH key access (use dedicated deployment key)
4. Monitor deployment logs for suspicious activity
5. Keep dependencies updated for security patches

## Operational Notes

- Backend image starts with entrypoint that runs migrations, collects static files, and launches Gunicorn
- Frontend image built via multi-stage Node → NGINX pipeline for minimal runtime
- Customize Angular environment (`src/environments/environment.prod.ts`) to match Compose network endpoint
- Keep credentials out of Git: store real secrets in `.env`, referenced by Docker at runtime
- Services automatically restart on failure due to `restart: unless-stopped` policy

## Testing & Verification

Before submitting the project, confirm:

- `http://<VM-IP>:8282` loads the Conduit UI and navigation works
- `http://<VM-IP>:8000/api/tags/` responds correctly
- Killing containers (`docker kill conduit-backend`) triggers automatic restart
- Logs can be tailed and persisted via `docker logs` or mounted volumes

## Troubleshooting

### SSH Connection Failed

- Verify `SSH_PRIVATE_KEY` is correctly copied (including header/footer)
- Verify `VM_HOST` and `VM_USER` are correct
- Ensure firewall allows SSH connections (port 22)

### Build Failed

- Check Docker is installed on the VM
- Verify sufficient disk space on VM
- Review build logs in the Actions tab

### Services Unhealthy

- Check backend logs: `docker logs conduit-backend`
- Verify database is running: `docker ps`
- Check environment variables are correctly set
- Verify ports 8000 and 8282 are not already in use

### Deployment Verification Failed

- Ensure firewall allows traffic on ports 8000 and 8282
- Check services are running: `docker compose ps`
- Test endpoints manually from VM: `curl http://127.0.0.1:8000/api/tags/`

## Project Highlights

- **Production-Ready**: Comprehensive security measures and monitoring
- **Developer-Friendly**: Well-documented with clear setup instructions
- **Scalable**: Easy to extend with additional services or features
- **Maintainable**: Clean code structure with automated deployment
- **CI/CD Integrated**: Automated build and deployment pipeline
- **Container-Optimized**: Multi-stage builds for minimal image sizes
- **Security-Focused**: Zero-trust principles and credential management

## Use Cases

- Full-stack application deployment
- Microservices architecture demonstration
- CI/CD pipeline implementation
- Container orchestration learning
- Production deployment automation
- DevOps best practices showcase

## Further References

- [GitHub Repository](https://github.com/ttariik/Conduit-Container/tree/conduit)
- [Docker Documentation](https://docs.docker.com/)
- [Django Documentation](https://docs.djangoproject.com/)
- [Angular Documentation](https://angular.io/docs)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Container Registry Documentation](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
