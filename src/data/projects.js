export default {
  order: ['web', 'hybrids', 'games'],
  icons: {
    web: 'fas fa-globe',
    hybrids: 'fas fa-mobile-alt',
    games: 'fas fa-gamepad',
  },
  web: [
    {
      id: 'projectsophia',
      name: 'Project Sophia',
      img: 'sophia.jpg',
      stack: ['react', 'rematch', 'axios', 'bulma', 'node', 'express', 'mongo'],
      links: [
        {
          title: 'Backend',
          img: 'logo/github.svg',
          href: 'https://github.com/DKCoders/sophia',
        },
        {
          title: 'Frontend',
          img: 'logo/github.svg',
          href: 'https://github.com/DKCoders/sophia-app',
        },
        {
          title: 'Components',
          img: 'logo/github.svg',
          href: 'https://github.com/DKCoders/sophia-components',
        },
      ],
    },
    {
      id: 'notes',
      name: 'Notes Live Coding',
      img: 'notes.png',
      stack: ['react', 'redux', 'sagas', 'axios', 'bulma', 'node', 'express', 'swagger', 'mongo'],
      links: [
        {
          title: 'Repo',
          img: 'logo/github.svg',
          href: 'https://github.com/DKCoders/notes-live-coding',
        },
      ],
    },
    {
      id: 'logemp',
      name: 'Logemp',
      img: 'logemp.png',
      stack: ['react', 'rematch', 'axios', 'bulma'],
      links: [
        {
          title: 'Webpage',
          img: 'logo/webpage.png',
          href: 'http://logemp.com/',
        },
      ],
    },
    {
      id: 'vjcolors',
      img: 'vjcolors.png',
      name: 'VJ Colors: Formulations',
      stack: ['angularjs', 'bootstrap', 'codeigniter', 'mysql'],
    },
    {
      id: 'gamelife',
      img: 'gamelife.jpg',
      name: 'Game Of Life',
      stack: ['bootstrap', 'js'],
      links: [
        {
          title: 'Demo',
          img: 'logo/webpage.png',
          href: 'https://alexysbike.github.io/game-life/index.html',
        },
        {
          title: 'Repo',
          img: 'logo/github.svg',
          href: 'https://github.com/alexysbike/game-life',
        },
      ],
    },
    {
      id: 'battlesimulator',
      img: 'battlesimulator.png',
      name: 'Battle Simulator',
      stack: ['angularjs', 'angularmaterial', 'node', 'express'],
    },
    {
      id: 'gerenciales',
      img: 'gerenciales.jpg',
      name: 'Soluciones Gerenciales',
      stack: ['codeigniter', 'bootstrap', 'mysql', 'jquery'],
    },
  ],
  hybrids: [
    {
      id: 'listapro',
      img: 'listapro.png',
      name: 'Lista Pro',
      stack: ['angularjs', 'ionic', 'sqlite'],
    },
    {
      id: 'torque',
      img: 'torque.png',
      name: 'Torque App',
      stack: ['angularjs', 'ionic', 'sqlite', 'node', 'express', 'mongo'],
    },
  ],
  games: [
    {
      id: 'bomber',
      img: 'bomberdodge.jpg',
      name: 'Bomber Dodge',
      stack: ['unity'],
    },
    {
      id: 'spaceship',
      img: 'spaceship.jpg',
      name: 'Space Ship Game',
      stack: ['phaser'],
    },
  ],
};
