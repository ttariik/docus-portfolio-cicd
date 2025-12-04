---
title: Git Clone
sidebar_label: Clone
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Git Clone

The `git clone` command is used to create a copy of an existing Git repository. This is typically the first step when you want to work on a project that already exists remotely.

:::info What is Git Clone?
`git clone` downloads a complete copy of a remote repository, including all files, commit history, and branches. It's the standard way to get started with an existing project.
:::

## Basic Usage

Clone a repository from a remote URL:

```bash
git clone <repository-url>
```

## Common Examples

<Tabs>
  <TabItem value="github" label="GitHub" default>
    ```bash
    # HTTPS (recommended for beginners)
    git clone https://github.com/username/repository.git
    
    # SSH (recommended for frequent use)
    git clone git@github.com:username/repository.git
    
    # Clone specific branch
    git clone -b branch-name https://github.com/username/repository.git
    ```
  </TabItem>
  
  <TabItem value="gitlab" label="GitLab">
    ```bash
    # HTTPS
    git clone https://gitlab.com/username/repository.git
    
    # SSH
    git clone git@gitlab.com:username/repository.git
    ```
  </TabItem>
  
  <TabItem value="bitbucket" label="Bitbucket">
    ```bash
    # HTTPS
    git clone https://bitbucket.org/username/repository.git
    
    # SSH
    git clone git@bitbucket.org:username/repository.git
    ```
  </TabItem>
  
  <TabItem value="custom" label="Custom Server">
    ```bash
    # Custom Git server
    git clone https://git.example.com/username/repository.git
    git clone git@git.example.com:username/repository.git
    ```
  </TabItem>
</Tabs>

## Clone Options

### Clone to Specific Directory

```bash
git clone https://github.com/username/repository.git my-project
```

This creates a directory named `my-project` and clones the repository into it.

### Shallow Clone

Clone only the latest commit history (useful for large repositories):

```bash
# Clone only last commit
git clone --depth 1 https://github.com/username/repository.git

# Clone last 10 commits
git clone --depth 10 https://github.com/username/repository.git
```

:::tip When to Use Shallow Clone

- Large repositories with extensive history
- CI/CD pipelines (faster builds)
- When you don't need full history
- Limited disk space
  :::

### Clone Specific Branch

Clone only a specific branch:

```bash
# Clone main branch only
git clone --branch main --single-branch https://github.com/username/repository.git

# Clone develop branch only
git clone --branch develop --single-branch https://github.com/username/repository.git
```

### Clone Without Checkout

Clone the repository but don't check out any files:

```bash
git clone --no-checkout https://github.com/username/repository.git
cd repository
git checkout -b new-branch
```

Useful for creating a new branch from remote without checking out files first.

## Understanding Clone vs Other Commands

<Tabs>
  <TabItem value="clone" label="git clone" default>
    **Creates a new local repository from remote**
    
    - Downloads entire repository
    - Creates new directory
    - Sets up remote tracking
    - Checks out default branch
    
    ```bash
    git clone <url>
    ```
  </TabItem>
  
  <TabItem value="init" label="git init">
    **Creates a new repository from scratch**
    
    - Initializes empty repository
    - No remote connection
    - No existing history
    
    ```bash
    git init
    ```
  </TabItem>
  
  <TabItem value="fetch" label="git fetch">
    **Updates existing repository with remote changes**
    
    - Downloads changes only
    - Doesn't modify working directory
    - Updates remote tracking branches
    
    ```bash
    git fetch origin
    ```
  </TabItem>
  
  <TabItem value="pull" label="git pull">
    **Fetches and merges remote changes**
    
    - Downloads changes
    - Merges into current branch
    - Updates working directory
    
    ```bash
    git pull origin main
    ```
  </TabItem>
</Tabs>

## After Cloning

Once you've cloned a repository, here's what to do next:

```bash
# Navigate into the repository
cd repository-name

# Check current branch
git branch

# View all branches (including remote)
git branch -a

# View remote repositories
git remote -v

# Check repository status
git status

# View commit history
git log --oneline
```

## Remote Configuration

After cloning, your repository has a remote named `origin` pointing to the source:

```bash
# View remote URL
git remote get-url origin

# View all remotes
git remote -v

# Change remote URL
git remote set-url origin <new-url>

# Add additional remote
git remote add upstream https://github.com/original/repository.git
```

:::tip Multiple Remotes
You can have multiple remotes:

- `origin`: Your fork or main repository
- `upstream`: Original repository (for forks)
- `production`: Production deployment target
  :::

## Authentication

<Tabs>
  <TabItem value="https" label="HTTPS" default>
    **Personal Access Token (Recommended)**
    
    ```bash
    # GitHub: Use token as password
    git clone https://github.com/username/repo.git
    # Username: your-username
    # Password: your-personal-access-token
    
    # Store credentials
    git config --global credential.helper store
    ```
    
    :::warning Security
    Never commit tokens to repositories. Use credential helpers or SSH keys.
    :::
  </TabItem>
  
  <TabItem value="ssh" label="SSH Keys">
    **SSH Key Authentication (Most Secure)**
    
    ```bash
    # Generate SSH key
    ssh-keygen -t ed25519 -C "your_email@example.com"
    
    # Add to SSH agent
    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/id_ed25519
    
    # Copy public key to GitHub/GitLab
    cat ~/.ssh/id_ed25519.pub
    
    # Clone using SSH
    git clone git@github.com:username/repo.git
    ```
  </TabItem>
</Tabs>

## Common Issues and Solutions

### Issue: Authentication Required

**Problem**: Git prompts for credentials repeatedly.

**Solutions**:

<Tabs>
  <TabItem value="credential-helper" label="Credential Helper" default>
    ```bash
    # Store credentials
    git config --global credential.helper store
    
    # Or use cache (temporary)
    git config --global credential.helper cache
    git config --global credential.helper 'cache --timeout=3600'
    ```
  </TabItem>
  
  <TabItem value="ssh" label="Use SSH">
    ```bash
    # Switch remote to SSH
    git remote set-url origin git@github.com:username/repo.git
    ```
  </TabItem>
  
  <TabItem value="token" label="Personal Access Token">
    ```bash
    # Use token in URL (one-time)
    git clone https://token@github.com/username/repo.git
    ```
  </TabItem>
</Tabs>

### Issue: Repository Not Found

**Problem**: `fatal: repository '...' not found`

**Solutions**:

- Verify the repository URL is correct
- Check your access permissions
- Ensure you're authenticated
- Verify the repository exists and is accessible

### Issue: Large Repository Takes Too Long

**Problem**: Clone takes forever or times out.

**Solutions**:

```bash
# Use shallow clone
git clone --depth 1 https://github.com/username/repo.git

# Clone specific branch only
git clone --branch main --single-branch https://github.com/username/repo.git

# Increase buffer size
git config --global http.postBuffer 524288000
```

### Issue: Disk Space

**Problem**: Repository is too large for available disk space.

**Solutions**:

```bash
# Shallow clone (minimal history)
git clone --depth 1 https://github.com/username/repo.git

# Clone without checking out files
git clone --no-checkout https://github.com/username/repo.git
```

## Best Practices

:::tip Clone Best Practices

1. **Use SSH for frequent access**: Set up SSH keys for easier authentication
2. **Clone to appropriate location**: Organize your cloned repositories
3. **Verify before cloning**: Check repository size and requirements
4. **Use specific branches**: Clone only what you need for large repos
5. **Keep remotes updated**: Regularly fetch from upstream
6. **Use shallow clones in CI/CD**: Faster builds, less storage

:::

## Advanced Usage

### Clone with Custom Reference

```bash
# Clone using specific reference
git clone --reference /path/to/existing/repo https://github.com/username/repo.git
```

### Clone with Submodules

```bash
# Clone repository with submodules
git clone --recurse-submodules https://github.com/username/repo.git

# Or clone first, then initialize submodules
git clone https://github.com/username/repo.git
cd repo
git submodule update --init --recursive
```

### Clone with Sparse Checkout

```bash
# Clone and checkout only specific directories
git clone --filter=blob:none --sparse https://github.com/username/repo.git
cd repo
git sparse-checkout init --cone
git sparse-checkout set directory1 directory2
```

## Related Commands

- `git init`: Initialize a new repository
- `git remote`: Manage remote repositories
- `git fetch`: Download changes from remote
- `git pull`: Fetch and merge remote changes
- `git checkout`: Switch branches or restore files

## Next Steps

After cloning, you might want to:

- [Learn about Git lifecycle](/docs/knowledge-base/git/lifecycle-in-git)
- [Understand branching](/docs/knowledge-base/git/git-branch)
- Set up your local development environment
- Create your first commit
- Configure Git settings

---

:::info Additional Resources

- [Git Official Documentation](https://git-scm.com/doc)
- [GitHub Cloning Guide](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
- [GitLab Cloning Guide](https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html)
  :::
