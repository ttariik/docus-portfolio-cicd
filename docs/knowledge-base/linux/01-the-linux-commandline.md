---
title: The Linux Command Line
---

# The Linux Command Line

The command line (also called terminal or shell) is a powerful interface for interacting with Linux systems. Mastering it is essential for efficient system administration and development.

## Getting Started

### Opening a Terminal

- **Linux Desktop**: Press `Ctrl+Alt+T` or search for "Terminal"
- **SSH**: Connect via `ssh user@hostname`
- **Remote Access**: Use SSH clients like PuTTY or OpenSSH

### Command Structure

```bash
command [options] [arguments]
```

Example:
```bash
ls -la /home/user
```

- `ls`: Command
- `-la`: Options (flags)
- `/home/user`: Argument

## Essential Commands

### File and Directory Operations

```bash
# List files
ls                    # Basic listing
ls -l                 # Detailed listing
ls -la                # Include hidden files
ls -lh                # Human-readable sizes

# Change directory
cd /path/to/directory
cd ~                  # Home directory
cd ..                 # Parent directory
cd -                  # Previous directory

# Print working directory
pwd

# Create directory
mkdir directory-name
mkdir -p path/to/directory  # Create parent directories

# Remove
rm filename           # Remove file
rm -r directory       # Remove directory recursively
rm -rf directory      # Force remove (use with caution!)

# Copy
cp source destination
cp -r source destination  # Copy directory

# Move/Rename
mv old-name new-name
mv file /path/to/destination
```

### File Viewing and Editing

```bash
# View file content
cat filename          # Display entire file
less filename         # Page through file (q to quit)
head filename         # First 10 lines
tail filename         # Last 10 lines
tail -f filename      # Follow file updates

# Edit files
nano filename         # Simple editor
vim filename          # Advanced editor
```

### Text Processing

```bash
# Search in files
grep "pattern" file
grep -r "pattern" directory  # Recursive search
grep -i "pattern" file      # Case-insensitive

# Count lines, words, characters
wc filename

# Sort lines
sort filename

# Find unique lines
uniq filename
```

### System Information

```bash
# Current user
whoami

# System information
uname -a
hostname

# Disk usage
df -h                 # Filesystem usage
du -h directory       # Directory size
du -sh *              # Size of all items

# Process information
ps aux                # All processes
top                   # Interactive process viewer
htop                  # Enhanced top (if installed)

# System resources
free -h               # Memory usage
```

### Permissions

```bash
# View permissions
ls -l

# Change permissions
chmod 755 filename    # Numeric mode
chmod +x filename     # Add execute permission
chmod u+w filename    # User write permission

# Change ownership
chown user:group filename
```

## File Permissions Explained

Permissions are shown as: `rwxrwxrwx`

- **r**: Read (4)
- **w**: Write (2)
- **x**: Execute (1)

Three groups: Owner, Group, Others

```bash
chmod 755 file
# 7 = 4+2+1 (rwx) for owner
# 5 = 4+1 (r-x) for group
# 5 = 4+1 (r-x) for others
```

## Pipes and Redirection

### Redirection

```bash
# Output to file
command > file        # Overwrite
command >> file       # Append

# Input from file
command < file

# Error redirection
command 2> error.log
command > output.log 2>&1  # Both stdout and stderr
```

### Pipes

```bash
# Chain commands
command1 | command2

# Examples
ls -la | grep "file"
ps aux | grep "process"
cat file | sort | uniq
```

## Useful Shortcuts

```bash
# Command history
history               # View history
!!                   # Repeat last command
!n                   # Execute command number n
!string              # Execute last command starting with string

# Tab completion
# Press Tab to auto-complete commands and filenames

# Clear screen
clear
Ctrl+L

# Cancel command
Ctrl+C

# End of input
Ctrl+D
```

## Environment Variables

```bash
# View variable
echo $HOME
echo $PATH

# Set variable
export VARIABLE="value"

# View all variables
env

# Add to PATH
export PATH=$PATH:/new/path
```

## Package Management

### Debian/Ubuntu (apt)

```bash
# Update package list
sudo apt update

# Upgrade packages
sudo apt upgrade

# Install package
sudo apt install package-name

# Remove package
sudo apt remove package-name

# Search packages
apt search keyword
```

### Red Hat/CentOS (yum/dnf)

```bash
# Install package
sudo yum install package-name
sudo dnf install package-name

# Update packages
sudo yum update
sudo dnf update

# Remove package
sudo yum remove package-name
```

## Process Management

```bash
# Run in background
command &

# View background jobs
jobs

# Bring to foreground
fg %1

# Kill process
kill PID
kill -9 PID          # Force kill

# Kill by name
pkill process-name
killall process-name
```

## Networking

```bash
# Network configuration
ip addr show
ifconfig

# Test connectivity
ping hostname
ping -c 4 hostname    # 4 packets

# Download files
wget URL
curl URL

# Network connections
netstat -tulpn
ss -tulpn
```

## Best Practices

1. **Use Tab completion**: Saves time and prevents typos
2. **Read man pages**: `man command` for documentation
3. **Use absolute paths**: When scripting or in production
4. **Be careful with rm**: Especially `rm -rf`
5. **Use sudo wisely**: Only when necessary
6. **Keep commands in history**: Useful for repetition

## Learning Resources

- Practice with common commands daily
- Read man pages: `man command`
- Use `--help` flag: `command --help`
- Explore `/usr/bin` for available commands

## Next Steps

- [Linux Server Administration](/docs/knowledge-base/linux/linux-server-administration)
- Shell scripting basics
- System administration tasks
- Automation with cron
