import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => [
  <h2 key="error-title">Error 404</h2>,
  <p key="error-msg">File not found</p>,
  <Link key="error-home-link" to="/">
    Back Home
  </Link>
];

export default Error404;
