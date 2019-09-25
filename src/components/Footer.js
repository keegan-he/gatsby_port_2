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
        <form name="contact" method="POST" data-netlify="true">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </ul>
    </section>
    <section>
      <h2>Contact:</h2>
      <dl className="alt">
        <dt>Phone</dt>
        <dd>(206) 446-8469</dd>
        <dt>Email</dt>
        <dd>
          <a href="#">keeganslane@gmail.com</a>
        </dd>
      </dl>
    </section>
    <section></section>
  </footer>
);

export default Footer;
