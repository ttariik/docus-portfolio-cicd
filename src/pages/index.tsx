import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import AboutSection from '@site/src/components/AboutSection';
import SkillsSection from '@site/src/components/SkillsSection';
import ProjectsSection from '@site/src/components/ProjectsSection';
import ContactSection from '@site/src/components/ContactSection';
import ScrollToTop from '@site/src/components/ScrollToTop';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Portfolio`}
      description="Portfolio of Tarik Sabanovic, DevSecOps Engineer"
    >
      <main>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <ScrollToTop />
      </main>
    </Layout>
  );
}
