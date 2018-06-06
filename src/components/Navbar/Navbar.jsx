/* eslint-disable jsx-a11y/anchor-is-valid,no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  Navbar as NavbarBulma,
  NavbarBrand,
  NavbarMenu,
  NavbarStart,
  NavbarEnd,
  Container,
  Button,
  Buttons,
} from 'sophia-components';
import { withStateHandlers } from 'proppy';
import { attach } from 'proppy-react';
import LanguageContext from '../../context/language';

const P = withStateHandlers(
  {
    active: false,
  },
  {
    toggleActive: props => () => ({ active: !props.active }),
  },
);

const Navbar = ({ active, toggleActive }) => (
  <NavbarBulma dark>
    <Container>
      <NavbarBrand onBurgerClick={toggleActive}>
        <NavLink className="navbar-item" to="/" exact activeClassName="is-active">Alexys DK</NavLink>
      </NavbarBrand>
      <NavbarMenu active={active}>
        <NavbarStart>
          <NavLink className="navbar-item" to="/" exact activeClassName="is-active">About</NavLink>
          <NavLink className="navbar-item" to="/projects" activeClassName="is-active">Projects</NavLink>
          <NavLink className="navbar-item" to="/contact" activeClassName="is-active">Contact</NavLink>
        </NavbarStart>
        <NavbarEnd>
          <LanguageContext.Consumer>
            {({ language, setLanguage }) => (
              <Buttons>
                <Button dark inverted={language === 'es'} onClick={() => setLanguage('es')}>ES</Button>
                <Button dark inverted={language === 'en'} onClick={() => setLanguage('en')}>EN</Button>
              </Buttons>
            )}
          </LanguageContext.Consumer>
        </NavbarEnd>
      </NavbarMenu>
    </Container>
  </NavbarBulma>
);

Navbar.propTypes = {
  active: PropTypes.bool.isRequired,
  toggleActive: PropTypes.func.isRequired,
};

export default attach(P)(Navbar);
