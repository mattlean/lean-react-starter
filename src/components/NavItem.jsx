import React from 'react';

const NavItem = ({ keyVal, aClass, liClass, text }) => {
  const liClassVal = liClass ? `nav-item ${liClass}` : 'nav-item';
  const aClassVal = aClass ? `nav-link ${aClass}` : 'nav-link';

  return <li className={liClassVal} key={keyVal}>
    <a className={aClassVal} href="#">{text}</a>
  </li>;
};

export default NavItem;
