/* eslint-disable jsx-a11y/anchor-is-valid,no-console */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar as NavbarBulma,
  NavbarBrand,
  NavbarMenu,
  NavbarStart,
  NavbarEnd,
  NavbarItem,
  Container,
  Button,
  Buttons,
} from 'sophia-components';
import { withStateHandlers } from 'proppy';
import { attach } from 'proppy-react';
import LanguageContext from '../../context/language';
import './navbar.sass';

const P = withStateHandlers(
  {
    active: false,
  },
  {
    toggleActive: props => () => ({ active: !props.active }),
  },
);

const Navbar = ({ active, toggleActive }) => (
  <NavbarBulma dark fixedTop>
    <Container>
      <NavbarBrand onBurgerClick={toggleActive}>
        <NavbarItem className="">
          <pre className="is-paddingless" style={{ fontSize: '1.5em', background: 'none' }}>
            <span className="has-text-primary has-text-weight-bold">let</span> <span style={{ color: 'whitesmoke' }}>adk<span id="cursor">_</span></span>
          </pre>
        </NavbarItem>
      </NavbarBrand>
      <NavbarMenu active={active}>
        <NavbarStart />
        <NavbarEnd>
          <NavbarItem>Stack</NavbarItem>
          <NavbarItem>Projects</NavbarItem>
          <NavbarItem>Contact</NavbarItem>
          <LanguageContext.Consumer>
            {({ language, setLanguage }) => (
              <Buttons style={{ marginLeft: 10 }}>
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
