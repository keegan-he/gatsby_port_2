import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import HeaderGeneric from '../components/HeaderGeneric';
import khgatsbyport from '../assets/projects/gatsbyportfolio.png';
import NorrisZoneMockup from '../assets/projects/norriszonemockup.png';


class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Keegan Helmbrecht Portfolio Project" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={NorrisZoneMockup} alt="" />
            </span>
            <h2>Chuck Norris Joke Zone</h2>
            <p>
              Live Project: <a href="https://norriszone.netlify.app/">Here</a>
            </p>
            <h2>Built with:</h2>
            <p>
              Vanilla JavaScript, Bootstrap{' '}
            </p>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Generic;
