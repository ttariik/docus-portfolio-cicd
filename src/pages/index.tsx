import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>
          Welcome to my developer blog. Here you'll find comprehensive documentation, project
          showcases, and insights into my development journey. Explore cutting-edge technologies,
          best practices, and real-world implementations.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/projects/overview">
            <span>View Projects</span>
            <span style={{ marginLeft: '0.5rem' }}>→</span>
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/knowledge-base/intro">
            <span>Knowledge Base</span>
            <span style={{ marginLeft: '0.5rem' }}>📚</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - ${siteConfig.tagline}`}
      description="Developer blog showcasing projects, documentation, and technical insights by Tarik Sabanovic"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
