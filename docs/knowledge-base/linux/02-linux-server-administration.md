---
title: Linux Server Administration
---

# Linux Server Administration

Server administration involves managing, monitoring, and maintaining Linux servers to ensure optimal performance, security, and availability.

## Initial Server Setup

### SSH Access

```bash
# Connect to server
ssh user@server-ip
ssh -p 2222 user@server-ip  # Custom port

# Copy SSH key
ssh-copy-id user@server-ip

# SSH configuration
~/.ssh/config
```

### User Management

```bash
# Create user
sudo adduser username

# Add to group
sudo usermod -aG groupname username

# Change password
passwd username

# Switch user
su - username
sudo -u username command

# View users
cat /etc/passwd
getent passwd
```

### Firewall Configuration

```bash
# UFW (Ubuntu)
sudo ufw enable
sudo ufw allow 22/tcp      # SSH
sudo ufw allow 80/tcp      # HTTP
sudo ufw allow 443/tcp     # HTTPS
sudo ufw status

# firewalld (CentOS/RHEL)
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --reload
sudo firewall-cmd --list-all
```

## System Monitoring

### Resource Monitoring

```bash
# CPU and memory
top
htop                    # Enhanced version
vmstat 1               # Virtual memory stats

# Disk usage
df -h                  # Filesystem usage
du -sh /*              # Directory sizes
iostat                 # I/O statistics

# Network
iftop                  # Network traffic
nethogs                # Per-process network usage
```

### Log Management

```bash
# System logs
/var/log/syslog        # System log (Debian/Ubuntu)
/var/log/messages      # System log (RHEL/CentOS)

# Application logs
/var/log/nginx/
/var/log/apache2/
/var/log/mysql/

# View logs
tail -f /var/log/syslog
journalctl -f          # systemd logs
journalctl -u service-name
```

## Service Management

### systemd (Modern Linux)

```bash
# Service status
sudo systemctl status service-name

# Start/Stop/Restart
sudo systemctl start service-name
sudo systemctl stop service-name
sudo systemctl restart service-name

# Enable/Disable on boot
sudo systemctl enable service-name
sudo systemctl disable service-name

# List services
sudo systemctl list-units --type=service
sudo systemctl list-units --type=service --state=running
```

### Service Configuration

```ini title="/etc/systemd/system/myapp.service"
[Unit]
Description=My Application
After=network.target

[Service]
Type=simple
User=myuser
WorkingDirectory=/opt/myapp
ExecStart=/usr/bin/python3 /opt/myapp/app.py
Restart=always

[Install]
WantedBy=multi-user.target
```

Reload and enable:

```bash
sudo systemctl daemon-reload
sudo systemctl enable myapp
sudo systemctl start myapp
```

## Package Management

### Update System

```bash
# Debian/Ubuntu
sudo apt update
sudo apt upgrade
sudo apt dist-upgrade

# RHEL/CentOS
sudo yum update
sudo dnf update
```

### Install Common Server Software

```bash
# Web server
sudo apt install nginx
sudo apt install apache2

# Database
sudo apt install mysql-server
sudo apt install postgresql

# Development tools
sudo apt install git
sudo apt install build-essential
```

## Security Hardening

### SSH Hardening

```bash title="/etc/ssh/sshd_config"
# Disable root login
PermitRootLogin no

# Change default port
Port 2222

# Disable password authentication (use keys)
PasswordAuthentication no

# Limit login attempts
MaxAuthTries 3
```

Restart SSH:

```bash
sudo systemctl restart sshd
```

### Fail2Ban

Protect against brute force attacks:

```bash
sudo apt install fail2ban

# Configuration
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

### Automatic Security Updates

```bash
# Debian/Ubuntu
sudo apt install unattended-upgrades
sudo dpkg-reconfigure -plow unattended-upgrades
```

## Backup Strategies

### Manual Backup

```bash
# Backup directory
tar -czf backup-$(date +%Y%m%d).tar.gz /path/to/backup

# Backup database
mysqldump -u user -p database > backup.sql

# Sync to remote
rsync -avz /local/path user@remote:/backup/path
```

### Automated Backups

```bash title="/etc/cron.daily/backup.sh"
#!/bin/bash
BACKUP_DIR="/backup"
DATE=$(date +%Y%m%d)
tar -czf $BACKUP_DIR/backup-$DATE.tar.gz /important/data
find $BACKUP_DIR -name "backup-*.tar.gz" -mtime +7 -delete
```

Make executable:

```bash
chmod +x /etc/cron.daily/backup.sh
```

## Network Configuration

### Static IP Configuration

```yaml title="/etc/netplan/01-netcfg.yaml"
network:
  version: 2
  ethernets:
    eth0:
      dhcp4: no
      addresses:
        - 192.168.1.100/24
      gateway4: 192.168.1.1
      nameservers:
        addresses:
          - 8.8.8.8
          - 8.8.4.4
```

Apply:

```bash
sudo netplan apply
```

## Performance Tuning

### Kernel Parameters

```bash title="/etc/sysctl.conf"
# Network tuning
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216

# File handles
fs.file-max = 2097152
```

Apply:

```bash
sudo sysctl -p
```

### Swap Configuration

```bash
# Check swap
free -h
swapon --show

# Add swap file
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Make permanent
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

## Troubleshooting

### Common Issues

```bash
# High CPU usage
top
ps aux --sort=-%cpu | head

# High memory usage
free -h
ps aux --sort=-%mem | head

# Disk space
df -h
du -sh /* | sort -h

# Network connectivity
ping google.com
traceroute google.com
netstat -tulpn
```

### System Recovery

```bash
# Boot into recovery mode
# Single user mode
# Rescue mode from installation media

# Check filesystem
sudo fsck /dev/sda1

# Rebuild package database
sudo apt-get update --fix-missing
sudo dpkg --configure -a
```

## Best Practices

1. **Regular Updates**: Keep system and packages updated
2. **Backup Regularly**: Automate backup procedures
3. **Monitor Resources**: Set up monitoring and alerts
4. **Security First**: Harden SSH, use firewall, fail2ban
5. **Documentation**: Document configurations and changes
6. **Log Rotation**: Configure log rotation to prevent disk fill
7. **User Permissions**: Follow principle of least privilege

## Monitoring Tools

- **Prometheus + Grafana**: Metrics and visualization
- **Nagios**: Infrastructure monitoring
- **Zabbix**: Network monitoring
- **ELK Stack**: Log aggregation and analysis

## Next Steps

- Set up monitoring and alerting
- Implement automated backups
- Configure log rotation
- Harden security settings
- Plan disaster recovery procedures
