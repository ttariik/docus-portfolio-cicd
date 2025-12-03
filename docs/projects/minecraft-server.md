# Minecraft Server

A production-ready, self-hosted Minecraft server solution with automated deployment, comprehensive monitoring, and enterprise-grade management capabilities.

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition 
    link="https://github.com/ttariik/Minecraft-server/tree/feature/initial-setup"
    title="View on GitHub" 
    type="info"
>
Explore the complete source code, deployment scripts, and configuration files
</GithubLinkAdmonition>

## Overview

This project provides a fully containerized Minecraft server deployment solution using Docker and Docker Compose. It includes automated health monitoring, persistent storage management, web-based dashboard, and comprehensive backup/restore functionality.

## Key Features

- **Docker-Based Deployment**: Containerized architecture with docker-compose for easy setup and management
- **Automated Health Checks**: Built-in container health monitoring with automatic restart capabilities
- **Volume Persistence**: Persistent storage for game worlds, logs, and backup archives
- **Web Dashboard**: Real-time monitoring interface accessible via web browser
- **Security Hardening**: Non-root user execution, dropped capabilities, and security best practices
- **Backup & Recovery**: Automated daily backups with manual restore functionality
- **Production Ready**: Includes firewall configuration, security guidelines, and monitoring tools

## Technology Stack

- **Containerization**: Docker, Docker Compose
- **Web Server**: Nginx (for dashboard)
- **Scripting**: Bash shell scripts
- **Configuration**: YAML, Properties files
- **Documentation**: Markdown, PDF

## Architecture

The solution consists of:

1. **Minecraft Server Container**: Runs the Minecraft server JAR with optimized JVM settings
2. **Web Dashboard**: Nginx-based interface for server monitoring and management
3. **Volume Management**: Persistent volumes for worlds, logs, and backups
4. **Automation Scripts**: Deployment, backup, restore, and health check scripts

## Quick Start

### Prerequisites

- Docker and Docker Compose installed
- Minimum 2GB RAM available
- Ports 25565 (Minecraft) and 8888 (Web Dashboard) available

### Deployment

```bash
# Clone repository
git clone https://github.com/ttariik/Minecraft-server.git
cd Minecraft-server

# Deploy with Docker
chmod +x docker-deploy.sh
./docker-deploy.sh
```

### Access Points

- **Minecraft Server**: Connect to `YOUR_SERVER_IP:25565`
- **Web Dashboard**: Open `http://YOUR_SERVER_IP:8888` in browser

## Configuration

### Environment Variables

Configure via `.env` file:

- `SERVER_IP`: Server IP address
- `SERVER_PORT`: Minecraft server port (default: 25565)
- `MAX_RAM`: Maximum RAM allocation (default: 2G)
- `MIN_RAM`: Minimum RAM allocation (default: 1G)

### Server Properties

Customize game settings via `server.properties`:

- Server name and description
- Maximum players
- Difficulty and game mode
- Whitelist management
- And more

## Security Features

1. **Firewall Configuration**: UFW/iptables rules for port restrictions
2. **SSH Hardening**: Key-based authentication, password login disabled
3. **Whitelist Support**: Built-in player whitelist functionality
4. **Backup Encryption**: Optional encryption for sensitive backup data
5. **Regular Updates**: Automated update mechanisms for server JAR

## Monitoring & Management

### Web Dashboard

Access real-time server metrics:
- Server status and uptime
- Active player count
- CPU and memory usage
- Recent log entries

### API Endpoint

```bash
curl http://YOUR_SERVER_IP:8888/api/status
```

## Backup & Recovery

### Automated Backups

Daily backups run at 03:00 UTC via cron:

```bash
# Manual backup
./backup.sh

# Restore from backup
./restore.sh backups/backup-YYYY-MM-DD.tar.gz
```

## Project Highlights

- **Production-Ready**: Includes comprehensive security measures and monitoring
- **Developer-Friendly**: Well-documented with clear setup instructions
- **Scalable**: Easy to extend with additional features or plugins
- **Maintainable**: Clean code structure with automated deployment scripts

## Further References

- [GitHub Repository](https://github.com/ttariik/Minecraft-server/tree/feature/initial-setup)
- Docker Documentation
- Minecraft Server Documentation

