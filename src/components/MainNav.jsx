import React from 'react';
import { Link } from 'react-router-dom';

const MainNav = () => (
  <ul className='nav flex-column'>
    <li className='nav-item'>
      <Link className='nav-link' to='/hello_world'>Hello World!</Link>
      <a className='nav-link' href='#'>Counter</a>
    </li>
  </ul>
);

export default MainNav;