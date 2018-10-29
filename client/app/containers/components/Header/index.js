import React from 'react';

import { Link } from 'react-router-dom';

import './index.scss';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/map">Map</Link>
    </nav>
  </header>
);

export default Header;