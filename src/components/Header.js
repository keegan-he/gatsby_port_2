import React from 'react'

import logo from '../assets/images/software.svg'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" />
    </span>
    <h1>Keegan Helmbrecht</h1>
    <h2>Full Stack Developer in the Bay Area</h2>
    <p>
      Technical Expertise:
      <br />
      Python - React.js - JavaScript (ES6) - HTML / CSS - Django - Postgres SQL
      - Bash - Git - Pipenv - React Router - FlexBox & Grid - BEM - MVC - OOP -
      API engineering - ORM - OOP - Static Site Generation - SPA (Single Page
      Apps) - Webpack - Test Driven Development - Bootstrap - Agile
      <br />
    </p>
  </header>
)

export default Header
