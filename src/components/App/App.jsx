import React from 'react';
import PropTypes from 'prop-types';
import { Route, BrowserRouter } from 'react-router-dom';
import { withState } from 'proppy';
import { attach } from 'proppy-react';
import Navbar from '../Navbar';
import About from '../../routes/About';
import Projects from '../../routes/Projects';
import Contact from '../../routes/Contact';
import LanguageContext from '../../context/language';
import MessageContext from '../../context/message';
import messages from '../../data/messages';

const P = withState('language', 'setLanguage', 'es');

const App = props => (
  <BrowserRouter>
    <LanguageContext.Provider value={props}>
      <MessageContext.Provider value={messages[props.language]}>
        <Navbar />
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </MessageContext.Provider>
    </LanguageContext.Provider>
  </BrowserRouter>
);

App.propTypes = {
  language: PropTypes.string.isRequired,
};

export default attach(P)(App);
