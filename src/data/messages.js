/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from 'react';

export default {
  es: {
    about: {
      title: <Fragment>Hola, mi nombre es <span className="alternative-font my-name">Alexys Gonzalez</span></Fragment>,
      paragraphs: [
        'Soy un desarrollador de Aplicaciones Web, Aplicaciones Moviles Hibridas y Videojuegos.',
      ],
    },
    stack: {
      title: 'Mi Stack',
      description: 'Estas son las herramientas que uso para completar mis misiones, echa un vistazo:',
      frontEnd: {
        title: 'Front-End',
        introduction: 'Inicié con jQuery, luego de un par de años me adentré en el mundo de AngularJS, y por cosas del destino, me crucé con React y, fue inevitable, me enamoré del modelo reactivo y del JSX.',
      },
      backEnd: {
        title: 'Back-End',
        introduction: 'Por muchos años php y Codeigniter fueron mis compañeros en mi viaje por el Back-End, al lado de MySQL como base de datos relacionadas. Hoy en día, NodeJS y Express junto con MongoDB y Redis me ayudan en mi camino a traves de las sendas de los micro servicios.',
      },
      devTools: {
        title: 'DevTools',
        introduction: 'Mi IDE favorito: Webstorm. Mi Package Manager preferido: NPM. Mi Test Runner: Jest.',
      },
      languages: {
        title: 'Lenguajes',
        introduction: 'Aunque Javascript es mi lenguaje principal, tanto para front como para back, tambien cuento con solidos conocimientos en php. Por otra parte, he usado C# para el desarrollo de Videojuegos en Unity.',
      },
      videoGames: {
        title: 'Video Juegos',
        introduction: 'Unity y Phaser.io me han ayudado a hacer prototipos y algunos proyectos pequeños.',
      },
    },
    projects: {
      title: 'Mis Proyectos',
      introduction: 'Aquí podrás ver algunos de los proyectos en los que he trabajado. Adenlante, echa un vistazo:',
      tabs: {
        web: 'Aplicaciones Web',
        hybrids: 'Aplicaciones móviles híbridas',
        games: 'Videojuegos',
      },
      descriptions: {
        projectsophia: 'Proyecto Open Source, Aplicación para organizar productos, listas de precios y pedidos. Actualmente en desarrollo',
        notes: 'Aplicación de notas con etiquetas similar a Keep de google. Aplicación creada con fines educacionales y como ayuda a quien desee aprender y usar estas tecnologías',
        logemp: 'Aplicación que permite gestionar procesos de envíos entre dos puntos.',
        vjcolors: 'Aplicación que te ayuda desarrollar, calcular y organizar formulas químicas. Desarrollada con Codeigniter, AngularJS y Bootstrap.',
        battlesimulator: 'En esta aplicación sencilla puedes probar el sistema de batalla TinWill, realizando simulaciones de batallas y ver los resultados. Se puede usar para diseñar las unidades ajustando los Stats de los actores de la simulación.',
        gerenciales: 'Aplicación web usada por la Empresa Soluciones Gerenciales para gestionar los cursos que se dictán. Originalmente desarrolada en Codeignitar y luego migrada a Symphony.',
        gamelife: 'Mi versión de El Juego de La Vida. Desarrollada principalmente con codigo nativo Javascript.',
        listapro: 'Aplicación Android Híbrida especial para vendedores o cualquiera que trabaje con lista de precios. La app te permite cargar una lista de precios, realizar busquedas en la misma, generar pedidos y enviarlos vía correo electrónico.',
        torque: 'Aplicación Android que permité al usuario buscar repuestos automotrices en las tiendas de repuestos registradas dentro de la aplicación, pudiendo filtrar las busquedas ya sea limitando el radio de busqueda o tipo de tienda en particular, y así encontrar la mejor opción de compra. La app también ayuda a concretar la operación de compra, sirviendo de interfaz entre el comprador y la tienda.',
        bomber: 'Juego 2D del tipo scroll. Como dice el nombre, solo esquiva las bombas.',
        spaceship: 'Juego Simple 2D de Naves Espaciales. Prototipo.',
      },
    },
    contact: {
      title: 'Contactame',
      message: 'Si desea contactarme mandame un mensaje o un correo electrónico a alexysdk@gmail.com y con gusto te responderé a la brevedad posible.',
      form: {
        title: 'Tu Correo Electrónico',
        message: 'Tu Mensaje',
        send: 'Enviar Mensaje',
      },
    },
  },
  en: {
    about: {
      title: <Fragment>Hello, my name is <span className="alternative-font my-name">Alexys Gonzalez</span></Fragment>,
      paragraphs: [
        'I\'m a Web Application, Hybrids Mobile Apps and Video Games Developer',
      ],
    },
    stack: {
      title: 'My Stack',
      description: 'These are the tools I use to complete my missions. Go ahead, take a look:',
      frontEnd: {
        title: 'Front-End',
        introduction: 'I started with jQuery, after a couple of years I entered the world of AngularJS, and because of destiny, I came across React and, inevitably, fell in love with the reactive model and the JSX.',
      },
      backEnd: {
        title: 'Back-End',
        introduction: 'For many years php and Codeigniter were my companions in my trip through the Back-End, next to MySQL as a relational database. Today, NodeJS and Express along with MongoDB and Redis help me on my way through the paths of micro services.',
      },
      devTools: {
        title: 'DevTools',
        introduction: 'My favorite IDE: Webstorm. My preferred Package Manager: NPM. My Test Runner: Jest.',
      },
      languages: {
        title: 'Languages',
        introduction: 'Although Javascript is my main language, for front and back, I also have solid knowledge in php. On the other hand, I have used C# for Video Games development in Unity.',
      },
      videoGames: {
        title: 'Video Games',
        introduction: 'Unity and Phaser.io have helped me to make prototypes and small projects.',
      },
    },
    projects: {
      title: 'My Projects',
      introduction: 'Here you can see some of my freelancer projects. Go ahead, take a look:',
      tabs: {
        web: 'Web Applications',
        hybrids: 'Hybrid Mobile Applications',
        games: 'Video Games',
      },
      descriptions: {
        projectsophia: 'Open Source, helps to organize products, price\'s lists y orders. In development',
        notes: 'Notes and Labels application similar to Keep app from google. Created with educational purpose',
        logemp: 'Application that allows to manage shipping process between points.',
        vjcolors: 'Application that helps develop, calculate and organize chemical formulas.',
        battlesimulator: 'This simple application is used to test the battle system of TinWill with simulations in real-time of battles. Used to design and adjust the stats of battle units.',
        gerenciales: 'Web application used by Soluciones Gerenciales to manage the dictated courses. Originally developed in Codeigniter.',
        gamelife: 'My version of The Game of the Life. Developed mainly with Javascript native code.',
        listapro: 'Android Hybrid Application for sellers or anyone who use large price lists. Made with Ionic and Cordova Phonegap for Android. Sophia project predecesor.',
        torque: 'Android Hybrid Application to locate auto spare parts between city’s stores.',
        bomber: 'Scroll platform 2D game.',
        spaceship: 'Simple 2D Spaceship game. Prototype.',
      },
    },
    contact: {
      title: 'Contact me',
      message: 'If you want to contact me, send me a message or a mail to alexysdk@gmail.com, I will answer you as soon as possible',
      form: {
        title: 'Your Email',
        message: 'Your Message',
        send: 'Send Message',
      },
    },
  },
};
