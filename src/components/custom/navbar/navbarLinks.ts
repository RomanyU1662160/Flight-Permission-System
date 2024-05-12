type NavLink = {
  title: string;
  href: string;
  isDirectLink: boolean;
  children?: NavLink[];
  description?: string;
};

export const navigationLinks: Array<NavLink> = [
  {
    title: 'Getting started',
    href: '/',
    isDirectLink: false,
    children: [
      {
        title: 'Alert Dialog',
        href: '/',
        isDirectLink: true,
        description:
          'A modal dialog that interrupts the user with important content and expects a response.',
      },
      {
        title: 'Hover Card',
        href: '/',
        isDirectLink: true,
        description:
          'For sighted users to preview content available behind a link.',
      },
      {
        title: 'Progress',
        href: '/',
        isDirectLink: true,
        description:
          'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      },
      {
        title: 'Scroll-area',
        href: '/',
        isDirectLink: true,
        description: 'Visually or semantically separates content.',
      },
      {
        title: 'Tabs',
        href: '/',
        isDirectLink: true,
        description:
          'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
      },
      {
        title: 'Tooltip',
        href: '/',
        isDirectLink: true,
        description:
          'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
      },
    ],
  },
  {
    title: 'Documentation',
    href: '/',
    isDirectLink: false,
    children: [
      {
        title: 'Alert Dialog',
        href: '/',
        isDirectLink: true,
        description:
          'A modal dialog that interrupts the user with important content and expects a response.',
      },
      {
        title: 'Hover Card',
        href: '/',
        isDirectLink: true,
        description:
          'For sighted users to preview content available behind a link.',
      },
      {
        title: 'Progress',
        href: '/',
        isDirectLink: true,
        description:
          'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
      },
    ],
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    isDirectLink: true,
  },
  {
    title: 'News',
    href: '/news',
    isDirectLink: true,
  },
];
