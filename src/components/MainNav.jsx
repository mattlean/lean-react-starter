import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => (
  <ul className="nav flex-column">
    <li className="nav-item">
      <Link className="nav-link" to="/hello_world">
        Hello World!
      </Link>
      <Link className="nav-link" to="/bootstrap_starter_template">
        Bootstrap Starter Template
      </Link>
      <Link className="nav-link" to="/counter">
        Counter
      </Link>
    </li>
  </ul>
);

export default MainNav;
