import React from 'react';
import { Link } from 'gatsby';

const Footer = props => (
  <footer id="footer">
    <section>
      <h2>Thank you for stopping by!</h2>
      <p>
        If you have any questions or if there's anything I can help you with
        project-wise please get in touch. I look forward to hearing from you!
      </p>
      <ul className="actions">
        <li></li>
      </ul>
    </section>
    <section>
      <h2>Contact:</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>Parker St &bull; Berkeley, CA 94703 &bull; USA</dd>
        <dt>Phone</dt>
        <dd>(206) 446-8469</dd>
        <dt>Email</dt>
        <dd>
          <a href="#">keeganslane@gmail.com</a>
        </dd>
      </dl>
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
        <li>
          <a href="#" className="icon fa-dribbble alt">
            <span className="label">Dribbble</span>
          </a>
        </li>
      </ul>
    </section>
  </footer>
);

export default Footer;
