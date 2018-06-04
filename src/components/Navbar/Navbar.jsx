import React from 'react';
import { Navbar as NavbarBulma, NavbarBrand, NavbarItem } from 'sophia-components';

const Navbar = () => (
  <NavbarBulma dark hidden="desktop">
    <NavbarBrand>
      <NavbarItem>Alexys</NavbarItem>
    </NavbarBrand>
  </NavbarBulma>
);

export default Navbar;
