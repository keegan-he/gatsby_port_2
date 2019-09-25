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
            <p>
              Github Link:{' '}
              <a href="https://github.com/keegan-he/react-cyber-quiz">Here</a>
            </p>
            <p>
              Live Project:{' '}
              <a href="https://pedantic-blackwell-f953b2.netlify.com/">Here</a>
            </p>
            <h2>Learnings</h2>
            <p>
              Unidirectional dataflow with React and using state to update the
              UI.
            </p>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Generic;
