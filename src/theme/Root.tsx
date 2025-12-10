import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import type { ReactNode } from 'react';

export default function Root({ children }: { children: ReactNode }): ReactNode {
  const location = useLocation();

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const isProjectDocPage = location.pathname.includes('/docs/projects/');

    if (isProjectDocPage) {
      navbar.classList.add('navbar-hidden-on-projects');
    } else {
      navbar.classList.remove('navbar-hidden-on-projects');
    }

    // Add Legal Notice link to footer copyright
    const copyright = document.querySelector('.footer__copyright');
    if (copyright && !copyright.querySelector('a[href="/legal-notice"]')) {
      const link = document.createElement('a');
      link.href = '/legal-notice';
      link.textContent = 'Legal Notice';
      link.style.color = 'rgba(255, 255, 255, 0.8)';
      link.style.textDecoration = 'none';
      link.style.transition = 'color 0.3s ease';
      link.style.display = 'block';
      link.style.marginTop = '0.5rem';
      link.addEventListener('mouseenter', () => {
        link.style.color = 'white';
        link.style.textDecoration = 'underline';
      });
      link.addEventListener('mouseleave', () => {
        link.style.color = 'rgba(255, 255, 255, 0.8)';
        link.style.textDecoration = 'none';
      });
      copyright.appendChild(link);
    }
  }, [location.pathname]);

  return <>{children}</>;
}
