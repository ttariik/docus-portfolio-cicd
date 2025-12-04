# Juice Shop Master

A comprehensive security testing and penetration testing environment based on OWASP Juice Shop, configured for educational purposes and security research.

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition
link="https://github.com/ttariik/Juice-Shop-Master"
title="View on GitHub"
type="warning"

> This is a security testing environment. Use responsibly and only in controlled environments.
> </GithubLinkAdmonition>

## Overview

Juice Shop Master is a deliberately vulnerable web application designed for security training, penetration testing practice, and security awareness education. Based on the OWASP Juice Shop project, this deployment includes custom configurations and additional security challenges.

## Key Features

- **Deliberately Vulnerable**: Intentionally insecure application for learning purposes
- **OWASP Top 10 Coverage**: Includes vulnerabilities from OWASP Top 10 list
- **Multiple Challenge Levels**: Various difficulty levels for different skill sets
- **Security Training**: Ideal for security training and education
- **Penetration Testing Practice**: Safe environment for practicing penetration testing
- **Docker Deployment**: Easy deployment with Docker containers
- **Documentation**: Comprehensive documentation of vulnerabilities and solutions

## Technology Stack

- **Framework**: Node.js, Express.js
- **Frontend**: Angular.js
- **Database**: SQLite/PostgreSQL
- **Containerization**: Docker
- **Security Tools**: Various security testing tools integration

## Purpose & Use Cases

### Educational Use

- Security awareness training
- Learning about web application vulnerabilities
- Understanding attack vectors and defense mechanisms
- Security best practices education

### Professional Development

- Penetration testing practice
- Security assessment training
- Bug bounty preparation
- Security research

### Security Testing

- Testing security tools and scanners
- Validating security configurations
- Security tool development and testing
- Vulnerability assessment practice

## Security Vulnerabilities Included

The application includes various categories of vulnerabilities:

1. **Injection Attacks**: SQL injection, NoSQL injection, Command injection
2. **Broken Authentication**: Weak passwords, session management issues
3. **Sensitive Data Exposure**: Insecure data transmission, weak encryption
4. **XML External Entities (XXE)**: XML processing vulnerabilities
5. **Broken Access Control**: Insecure direct object references, privilege escalation
6. **Security Misconfiguration**: Default credentials, exposed sensitive information
7. **Cross-Site Scripting (XSS)**: Stored XSS, reflected XSS, DOM-based XSS
8. **Insecure Deserialization**: Object injection vulnerabilities
9. **Using Components with Known Vulnerabilities**: Outdated dependencies
10. **Insufficient Logging & Monitoring**: Missing security event logging

## Deployment

### Docker Deployment

```bash
# Clone repository
git clone https://github.com/ttariik/Juice-Shop-Master.git
cd Juice-Shop-Master

# Run with Docker
docker-compose up -d

# Access application
# Open http://localhost:3000
```

### Security Considerations

⚠️ **Important**: This application is intentionally vulnerable.

- **Never deploy to public networks**
- **Use only in isolated environments**
- **Do not use real credentials**
- **Isolate from production systems**
- **Follow responsible disclosure practices**

## Learning Path

### Beginner Level

- Basic SQL injection
- Simple XSS attacks
- Authentication bypass
- Information disclosure

### Intermediate Level

- Advanced SQL injection
- CSRF attacks
- File upload vulnerabilities
- API security issues

### Advanced Level

- Server-side template injection
- Deserialization attacks
- Advanced authentication bypass
- Complex privilege escalation

## Project Highlights

- **Educational Focus**: Designed specifically for learning and training
- **Comprehensive Coverage**: Includes wide range of vulnerability types
- **Real-World Scenarios**: Based on real-world vulnerability patterns
- **Documentation**: Well-documented vulnerabilities and solutions
- **Community**: Based on popular OWASP project with active community

## Ethical Considerations

This project is intended for:

- ✅ Educational purposes
- ✅ Authorized security testing
- ✅ Security research
- ✅ Training and certification

**Not intended for**:

- ❌ Unauthorized access to systems
- ❌ Malicious activities
- ❌ Production deployments
- ❌ Public network exposure

## Further References

- [GitHub Repository](https://github.com/ttariik/Juice-Shop-Master)
- [OWASP Juice Shop](https://owasp.org/www-project-juice-shop/)
- OWASP Top 10 Documentation
- Security Testing Best Practices
