import React from 'react';

import NavItem from './NavItem';

const Navbar = ({ brand, navItems }) => {
  const navItemList = navItems.map((navItem, index) => (
    <NavItem key={index} aClass={navItem.aClass} liClass={navItem.liClass} text={navItem.text} />
  ));

  return <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
    <a className="navbar-brand" href="#">{brand}</a>
    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul className="navbar-nav mr-auto">
        {navItemList}
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </nav>;
};

export default Navbar;