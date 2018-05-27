import React from 'react';
import PropTypes from 'prop-types';

import Logo from 'assets/imgs/logo.png';

import { Container, LogoText, UserArea, FaIcon, Name } from './styles';
import { NavbarImg as Img } from '../styles';
import UserDropdown from '../UserDropdown';

const Navbar = ({ signed, name }) => (
  <Container>
    <LogoText to="/">
      <Img src={Logo} />
      <div>the pet bay</div>
    </LogoText>
    <UserArea>
      { signed && <Name>Olá, {name}!</Name> }
      <UserDropdown />
      { signed &&
        <FaIcon className="fas fa-paw" style={{ marginLeft: 20 }} />
      }
    </UserArea>
  </Container>
);

Navbar.propTypes = {
  signed: PropTypes.bool,
  name: PropTypes.string,
};

Navbar.defaultProps = {
  signed: false,
  name: '',
};

export default Navbar;
