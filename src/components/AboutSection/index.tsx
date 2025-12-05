import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function AboutSection(): ReactNode {
  const baseUrl = useBaseUrl('/');
  
  return (
    <section id="about" className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <p className={styles.greeting}>Hey there. 👋 I am</p>
            <h1 className={styles.title}>Tarik Sabanovic</h1>
            <p className={styles.role}>DevSecOps Engineer</p>
            <div className={styles.descriptionWrapper}>
              <p className={styles.descriptionText}>
                I am passionate about building secure, scalable infrastructure and automating DevOps
                workflows. My focus is on creating robust solutions that bridge development,
                security, and operations.
              </p>
              <p className={styles.descriptionText}>
                I continuously learn new technologies and stay current with industry best practices.
                Whether it's containerization, CI/CD pipelines, or security hardening, I approach
                each challenge with attention to detail and a commitment to excellence.
              </p>
            </div>
            <Link
              className={clsx('button button--primary button--lg', styles.contactButton)}
              to="#contact"
            >
              Contact me
            </Link>
          </div>
          <div className={styles.profileImage}>
            <img src={baseUrl + 'img/docusaurus.png'} alt="Tarik Sabanovic" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
