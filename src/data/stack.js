const stack = {
  languages: [
    {
      id: 'js',
      name: 'Javascript',
      logo: 'javascript.png',
    },
    {
      id: 'php',
      name: 'php',
      logo: 'php.svg',
    },
    {
      id: 'C#',
      name: 'C#',
      logo: 'c-sharp.png',
    },
  ],
  frontEnd: [
    {
      id: 'react',
      name: 'ReactJS',
      logo: 'react.png',
    },
    {
      id: 'redux',
      name: 'Redux',
      logo: 'redux.png',
    },
    {
      id: 'rematch',
      name: 'Rematch',
      logo: 'rematch.png',
    },
    {
      id: 'bulma',
      name: 'Bulma.io',
      logo: 'bulma.png',
    },
    {
      id: 'ant',
      name: 'Ant Design',
      logo: 'ant.svg',
    },
    {
      id: 'semantic',
      name: 'Semantic UI React',
      logo: 'semantic.png',
    },
    {
      id: 'bootstrap',
      name: 'Bootstrap',
      logo: 'bootstrap.jpg',
    },
    {
      id: 'sagas',
      name: 'Sagas',
      logo: 'sagas.jpg',
    },
    {
      id: 'axios',
      name: 'Axios',
      logo: 'axios.jpg',
    },
    {
      id: 'aurelia',
      name: 'Aurelia',
      logo: 'aurelia.jpg',
    },
    {
      id: 'angularjs',
      name: 'AngularJS',
      logo: 'angularjs.svg',
    },
    {
      id: 'angularmaterial',
      name: 'Angular Material',
      logo: 'angularmaterial.png',
    },
    {
      id: 'ionic',
      name: 'Ionic',
      logo: 'ionic.png',
    },
    {
      id: 'jquery',
      name: 'Jquery',
      logo: 'jquery.jpg',
    },
    {
      id: 'twitter',
      name: 'Twitter API',
      logo: 'twitter.png',
    },
  ],
  backEnd: [
    {
      id: 'node',
      name: 'Node JS',
      logo: 'node.png',
    },
    {
      id: 'express',
      name: 'Express JS',
      logo: 'express.png',
    },
    {
      id: 'mongo',
      name: 'Mongo DB',
      logo: 'mongo.png',
    },
    {
      id: 'redis',
      name: 'Redis',
      logo: 'redis.png',
    },
    {
      id: 'grpc',
      name: 'gRPC',
      logo: 'grpc.png',
    },
    {
      id: 'mysql',
      name: 'MySQL',
      logo: 'mysql.png',
    },
    {
      id: 'sqlite',
      name: 'SQLite',
      logo: 'sqlite.png',
    },
    {
      id: 'codeigniter',
      name: 'Codeigniter',
      logo: 'codeigniter.png',
    },
    {
      id: 'cordova',
      name: 'Cordova',
      logo: 'codeigniter.png',
    },
    {
      id: 'phonegap',
      name: 'Phonegap',
      logo: 'codeigniter.png',
    },
  ],
  devTools: [
    {
      id: 'webstorm',
      name: 'Webstorm',
      logo: 'webstorm.svg',
    },
    {
      id: 'vscode',
      name: 'VSCode',
      logo: 'vscode.png',
    },
    {
      id: 'docker',
      name: 'Docker',
      logo: 'docker.png',
    },
    {
      id: 'kubernetes',
      name: 'Kubernetes',
      logo: 'kubernetes.png',
    },
    {
      id: 'microservices',
      name: 'Microservices structure',
      logo: 'microservices.png',
    },
    {
      id: 'gcloud',
      name: 'Google Cloud Platform',
      logo: 'gcloud.png',
    },
    {
      id: 'git',
      name: 'Git',
      logo: 'git.png',
    },
    {
      id: 'npm',
      name: 'NPM',
      logo: 'npm.png',
    },
    {
      id: 'yarn',
      name: 'YARN',
      logo: 'yarn.png',
    },
    {
      id: 'yeoman',
      name: 'Yeoman',
      logo: 'yeoman.png',
    },
    {
      id: 'storybook',
      name: 'Storybook',
      logo: 'storybook.png',
    },
    {
      id: 'babel',
      name: 'Babel',
      logo: 'babel.png',
    },
    {
      id: 'webpack',
      name: 'Webpack',
      logo: 'webpack.png',
    },
    {
      id: 'jest',
      name: 'Jest',
      logo: 'jest.png',
    },
    {
      id: 'mocha',
      name: 'Mocha',
      logo: 'mocha.svg',
    },
    {
      id: 'swagger',
      name: 'Swagger',
      logo: 'swagger.png',
    },
  ],
  videoGames: [
    {
      id: 'phaser',
      name: 'Phaser.io',
      logo: 'phaser.png',
    },
    {
      id: 'unity',
      name: 'Unity',
      logo: 'unity.png',
    },
    {
      id: 'udk',
      name: 'UDK',
      logo: 'unity.png',
    },
    {
      id: 'pascal',
      name: 'Pascal',
      logo: 'unity.png',
    },
  ],
  arduino: [
    {
      id: 'arduino',
      name: 'Phaser.io',
      logo: 'phaser.png',
    },
    {
      id: 'rfid',
      name: 'Unity',
      logo: 'unity.png',
    },
    {
      id: 'udk',
      name: 'UDK',
      logo: 'unity.png',
    },
    {
      id: 'pascal',
      name: 'Pascal',
      logo: 'unity.png',
    },
  ],
};

export const mapped = Object.entries(stack).reduce((acum, [type, items]) => {
  const normalized = items
    .reduce((acumItems, item) => ({ ...acumItems, [item.id]: { ...item, type } }), {});
  return { ...acum, ...normalized };
}, {});

export default {
  ...stack,
  order: ['frontEnd', 'backEnd', 'devTools', 'videoGames', 'languages'],
  icons: {
    frontEnd: 'fab fa-react',
    backEnd: 'fab fa-node-js',
    languages: 'fas fa-code',
    devTools: 'fas fa-wrench',
    videoGames: 'fas fa-gamepad',
  },
};
