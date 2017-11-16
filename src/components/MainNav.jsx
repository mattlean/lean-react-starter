import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => (
  <div id="main-nav">
    <h1>Lean React Starter</h1>
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/hello_world">
          Hello World
        </Link>
        <Link className="nav-link" to="/image">
          Image
        </Link>
        <Link className="nav-link" to="/bootstrap_starter_template">
          Bootstrap Starter Template
        </Link>
        <Link className="nav-link" to="/counter">
          Counter
        </Link>
      </li>
    </ul>
  </div>
);

export default MainNav;
