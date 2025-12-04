import { useEffect, useRef } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: JSX.Element;
  icon: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Project Showcases',
    icon: '🚀',
    description: (
      <>
        Explore my portfolio of development projects. From web applications to infrastructure
        solutions, discover the technologies and methodologies I use.
      </>
    ),
  },
  {
    title: 'Technical Documentation',
    icon: '📚',
    description: (
      <>
        Comprehensive documentation covering various technologies, best practices, and development
        workflows I've learned and implemented.
      </>
    ),
  },
  {
    title: 'Knowledge Base',
    icon: '💡',
    description: (
      <>
        A curated collection of tutorials, tips, and insights covering DevOps, containerization, Git
        workflows, Linux administration, and more.
      </>
    ),
  },
];

function Feature({ title, icon, description, index }: FeatureItem & { index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentCard = cardRef.current;
    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, []);

  return (
    <div className={clsx('col col--4')}>
      <div
        ref={cardRef}
        className={styles.featureCard}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className={styles.featureIcon}>
          <span>{icon}</span>
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>
            {title}
          </Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
