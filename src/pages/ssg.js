import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import HeaderGeneric from '../components/HeaderGeneric';
import ssgbigpic from '../assets/pages/ssgbig.png';

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Static Site Generator Project" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={ssgbigpic} alt="" />
            </span>
            <h2>Static Site Generator Info!</h2>
            <p>
              Github Code Link:{' '}
              <a href="https://github.com/keegan-he/2nd_refactor_ssg_site_generator">
                Here
              </a>
            </p>
            <p>
              Live Project:{' '}
              <a href="https://calm-fortress-18434.herokuapp.com/">Here</a>{' '}
            </p>
            <h2>Learnings:</h2>
            <p>
              First project working with Python and Django. I learned a lot
              about setting up routes and merging content with base templates
              via Django's awesome templating language(similar to Jinja2). By
              creating my own static site generator from scratch this project
              really helped me understand their power when working with large
              amounts of content.{' '}
            </p>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Generic;
