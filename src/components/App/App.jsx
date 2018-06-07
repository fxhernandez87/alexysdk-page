/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { withState } from 'proppy';
import { attach } from 'proppy-react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import About from '../../routes/About';
import Stack from '../../routes/Stack';
import Projects from '../../routes/Projects';
import Contact from '../../routes/Contact';
import LanguageContext from '../../context/language';
import MessageContext from '../../context/message';
import messages from '../../data/messages';

const P = withState('language', 'setLanguage', 'es');

const App = props => (
  <LanguageContext.Provider value={props}>
    <MessageContext.Provider value={messages[props.language]}>
      <a name="about">&nbsp;</a>
      <Navbar />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </MessageContext.Provider>
  </LanguageContext.Provider>
);

App.propTypes = {
  language: PropTypes.string.isRequired,
};

export default attach(P)(App);
