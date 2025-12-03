import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Sidebar configuration for documentation
 * Only includes knowledge-base and projects, excludes guides
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Knowledge Base',
      collapsed: true,
      items: [
        'knowledge-base/intro',
        {
          type: 'category',
          label: 'Container',
          collapsed: true,
          items: [
            'knowledge-base/Container/overview',
            'knowledge-base/Container/create-your-first-image',
          ],
        },
        {
          type: 'category',
          label: 'DevOps',
          collapsed: true,
          items: [
            'knowledge-base/DevOps/overview',
            'knowledge-base/DevOps/implementing-devops',
          ],
        },
        {
          type: 'category',
          label: 'Git',
          collapsed: true,
          items: [
            'knowledge-base/git/clone',
            'knowledge-base/git/lifecycle-in-git',
            'knowledge-base/git/git-branch',
          ],
        },
        {
          type: 'category',
          label: 'Linux',
          collapsed: true,
          items: [
            'knowledge-base/linux/overview',
            'knowledge-base/linux/the-linux-commandline',
            'knowledge-base/linux/linux-server-administration',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Projects',
      collapsed: true,
      items: [
        'projects/overview',
        'projects/minecraft-server',
        'projects/baby-tools-shop',
        'projects/wordpress',
        'projects/juice-shop-master',
        'projects/v-server',
        'projects/truck-signs-api',
        'projects/vserver-setup',
      ],
    },
  ],
};

export default sidebars;
