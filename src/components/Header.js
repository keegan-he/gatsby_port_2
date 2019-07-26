import React from 'react';

import logo from '../assets/images/chip.svg';

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" />
    </span>
    <h1>Keegan Helmbrecht</h1>
    <h2>Full Stack Developer in the Bay Area</h2>
    <ul className="icons">
      <li>
        <a
          href="https://www.linkedin.com/in/keegan-helmbrecht/"
          className="icon fa-linkedin alt"
        >
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/verbala"
          className="icon fa-facebook alt"
        >
          <span className="label">Facebook</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/verbala/"
          className="icon fa-instagram alt"
        >
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/keegan-he" className="icon fa-github alt">
          <span className="label">Keeg's GitHub</span>
        </a>
      </li>
    </ul>
    <p>
      Technical Skills: <space></space>
      <br />
      Python - React.js - JavaScript (ES6) - HTML / CSS - Django - Gatsby -
      Postgres SQL - Bash - Git - Pipenv - React Router - FlexBox & Grid - BEM -
      MVC - OOP - API engineering - ORM - OOP - Static Site Generation - SPA
      (Single Page Apps) - Webpack - Test Driven Development - Bootstrap - Agile
      <br />
    </p>
  </header>
);

export default Header;
