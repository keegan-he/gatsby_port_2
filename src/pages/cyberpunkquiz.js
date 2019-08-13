import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import HeaderGeneric from '../components/HeaderGeneric';
import reactquiz from '../assets/projects/cybersmall.png';

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Get your Cyber Punk on!" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={reactquiz} alt="" />
            </span>
            <h2>React Cyberpunk Quiz</h2>
            <p>Github Link: https://github.com/keegan-he/react-cyber-quiz </p>
            <p>
              Live Project: update coming soon! Until then, feel free to clone
              repo and npm start :P{' '}
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
