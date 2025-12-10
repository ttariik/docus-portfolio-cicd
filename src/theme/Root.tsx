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
  }, [location.pathname]);

  return <>{children}</>;
}
