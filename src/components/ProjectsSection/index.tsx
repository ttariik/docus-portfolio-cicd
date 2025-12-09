import { useState, type ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

type Project = {
  name: string;
  thumbnail: string;
  description: string;
  tags: string[];
  documentationLink: string;
  githubLink: string;
};

const projects: Project[] = [
  {
    name: 'Baby Tools',
    thumbnail: '/svg/project-thumbnails/Baby-Tools-Shop.svg',
    description:
      'E-commerce platform for baby tools and accessories. Built with modern web technologies, featuring secure payment processing, inventory management, and responsive design.',
    tags: ['HTML', 'CSS', 'JavaScript', 'E-commerce'],
    documentationLink: '/docs/projects/baby-tools-shop',
    githubLink: 'https://github.com/ttariik/Baby-Tools-Shop/tree/feature/production-enhancements',
  },
  {
    name: 'Truck Signs API',
    thumbnail: '/svg/project-thumbnails/Truck-Signs-API.svg',
    description:
      'RESTful API for managing truck signage systems. Implements secure authentication, real-time updates, and comprehensive documentation for integration.',
    tags: ['API', 'REST', 'Backend', 'Security'],
    documentationLink: '/docs/projects/truck-signs-api',
    githubLink:
      'https://github.com/ttariik/truck_signs_api/tree/feature/security-and-docker-enhancements',
  },
  {
    name: 'Juice Shop Meister',
    thumbnail: '/svg/project-thumbnails/CI-CD-Pipeline.svg',
    description:
      'Security testing and vulnerability assessment tool based on OWASP Juice Shop. Automated security scanning and penetration testing framework.',
    tags: ['Security', 'Testing', 'OWASP', 'Automation'],
    documentationLink: '/docs/projects/juice-shop-master',
    githubLink: 'https://github.com/ttariik/Juice-Shop-Master',
  },
  {
    name: 'Minecraft',
    thumbnail: '/svg/project-thumbnails/Minecraft-Server.svg',
    description:
      'Self-hosted Minecraft server with automated deployment, monitoring, and backup solutions. Containerized infrastructure with CI/CD pipeline integration.',
    tags: ['YAML', 'Shell scripting', 'IT Security', 'Container'],
    documentationLink: '/docs/projects/minecraft-server',
    githubLink: 'https://github.com/ttariik/Minecraft-server/tree/feature/initial-setup',
  },
  {
    name: 'WordPress hosten',
    thumbnail: '/svg/project-thumbnails/Wordpress-Logo.svg',
    description:
      'WordPress hosting solution with automated deployment, SSL configuration, and performance optimization. Infrastructure as Code implementation.',
    tags: ['WordPress', 'DevOps', 'Infrastructure', 'Automation'],
    documentationLink: '/docs/projects/wordpress',
    githubLink: 'https://github.com/ttariik/Wordpress/tree/feature/wordpress',
  },
];

export default function ProjectsSection(): ReactNode {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const baseUrl = useBaseUrl('/');

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <h2 className={styles.title}>My project highlights.</h2>
        <div className={styles.projectsContent}>
          <div className={styles.projectsList}>
            {projects.map((project, index) => (
              <div
                key={index}
                className={`${styles.projectItem} ${selectedProject.name === project.name ? styles.active : ''}`}
                onClick={() => setSelectedProject(project)}
              >
                {project.name}
              </div>
            ))}
            <Link to="/docs/projects/overview" className={styles.seeMore}>
              → see more projects
            </Link>
          </div>
          <div className={styles.featuredProject}>
            <div className={styles.projectImage}>
              <img
                src={baseUrl + selectedProject.thumbnail.replace(/^\//, '')}
                alt={selectedProject.name}
                className={styles.projectThumbnail}
              />
            </div>
            <div className={styles.projectTags}>
              {selectedProject.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
            <h3 className={styles.projectTitle}>{selectedProject.name}</h3>
            <p className={styles.projectDescription}>{selectedProject.description}</p>
            <div className={styles.projectButtons}>
              <Link className="button button--primary" to={selectedProject.documentationLink}>
                Documentation
              </Link>
              <Link className="button button--secondary" to={selectedProject.githubLink}>
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
