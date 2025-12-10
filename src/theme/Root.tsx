import { useEffect } from 'react';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type { ReactNode } from 'react';

export default function Root({ children }: { children: ReactNode }): ReactNode {
  const location = useLocation();
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    const baseUrl = siteConfig.baseUrl || '/';
    const legalNoticePath = `${baseUrl}legal-notice`.replace(/\/+/g, '/'); // Normalize path

    // Function to hide/show navbar based on path
    const updateNavbarVisibility = () => {
      const navbar = document.querySelector('.navbar');
      if (!navbar) return;

      // Hide navbar on all documentation pages (/docs/) and legal notice page
      const isDocPage = location.pathname.includes('/docs/');
      const isLegalNoticePage = location.pathname.includes('/legal-notice');

      if (isDocPage || isLegalNoticePage) {
        navbar.classList.add('navbar-hidden-on-docs');
      } else {
        navbar.classList.remove('navbar-hidden-on-docs');
      }
    };

    // Function to add Legal Notice link to footer
    const addLegalNoticeLink = () => {
      const copyright = document.querySelector('.footer__copyright');

      if (copyright && !copyright.querySelector(`a[href="${legalNoticePath}"]`)) {
        const link = document.createElement('a');
        link.href = legalNoticePath;
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
    };

    // Update navbar visibility immediately
    updateNavbarVisibility();

    // Add Legal Notice link immediately
    addLegalNoticeLink();

    // Also update navbar after a short delay to catch late-rendered navbars
    const timeoutId = setTimeout(() => {
      updateNavbarVisibility();
      addLegalNoticeLink();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [location.pathname, siteConfig.baseUrl]);

  return <>{children}</>;
}
