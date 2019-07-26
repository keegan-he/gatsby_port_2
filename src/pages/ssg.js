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
              Github Link:
              https://github.com/keegan-he/2nd_refactor_ssg_site_generator
            </p>
            <p>
              Live Project: its on heroku, I'm embaressed to share the link
              before I change the content. COMING SOON!{' '}
            </p>
            <h2>Learnings</h2>
            <p>TBC!</p>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Generic;
