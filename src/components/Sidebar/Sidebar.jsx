/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Column, Menu, MenuList, Buttons, Button } from 'sophia-components';
import { Link, withRouter } from 'react-router-dom';
import './sidebar.sass';
import LanguageContext from '../../context/language';

const Sidebar = ({ location: { pathname } }) => (
  <Fragment>
    <Column className="app-side-menu-hidden" narrow hidden="touch" />
    <Column className="app-side-menu" paddingless hidden="touch" narrow background="dark">
      <Menu>
        <MenuList className="list">
          <li><Link className={pathname === '/' ? 'is-active' : ''} to="/" >About</Link></li>
          <li><Link className={pathname === '/projects' ? 'is-active' : ''} to="/projects" >Projects</Link></li>
          <li><Link className={pathname === '/contact' ? 'is-active' : ''} to="/contact" >Contact</Link></li>
        </MenuList>
      </Menu>
      <LanguageContext.Consumer>
        {({ language, setLanguage }) => (
          <Buttons style={{ position: 'absolute', bottom: 5, left: 15 }}>
            <Button dark inverted={language === 'es'} onClick={() => setLanguage('es')}>ES</Button>
            <Button dark inverted={language === 'en'} onClick={() => setLanguage('en')}>EN</Button>
          </Buttons>
        )}
      </LanguageContext.Consumer>
    </Column>
  </Fragment>
);

Sidebar.propTypes = {
  location: PropTypes.shape().isRequired,
};

export default withRouter(Sidebar);
