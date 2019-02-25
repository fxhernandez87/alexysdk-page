/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from 'react';

export default {
  es: {
    about: {
      title: <Fragment>Hola, mi nombre es <span className="alternative-font my-name">Francisco Hernández</span></Fragment>,
      paragraphs: [
        (
          <Fragment>
            {'Soy desarrollador de software, principalmente web. Poseo el conocimiento y habilidades necesarias para crear aplicaciones web a medida, amigables para el usuario.'}
            <br />
            {'Soy pro-activo, trabajador y dedicado. Actualmente busco expandir mis horizontes y salir de mi zona de confort, buscando nuevos desafíos en el extranjero.'}
          </Fragment>
        ),
      ],
    },
    stack: {
      title: 'Mi Stack',
      description: 'Estas son las herramientas que uso a diario en todos mis proyectos',
      frontEnd: {
        title: 'Front-End',
        introduction: 'Como casi todo hijo de los 90\' mis inicios fueron con CSS y jQuery, luego aprendi AngularJS 1 con proyectos hechos con Ionic Framework, y luego aparecio el modelo reactivo con ReactJS y VueJS. Hoy en día lo unico que utilizo es React',
      },
      backEnd: {
        title: 'Back-End',
        introduction: 'Mi historia es bastante particular, a los 19 años comenze mi travesia en el mundo de la programacion con COBOL, trabajando para empresas procesadoras de datos grandes, como Telefonica LATAM y MasterCard. Luego, mis deseos de hacer algo mas grafico me llevo al desarrollo WEB, hice cursos por mi cuenta de PHP y Javascript, Trabaje Freelance varios años, hasta que en 2015 me surgio la posibilidad de trabajar con NodeJS y React en una empresa. Y estuve perfeccionando mis skilles desde entonces.',
      },
      devTools: {
        title: 'DevOps',
        introduction: 'Trabajo diariamente con Kubernetes, desplegamos nuestras API\' en un cluster de GCloud a traves de Dockerfiles, y nuestras apps a buckets de Google Storage',
      },
      languages: {
        title: 'Lenguajes',
        introduction: 'A lo largo de mi carrera profesional, he aprendido diversos lenguajes de programacion, uno mas que otros, principalmente trabajo con Javascript, pero tengo solidos conocimientos en PHP, Cobol. Tambien he desarrollado programas para Arduino en C, C# para prototipos de videojuegos con Unity3D, y algo de UDK Script',
      },
      videoGames: {
        title: 'Video Juegos',
        introduction: 'Siempre quise desarrollar viedo juegos, Hice algunos prototipos en Unity3D, en Unreal Development Script, Archnoid en Pascal, Mini juegos con PHP y Jquery.',
      },
    },
    projects: {
      title: 'Mis Proyectos',
      introduction: 'Aquí podrás ver algunos de los proyectos en los que he trabajado. Adenlante, echa un vistazo:',
      tabs: {
        web: 'Aplicaciones Web',
        hybrids: 'Aplicaciones móviles híbridas',
        games: 'Videojuegos',
        arduino: 'Arduino',
      },
      descriptions: {
        project1: 'Proyecto 1 de prueba',
        sisturnos: 'Sistema de turnos para consultorios medicos, con historia medica de pacientes y ABM de especialistas.',
        mitikasfitness: 'Aplicacion movil y web para controlar tu ingesta de calorias y ejercicio realizado, con estadisticas y premios por cumplimiento',
        wikimia: 'Juego 2D del tipo scroll. Como dice el nombre, solo esquiva las bombas.',
        natura: 'Minijuegos para empresa conectada con la API de Twitter.',
        spaceinvaders: 'Juego en Unity de naves espaciales. Prototipo.',
      },
    },
    contact: {
      title: 'Contactame',
      message: 'Si desea contactarme mandame un mensaje o un correo electrónico a fxhernandez87@gmail.com y con gusto te responderé a la brevedad posible.',
      form: {
        title: 'Tu Correo Electrónico',
        message: 'Tu Mensaje',
        send: 'Enviar Mensaje',
      },
    },
  },
  en: {
    about: {
      title: <Fragment>Hello, my name is <span className="alternative-font my-name">Francisco Hernández</span></Fragment>,
      paragraphs: [
        (
          <Fragment>
            {'I\'m a full stack web developer with the skills & knowledge necessary to create user-friendlY  & focused web applications.'}
            <br />
            {'I\'m a quick learner, hard worker, & truly dedicated to my craft. I’m currently seeking new horizons and getting out of my comfort zone, looking for new challenges abroad.'}
          </Fragment>
        ),
      ],
    },
    stack: {
      title: 'My Stack',
      description: 'These are the tools I use in all my projects:',
      frontEnd: {
        title: 'Front-End',
        introduction: 'As almost every child of the 90 \'my beginnings were with CSS and jQuery, then I learned AngularJS 1 with projects made with Ionic Framework, and then the reactive model with ReactJS and VueJS appeared. Nowadays, the only thing I use is React.',
      },
      backEnd: {
        title: 'Back-End',
        introduction: 'My story is quite particular, at age 19 I started my journey in the world of programming with COBOL, working for large data processing companies, such as Telefonica LATAM and MasterCard. Then, my desire to do something more graphic took me to the WEB development, I did courses on my account of PHP and Javascript, I worked freelance for several years, until 2015 I was able to work with NodeJS and React in a company. And I was perfecting my skilles since then.',
      },
      devTools: {
        title: 'DevTools',
        introduction: 'I work daily with Kubernetes, we deploy our APIs\' in a GCloud cluster through Dockerfiles, and our apps to Google Storage buckets',
      },
      languages: {
        title: 'Languages',
        introduction: 'Throughout my professional career, I have learned several programming languages, one more than others, mainly working with Javascript, but I have solid knowledge in PHP, Cobol. I have also developed programs for Arduino in C, C # for video game prototypes with Unity3D, and some UDK Script',
      },
      videoGames: {
        title: 'Video Games',
        introduction: 'I always wanted to develop games, I did some prototypes in Unity3D, in Unreal Development Script, Archnoid in Pascal, Mini games with PHP and Jquery.',
      },
    },
    projects: {
      title: 'My Projects',
      introduction: 'Here you can see some of my freelancer projects. Take a look:',
      tabs: {
        web: 'Web Applications',
        hybrids: 'Hybrid Mobile Applications',
        games: 'Video Games',
        arduino: 'Arduino',
      },
      descriptions: {
        project1: 'Proyecto 1 de prueba',
        sisturnos: 'Sistema de turnos para consultorios medicos, con historia medica de pacientes y ABM de especialistas.',
        mitikasfitness: 'Aplicacion movil y web para controlar tu ingesta de calorias y ejercicio realizado, con estadisticas y premios por cumplimiento',
        wikimia: 'Juego 2D del tipo scroll. Como dice el nombre, solo esquiva las bombas.',
        natura: 'Minijuegos para empresa conectada con la API de Twitter.',
        spaceinvaders: 'Juego en Unity de naves espaciales. Prototipo.',
      },
    },
    contact: {
      title: 'Contact me',
      message: 'If you want to contact me, send me a message or a mail to fxhernandez87@gmail.com, I will answer you as soon as possible',
      form: {
        title: 'Your Email',
        message: 'Your Message',
        send: 'Send Message',
      },
    },
  },
};
