import React from 'react';

import Navbar from './Navbar';

const BSStarterTemplate = () => (
  <div id="bs-starter-template">
    <Navbar brand="Navbar" navItems={
      [
        {liClass: 'active', text: 'Home'},
        {text: 'Link'},
        {aClass: 'disabled', text: 'Disabled'}
      ]
    } />
    <div className="container">
      <div className="starter-template">
        <h1>Bootstrap starter template</h1>
        <p className="lead">
          Use this document as a way to quickly start any new project.
          <br />
          All you get is this text and a mostly barebones HTML document.
        </p>
      </div>
    </div>
  </div>
);

export default BSStarterTemplate;