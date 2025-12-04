# Contributing Guidelines

Thank you for your interest in contributing to this project. This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different viewpoints and experiences

## Getting Started

### Prerequisites

- Node.js >= 18.0
- pnpm (recommended) or npm/yarn
- Git

### Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/dev-blog-template-main.git
   cd dev-blog-template-main
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Making Changes

1. Make your changes in a feature branch
2. Ensure code follows the project's style guidelines
3. Run linting and type checking:
   ```bash
   pnpm lint
   pnpm typecheck
   ```
4. Test your changes locally:
   ```bash
   pnpm start
   ```
5. Build to verify production build:
   ```bash
   pnpm build
   ```

### Code Style

- Follow TypeScript best practices
- Use ESLint and Prettier (configured in project)
- Write self-documenting code with clear variable names
- Add comments for complex logic
- Keep functions focused and small

### Commit Messages

Follow conventional commit format:

```
type(scope): subject

body (optional)

footer (optional)
```

Types:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Example:

```
feat(docs): add contributing guidelines

Add comprehensive contributing guidelines including
code style, commit message format, and pull request process.
```

## Pull Request Process

1. Update documentation if needed
2. Ensure all tests pass
3. Update CHANGELOG.md if applicable
4. Request review from maintainers
5. Address review feedback
6. Squash commits if requested

### Pull Request Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated (if applicable)
- [ ] All tests pass locally

## Documentation

- Update README.md for user-facing changes
- Add JSDoc comments for new functions
- Update inline code comments when modifying logic
- Keep documentation examples up to date

## Reporting Issues

When reporting issues, include:

- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Environment details (OS, Node version, etc.)
- Screenshots (if applicable)

## Feature Requests

For feature requests:

- Check if feature already exists
- Describe the use case
- Explain the expected behavior
- Consider implementation complexity

## Questions?

Feel free to open an issue for questions or reach out to the maintainers.

Thank you for contributing!
