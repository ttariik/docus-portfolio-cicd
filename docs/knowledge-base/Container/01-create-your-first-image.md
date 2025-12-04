---
title: Create Your First Container Image
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Create Your First Container Image

This comprehensive guide walks you through creating your first Docker container image from scratch, with best practices and real-world examples.

:::info Prerequisites

- Docker installed on your system
- Basic understanding of command line
- A text editor
- Basic knowledge of your application's dependencies
  :::

## Step 1: Create a Dockerfile

A Dockerfile is a text file that contains instructions for building a Docker image. Create a file named `Dockerfile` (no extension) in your project directory.

### Basic Dockerfile Structure

<Tabs>
  <TabItem value="python" label="Python" default>
    ```dockerfile title="Dockerfile"
    # Use an official Python runtime as base image
    FROM python:3.11-slim
    
    # Set the working directory inside the container
    WORKDIR /app
    
    # Copy requirements file
    COPY requirements.txt .
    
    # Install dependencies
    RUN pip install --no-cache-dir -r requirements.txt
    
    # Copy application code
    COPY . .
    
    # Expose port
    EXPOSE 8000
    
    # Define the command to run the application
    CMD ["python", "app.py"]
    ```
  </TabItem>
  
  <TabItem value="node" label="Node.js">
    ```dockerfile title="Dockerfile"
    # Use official Node.js runtime
    FROM node:18-alpine
    
    # Set working directory
    WORKDIR /app
    
    # Copy package files
    COPY package*.json ./
    
    # Install dependencies
    RUN npm ci --only=production
    
    # Copy application code
    COPY . .
    
    # Expose port
    EXPOSE 3000
    
    # Run application
    CMD ["node", "server.js"]
    ```
  </TabItem>
  
  <TabItem value="java" label="Java">
    ```dockerfile title="Dockerfile"
    # Build stage
    FROM maven:3.8-openjdk-17 AS builder
    WORKDIR /app
    COPY pom.xml .
    COPY src ./src
    RUN mvn clean package -DskipTests
    
    # Runtime stage
    FROM openjdk:17-jre-slim
    WORKDIR /app
    COPY --from=builder /app/target/*.jar app.jar
    EXPOSE 8080
    CMD ["java", "-jar", "app.jar"]
    ```
  </TabItem>
</Tabs>

## Step 2: Understanding Dockerfile Instructions

### FROM

Specifies the base image to build upon:

```dockerfile
FROM python:3.11-slim
```

:::tip Choosing Base Images

- **Official images**: Use official images from Docker Hub
- **Alpine Linux**: Smaller images (alpine variants)
- **Distroless**: Minimal images for production
- **Specific versions**: Pin versions for reproducibility
  :::

### WORKDIR

Sets the working directory for subsequent instructions:

```dockerfile
WORKDIR /app
```

**Benefits:**

- Creates directory if it doesn't exist
- Sets working directory for all subsequent commands
- More readable than using `cd` commands

### COPY

Copies files from the host to the container:

```dockerfile
# Copy single file
COPY requirements.txt .

# Copy entire directory
COPY . .

# Copy with specific ownership
COPY --chown=user:group file.txt .
```

:::warning COPY vs ADD

- **COPY**: Preferred for most use cases (simpler, more predictable)
- **ADD**: Has additional features (URLs, tar extraction) but less clear
  :::

### RUN

Executes commands during the image build:

```dockerfile
# Single command
RUN apt-get update

# Multiple commands (chain with &&)
RUN apt-get update && \
    apt-get install -y python3 && \
    rm -rf /var/lib/apt/lists/*

# Multi-line for readability
RUN apt-get update \
    && apt-get install -y \
        python3 \
        python3-pip \
    && rm -rf /var/lib/apt/lists/*
```

:::tip Layer Optimization
Combine RUN commands to reduce image layers and size:

```dockerfile
# Bad: Multiple layers
RUN apt-get update
RUN apt-get install -y python3
RUN rm -rf /var/lib/apt/lists/*

# Good: Single layer
RUN apt-get update && \
    apt-get install -y python3 && \
    rm -rf /var/lib/apt/lists/*
```

:::

### EXPOSE

Documents which ports the container listens on:

```dockerfile
EXPOSE 8000
EXPOSE 8000/tcp
EXPOSE 8000/udp
```

:::note EXPOSE is Documentation
`EXPOSE` doesn't actually publish the port. Use `-p` flag in `docker run` to publish ports.
:::

### CMD vs ENTRYPOINT

<Tabs>
  <TabItem value="cmd" label="CMD" default>
    **Default command (can be overridden)**
    
    ```dockerfile
    # Exec form (recommended)
    CMD ["python", "app.py"]
    
    # Shell form
    CMD python app.py
    ```
    
    Can be overridden: `docker run image-name /bin/bash`
  </TabItem>
  
  <TabItem value="entrypoint" label="ENTRYPOINT">
    **Main command (harder to override)**
    
    ```dockerfile
    # Exec form (recommended)
    ENTRYPOINT ["python", "app.py"]
    
    # Shell form
    ENTRYPOINT python app.py
    ```
    
    Arguments passed to `docker run` are appended to ENTRYPOINT.
  </TabItem>
  
  <TabItem value="combined" label="Combined">
    **Use both together**
    
    ```dockerfile
    ENTRYPOINT ["python"]
    CMD ["app.py"]
    ```
    
    ENTRYPOINT is fixed, CMD provides default arguments.
  </TabItem>
</Tabs>

## Step 3: Build the Image

Build your Docker image using the `docker build` command:

```bash
# Basic build
docker build -t my-app:latest .

# Build with specific Dockerfile
docker build -f Dockerfile.prod -t my-app:prod .

# Build with build arguments
docker build --build-arg NODE_ENV=production -t my-app:latest .

# Build without cache
docker build --no-cache -t my-app:latest .
```

**Command breakdown:**

- `docker build`: Command to build an image
- `-t my-app:latest`: Tag the image with name `my-app` and tag `latest`
- `.`: Build context (current directory)

:::tip Build Context
The build context (`.`) determines which files are available to COPY. Use `.dockerignore` to exclude files.
:::

## Step 4: Verify the Image

List all images to verify your image was created:

```bash
# List all images
docker images

# List images with specific name
docker images my-app

# Inspect image details
docker inspect my-app:latest

# View image history
docker history my-app:latest
```

You should see your `my-app:latest` image in the list with details like:

- Repository name
- Tag
- Image ID
- Created date
- Size

## Step 5: Run the Container

Run a container from your image:

<Tabs>
  <TabItem value="basic" label="Basic Run" default>
    ```bash
    docker run my-app:latest
    ```
  </TabItem>
  
  <TabItem value="detached" label="Detached Mode">
    ```bash
    docker run -d -p 8000:8000 --name my-container my-app:latest
    ```
    
    - `-d`: Run in detached mode (background)
    - `-p 8000:8000`: Map port 8000 from container to host
    - `--name my-container`: Name the container
  </TabItem>
  
  <TabItem value="interactive" label="Interactive">
    ```bash
    docker run -it my-app:latest /bin/bash
    ```
    
    - `-i`: Interactive mode
    - `-t`: Allocate pseudo-TTY
  </TabItem>
  
  <TabItem value="env" label="With Environment">
    ```bash
    docker run -e NODE_ENV=production \
               -e DATABASE_URL=postgres://... \
               my-app:latest
    ```
  </TabItem>
</Tabs>

## Best Practices

### 1. Use .dockerignore

Create a `.dockerignore` file to exclude unnecessary files:

```dockerignore title=".dockerignore"
# Dependencies
node_modules
__pycache__
*.pyc

# Version control
.git
.gitignore

# Environment files
.env
.env.local

# IDE
.vscode
.idea
*.swp

# Build outputs
dist
build
*.log

# OS files
.DS_Store
Thumbs.db
```

**Benefits:**

- Faster builds
- Smaller build context
- Exclude sensitive files
- Reduce image size

### 2. Multi-Stage Builds

For production, use multi-stage builds to reduce image size:

<Tabs>
  <TabItem value="python" label="Python" default>
    ```dockerfile
    # Build stage
    FROM python:3.11-slim as builder
    WORKDIR /app
    COPY requirements.txt .
    RUN pip install --user -r requirements.txt
    
    # Runtime stage
    FROM python:3.11-slim
    WORKDIR /app
    COPY --from=builder /root/.local /root/.local
    COPY . .
    ENV PATH=/root/.local/bin:$PATH
    CMD ["python", "app.py"]
    ```
  </TabItem>
  
  <TabItem value="node" label="Node.js">
    ```dockerfile
    # Build stage
    FROM node:18-alpine AS builder
    WORKDIR /app
    COPY package*.json ./
    RUN npm ci
    COPY . .
    RUN npm run build
    
    # Runtime stage
    FROM node:18-alpine
    WORKDIR /app
    COPY --from=builder /app/dist ./dist
    COPY --from=builder /app/node_modules ./node_modules
    COPY package*.json ./
    EXPOSE 3000
    CMD ["node", "dist/index.js"]
    ```
  </TabItem>
</Tabs>

**Benefits:**

- Smaller final image
- No build tools in production
- Better security (fewer packages)
- Faster deployments

### 3. Layer Caching

Order Dockerfile instructions from least to most frequently changing:

```dockerfile
# 1. Base image (rarely changes)
FROM python:3.11-slim

# 2. System dependencies (rarely changes)
RUN apt-get update && apt-get install -y \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# 3. Application dependencies (changes occasionally)
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 4. Application code (changes frequently)
COPY . .
```

:::tip Cache Optimization
Docker caches each layer. If a layer changes, all subsequent layers are rebuilt. Order instructions to maximize cache hits.
:::

### 4. Security Best Practices

<Tabs>
  <TabItem value="nonroot" label="Non-Root User" default>
    ```dockerfile
    FROM node:18-alpine
    RUN addgroup -g 1001 -S nodejs && \
        adduser -S nodejs -u 1001
    USER nodejs
    WORKDIR /app
    COPY --chown=nodejs:nodejs . .
    CMD ["node", "index.js"]
    ```
  </TabItem>
  
  <TabItem value="minimal" label="Minimal Base">
    ```dockerfile
    # Use minimal base images
    FROM python:3.11-slim  # Instead of python:3.11
    FROM node:18-alpine     # Instead of node:18
    ```
  </TabItem>
  
  <TabItem value="secrets" label="Secrets Management">
    ```dockerfile
    # Don't hardcode secrets
    # Use build args or secrets
    ARG API_KEY
    ENV API_KEY=${API_KEY}
    
    # Or use Docker secrets (Docker Swarm/Kubernetes)
    ```
  </TabItem>
</Tabs>

### 5. Health Checks

Add health checks to your containers:

```dockerfile
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8000/health || exit 1
```

## Common Issues and Solutions

### Issue: Build fails with "file not found"

**Problem**: Files don't exist in build context.

**Solutions**:

- Ensure files exist in the build context
- Check `.dockerignore` isn't excluding needed files
- Verify file paths are correct

### Issue: Container exits immediately

**Problem**: Application doesn't stay running.

**Solutions**:

- Ensure CMD or ENTRYPOINT is set correctly
- Application must run in foreground (not as daemon)
- Check application logs: `docker logs container-name`

### Issue: Cannot connect to containerized application

**Problem**: Port mapping or network configuration issue.

**Solutions**:

- Verify EXPOSE directive matches application port
- Check port mapping: `-p host-port:container-port`
- Ensure application binds to `0.0.0.0`, not `localhost`

### Issue: Image size is too large

**Problem**: Image contains unnecessary files.

**Solutions**:

- Use multi-stage builds
- Use `.dockerignore`
- Use minimal base images (Alpine)
- Remove package managers and build tools in final stage

## Advanced Techniques

### Build Arguments

Pass variables during build:

```dockerfile
ARG NODE_ENV=production
ARG VERSION=1.0.0

ENV NODE_ENV=${NODE_ENV}
ENV APP_VERSION=${VERSION}
```

Build with:

```bash
docker build --build-arg NODE_ENV=development -t my-app:dev .
```

### Labels

Add metadata to images:

```dockerfile
LABEL maintainer="your-email@example.com"
LABEL version="1.0"
LABEL description="My application"
```

### Volume Mounts

Persist data outside container:

```bash
docker run -v /host/path:/container/path my-app:latest
```

## Next Steps

Congratulations! You've created your first container image. Here's what to explore next:

1. **Docker Compose**: Orchestrate multi-container applications
2. **Container Registry**: Push images to Docker Hub or private registry
3. **Container Orchestration**: Learn Kubernetes basics
4. **Production Deployment**: Implement production best practices
5. **Monitoring**: Set up container monitoring and logging

---

:::info Additional Resources

- [Dockerfile Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Docker Official Documentation](https://docs.docker.com/)
- [Container Security Guide](https://docs.docker.com/engine/security/)
  :::
