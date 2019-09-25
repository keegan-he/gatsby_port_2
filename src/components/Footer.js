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
      <ul className="actions"></ul>
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
    <section>
      <div className="formstyle">
        <form
          method="POST"
          action="/success"
          className="contact-card__form"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          name="contact-form"
        >
          <input type="hidden" name="bot-field" />
          <div className="contact-card__fields">
            <div className="contact-card__field half">
              <input
                className="contact-card__name"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="contact-card__field half">
              <input
                className="contact-card__email "
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="contact-card__field">
              <textarea
                className="contact-card__message "
                name="message"
                id="message"
                rows="8"
                placeholder="Start typing..."
              ></textarea>
            </div>
            <div className="contact-card__field">
              <div data-netlify-recaptcha="true"></div>
            </div>
          </div>
          <ul className="contact-card__actions">
            <li>
              <input
                className="contact-card__send-message btn"
                type="submit"
                value="Send Message"
              />
            </li>
          </ul>
        </form>
      </div>
    </section>
  </footer>
);

export default Footer;
