# Developer Blog - Tarik Sabanovic

A modern, feature-rich developer blog built with [Docusaurus](https://docusaurus.io/), showcasing projects, technical documentation, and a comprehensive knowledge base.

![Docusaurus](https://img.shields.io/badge/Docusaurus-3.5.2-blue)
![Node.js](https://img.shields.io/badge/Node.js-≥18.0-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.2-blue)
![License](https://img.shields.io/badge/License-MIT-yellow)
![Code Style](https://img.shields.io/badge/Code%20Style-ESLint%20%2B%20Prettier-blueviolet)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-success)

## ✨ Features

- **🎨 Modern UI Design**: Beautiful, responsive interface with smooth animations and transitions
- **📚 Comprehensive Documentation**: Knowledge base covering DevOps, Containerization, Git, and Linux
- **🚀 Project Showcases**: Detailed documentation for all development projects
- **🌙 Dark Mode Support**: Seamless dark/light theme switching
- **⚡ Performance Optimized**: Fast loading times with optimized assets
- **📱 Fully Responsive**: Perfect experience on all devices
- **🔍 Search Functionality**: Built-in search for easy content discovery
- **🎯 SEO Optimized**: Meta tags and structured data for better search engine visibility

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ttariik/dev-blog-template-main.git
   cd dev-blog-template-main
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm start
   ```

   The site will be available at `http://localhost:3000` with hot-reload enabled.

### Build for Production

```bash
pnpm build
```

This generates optimized static files in the `build/` directory.

### Preview Production Build

```bash
pnpm serve
```

## 📁 Project Structure

```
dev-blog-template-main/
├── blog/                 # Blog posts (Markdown/MDX)
├── docs/                 # Documentation files
│   ├── knowledge-base/   # Knowledge base articles
│   └── projects/         # Project documentation
├── src/
│   ├── components/       # React components
│   ├── css/             # Custom styles and animations
│   └── pages/           # Custom pages
├── static/              # Static assets (images, icons)
├── docusaurus.config.ts # Main configuration
└── sidebars.ts          # Sidebar structure
```

## 🎨 Customization

### Theme Colors

Edit `src/css/custom.css` to customize the color scheme:

```css
:root {
  --ifm-color-primary: #6366f1; /* Indigo */
  /* ... */
}
```

### Content

- **Documentation**: Add files to `docs/` and update `sidebars.ts`
- **Projects**: Add project documentation to `docs/projects/`
- **Blog Posts**: Create new posts in `blog/` directory
- **Components**: Custom React components in `src/components/`

## 🚢 Deployment

### GitHub Pages

```bash
USE_SSH=true pnpm deploy
```

Or without SSH:

```bash
GIT_USER=ttariik pnpm deploy
```

### Cloud VM / NGINX

1. Build the project:

   ```bash
   pnpm build
   ```

2. Copy files to server:

   ```bash
   tar -czf blog-build.tar.gz -C build .
   scp blog-build.tar.gz user@your-server:/tmp/
   ```

3. On the server:

   ```bash
   sudo mkdir -p /var/www/html
   sudo tar -xzf /tmp/blog-build.tar.gz -C /var/www/html
   sudo chown -R www-data:www-data /var/www/html
   ```

4. Configure NGINX (see `nginx.conf` example in repository)

### Docker

```bash
docker build -t dev-blog .
docker run -d -p 80:80 --name dev-blog dev-blog
```

## 🛠️ Technologies

- **Framework**: [Docusaurus 3.5.2](https://docusaurus.io/)
- **Language**: TypeScript
- **Styling**: CSS3 with Custom Properties
- **Package Manager**: pnpm
- **Build Tool**: Docusaurus CLI

## 📚 Documentation Sections

### Knowledge Base

- **Container**: Docker fundamentals and containerization
- **DevOps**: CI/CD, Infrastructure as Code, automation
- **Git**: Version control workflows and best practices
- **Linux**: Server administration and command line

### Projects

- Minecraft Server
- Baby Tools Shop
- WordPress Setup
- Juice Shop Master
- V-Server
- Truck Signs API

## 🧪 Development

### Code Quality

The project uses ESLint and Prettier for code quality:

```bash
# Run linting
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format

# Check formatting
pnpm format:check

# Run all validations
pnpm validate
```

### Type Checking

```bash
pnpm typecheck
```

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on:

- Code of conduct
- Development workflow
- Code style guidelines
- Commit message format
- Pull request process

Quick start:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes and run `pnpm validate`
4. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 🔒 Security

For security concerns, please review our [Security Policy](SECURITY.md). To report a vulnerability, please follow the guidelines outlined in the security policy.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Tarik Sabanovic**

- GitHub: [@ttariik](https://github.com/ttariik)
- LinkedIn: [Tarik Sabanovic](https://www.linkedin.com/in/tarik-sabanovic-70410134b/)

## 🙏 Acknowledgments

- [Docusaurus](https://docusaurus.io/) for the amazing static site generator
- [Infima](https://infima.dev/) for the CSS framework
- All contributors and the open-source community

---

⭐ If you find this project helpful, please consider giving it a star!
