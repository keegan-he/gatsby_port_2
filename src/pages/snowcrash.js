import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import HeaderGeneric from '../components/HeaderGeneric';
import snowcrash from '../assets/pages/snowcrashbig.png';

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Snowcrash Chapter" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={snowcrash} alt="" />
            </span>
            <h2>Snowcrash Chapters!</h2>
            <p>
              Code:{' '}
              <a href="https://github.com/keegan-he/snowcrash_chapters">Here</a>
            </p>
            <p>
              Live Project:{' '}
              <a href="https://keegan-he.github.io/snowcrash_chapters/">Here</a>
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
