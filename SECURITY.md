# Security Policy

## Supported Versions

We actively support security updates for the following versions:

| Version | Supported          |
| ------- | ------------------ |
| 3.5.x   | :white_check_mark: |
| < 3.5   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability, please follow these steps:

1. **Do NOT** create a public GitHub issue
2. Email security concerns to: [Your Email] or create a private security advisory
3. Include the following information:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if available)

## Security Best Practices

### Environment Variables

- Never commit `.env` files to version control
- Use `example.env` as a template only
- Rotate secrets regularly (every 90 days minimum)
- Use strong passwords (minimum 16 characters, mixed case, numbers, symbols)

### Dependencies

- Regularly update dependencies: `pnpm update`
- Review security advisories: `pnpm audit`
- Use dependency pinning for production builds

### Deployment

- Use HTTPS in production
- Configure Content Security Policy (CSP) headers
- Implement rate limiting for API endpoints
- Use secure headers (HSTS, X-Frame-Options, etc.)

### Code Security

- Never hardcode credentials or API keys
- Validate all user inputs
- Use parameterized queries for database operations
- Implement proper error handling without exposing sensitive information

## Security Checklist

Before deploying to production:

- [ ] All environment variables are set correctly
- [ ] `.env` files are excluded from Git
- [ ] Dependencies are up to date (`pnpm audit`)
- [ ] HTTPS is configured
- [ ] Security headers are implemented
- [ ] No hardcoded secrets in code
- [ ] Input validation is implemented
- [ ] Error messages don't expose sensitive information

## Disclosure Policy

- Security vulnerabilities will be addressed within 48 hours of report
- Patches will be released as soon as possible
- Public disclosure will occur after a fix is available
- Credit will be given to reporters (if desired)

## Additional Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Node.js Security Best Practices](https://nodejs.org/en/docs/guides/security/)
- [Docusaurus Security](https://docusaurus.io/docs/security)
