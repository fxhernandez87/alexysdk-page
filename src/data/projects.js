export default {
  order: ['web', 'hybrids', 'games', 'arduino'],
  icons: {
    web: 'fas fa-globe',
    hybrids: 'fas fa-mobile-alt',
    games: 'fas fa-gamepad',
    arduino: 'fas fa-microchip',
  },
  web: [
    {
      id: 'steelmen',
      name: 'Steelmen',
      img: 'steelmen.png',
      stack: ['react', 'redux', 'rematch'],
      links: [
        {
          title: 'Webpage',
          img: 'logo/webpage.png',
          href: 'http://steelmen.com.ar',
        },
      ],
    },
    {
      id: 'wikimia',
      name: 'Wikimia',
      img: 'wikimia.jpeg',
      stack: ['jquery', 'php', 'mysql', 'js'],
      links: [
        {
          title: 'Webpage',
          img: 'logo/webpage.png',
          href: 'http://wikimia.com.ar',
        },
      ],
    },
    {
      id: 'sisturnos',
      name: 'Sistema de turnos',
      img: 'sisturnos.png',
      stack: ['php', 'mysql', 'bootstrap', 'js'],
      links: [],
    },
    {
      id: 'mitikasfitness',
      name: 'Mitikas Fitness',
      img: 'mitikas.png',
      stack: ['php', 'mysql', 'bootstrap', 'js'],
      links: [
        {
          title: 'Webpage',
          img: 'logo/webpage.png',
          href: 'https://mitikasfitness.com/',
        },
      ],
    },
    {
      id: 'natura',
      img: 'natura.png',
      name: 'Natura Juegos',
      stack: ['js', 'php', 'mysql', 'twitter'],
      links: [],
    },
    {
      id: 'aguamat',
      img: 'aguamat.png',
      name: 'Aguamat Encuestas',
      stack: ['js', 'php', 'mysql'],
      links: [],
    },
  ],
  hybrids: [
    {
      id: 'mitikasfitness',
      img: 'mitikas.png',
      name: 'Mitikas Fitness',
      stack: ['angularjs', 'ionic', 'mysql', 'php'],
    },
    {
      id: 'Siyatch',
      img: 'siyatch.png',
      name: 'Siyatch App',
      stack: ['angularjs', 'ionic', 'sqlite', 'phonegap', 'cordova'],
    },
    {
      id: 'wikimia',
      img: 'wikimia.png',
      name: 'Wikimia v2',
      stack: ['node', 'mongo', 'express', 'react', 'rematch', 'axios'],
    },
  ],
  games: [
    {
      id: 'wikimia',
      img: 'wikimia.jpg',
      name: 'Wikimia',
      stack: ['js', 'php', 'mysql'],
    },
    {
      id: 'spaceshinvaders',
      img: 'spaceship.jpg',
      name: 'Space Invaders Game',
      stack: ['unity'],
    },
    {
      id: 'pimball',
      img: 'pimball.jpg',
      name: 'Pimball Demo',
      stack: ['udk'],
    },
    {
      id: 'samurais',
      img: 'samurais.jpg',
      name: 'Samurais Prototype',
      stack: ['udk'],
    },
    {
      id: 'archnoid',
      img: 'archnoid.jpg',
      name: 'Archnoid',
      stack: ['pascal'],
    },
  ],
  arduino: [
    {
      id: 'wallet',
      img: 'wallet.jpg',
      name: 'Shoot Wallet',
      stack: ['arduino', 'rfid'],
    },
    {
      id: 'laundry',
      img: 'laundy.jpg',
      name: 'Washing machine driver',
      stack: ['arduino'],
    },
    {
      id: 'weight',
      img: 'weight.jpg',
      name: 'Motors actioned by weight',
      stack: ['arduino'],
    },
    {
      id: 'jfconsole',
      img: 'jfconsole.jpg',
      name: 'JF Console',
      stack: ['arduino'],
    },
  ],
};
