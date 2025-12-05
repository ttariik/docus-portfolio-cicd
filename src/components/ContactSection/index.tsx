import type { ReactNode } from 'react';
import styles from './styles.module.css';

export default function ContactSection(): ReactNode {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <h2 className={styles.title}>Contact me.</h2>
        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>

            <ul className={styles.infoList}>
              <li>Feel free to reach out with job offers or opportunities in DevSecOps, Cloud Infrastructure, or Automation Engineering.</li>
              <li>I am looking for roles that focus on infrastructure automation, security integration, and CI/CD pipeline development.</li>
              <li>I will contribute by implementing secure DevOps practices, automating workflows, and improving system reliability.</li>
              <li>I am open for remote work and willing to relocate for the right opportunity.</li>
            </ul>
          </div>
          <div className={styles.contactDetails}>
            <p className={styles.lookingForward}>Looking forward to hearing from you!</p>
            <div className={styles.contactItem}>
              <div className={styles.iconCircle}>
                <span className={styles.icon}>✉️</span>
              </div>
              <a href="mailto:tarik.sabanovic2@icloud.com" className={styles.email}>
                tarik.sabanovic2@icloud.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.iconCircle}>
                <span className={styles.icon}>in</span>
              </div>
              <a href="https://de.linkedin.com/in/tarik-sabanovic-70410134b" className={styles.profileLink}>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

