import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import HeaderGeneric from '../components/HeaderGeneric';
import pic04 from '../assets/images/pic04.jpg';

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Snowcrash Chapter" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={pic04} alt="" />
            </span>
            <h2>Snowcrash Chapters!</h2>
            <p>Github Link: https://github.com/keegan-he/snowcrash_chapters </p>
            <p>
              Live Project: https://keegan-he.github.io/snowcrash_chapters/{' '}
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
