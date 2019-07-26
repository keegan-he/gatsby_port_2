import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import HeaderGeneric from '../components/HeaderGeneric';
import pic04 from '../assets/images/pic04.jpg';

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Generic Page Title" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={pic04} alt="" />
            </span>
            <h2>Static Site Generator Info!</h2>
            <p>Github Link: https://github.com/keegan-he/2nd_refactor_ssg_site_generator</p>
            <p>Live Project: </p>
            <h2>Learnings</h2>
            <p>TBC!</p>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Generic;
