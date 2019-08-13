import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import HeaderGeneric from '../components/HeaderGeneric';
import pic04 from '../assets/projects/esite.png';

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Euni's UX portfolio project" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={pic04} alt="" />
            </span>
            <h2>Euni's UX portfolio</h2>
            <p>Github Link: https://github.com/keegan-he/e-site </p>
            <p>Live Project: Coming soon!</p>
            <h2>Learnings</h2>
            <p>TBC!</p>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Generic;
