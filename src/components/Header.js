import React from 'react';
import logo from '../assets/images/catgrinning_ds.png';
import PDF from '../assets/resume/Keegan_Helmbrecht_Resume_2020.pdf';
import Jump from 'react-reveal/Jump';
import '../assets/css/style.css';

const Header = () => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="happy cat emoji" />
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
      JavaScript - React - Gatsby - Node - HTML5 - CSS3 - Python -
      Django - Postgres SQL - Bash - Git - Pipenv - React Router - FlexBox &
      Grid - MVC - OOP - REST APIs - ORM - Static Site Generation - SPA
      (Single Page Apps) - Test Driven Development - Bootstrap - Figma
      -Photoshop- Agile
      <br />
    </p>
    <Jump>
      <div className="resumebutton">
        <a href={PDF}>Download Resume Here 👈</a>
      </div>
    </Jump>
  </header>
);

export default Header;
