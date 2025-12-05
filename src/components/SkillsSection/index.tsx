import type { ReactNode } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type Skill = {
  name: string;
  iconPath: string;
  usage: string;
};

const skills: Skill[] = [
  {
    name: 'HTML',
    iconPath: '/svg/logos/HTML-Logo.svg',
    usage:
      'Structuring documentation sites, creating semantic markup for technical content, and building accessible web interfaces for DevSecOps tools.',
  },
  {
    name: 'CSS',
    iconPath: '/svg/logos/CSS-Logo.svg',
    usage:
      'Styling security dashboards, creating responsive layouts for monitoring tools, and designing user interfaces for infrastructure management platforms.',
  },
  {
    name: 'Static site generator',
    iconPath: '/svg/logos/Docusaurus-Logo.svg',
    usage:
      'Building secure documentation sites, generating static security reports, and creating knowledge bases for DevSecOps practices and procedures.',
  },
  {
    name: 'Python',
    iconPath: '/svg/logos/Python-Logo.svg',
    usage:
      'Automating security scans, writing infrastructure as code scripts, developing CI/CD pipeline scripts, and creating security monitoring tools.',
  },
  {
    name: 'Shell scripting',
    iconPath: '/svg/logos/Terminal-Logo.svg',
    usage:
      'Automating deployment processes, creating security hardening scripts, managing container orchestration, and automating infrastructure provisioning.',
  },
  {
    name: 'YAML',
    iconPath: '/svg/logos/YAML-Logo.svg',
    usage:
      'Configuring CI/CD pipelines, defining infrastructure as code, managing Kubernetes manifests, and creating Ansible playbooks for automation.',
  },
  {
    name: 'Container',
    iconPath: '/svg/logos/Docker-Logo.svg',
    usage:
      'Containerizing applications securely, managing container registries, implementing container security scanning, and orchestrating microservices.',
  },
  {
    name: 'CI/CD with GitHub Actions',
    iconPath: '/svg/logos/CI-CD-Logo.svg',
    usage:
      'Automating security testing in pipelines, implementing automated deployments, running vulnerability scans, and ensuring code quality gates.',
  },
  {
    name: 'IT Security',
    iconPath: '/svg/logos/IT-Security-Logo.svg',
    usage:
      'Implementing security best practices, conducting vulnerability assessments, managing secrets securely, and ensuring compliance with security standards.',
  },
];

export default function SkillsSection(): ReactNode {
  const baseUrl = useBaseUrl('/');

  const skillsWithUrls = skills.map((skill) => ({
    ...skill,
    iconUrl: baseUrl + skill.iconPath.replace(/^\//, ''),
  }));

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <h2 className={styles.title}>My skills.</h2>
        <div className={styles.skillsGrid}>
          {skillsWithUrls.map((skill, index) => (
            <div
              key={index}
              className={styles.skillCardWrapper}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.skillCard}>
                <div className={styles.skillIcon}>
                  <img src={skill.iconUrl} alt={skill.name} className={styles.skillIconImage} />
                </div>
                <div className={styles.skillName}>{skill.name}</div>
              </div>
              <div className={styles.skillHoverCard}>
                <div className={styles.hoverCardContent}>
                  <h3 className={styles.hoverCardTitle}>{skill.name}</h3>
                  <p className={styles.hoverCardUsage}>{skill.usage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
