import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import HeaderGeneric from '../components/HeaderGeneric';
import khphoto from '../assets/projects/khphoto.png';
import { Link } from "gatsby";

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Photography Portfolio" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={khphoto} alt="" />
            </span>
            <h2>Photography Portfolio</h2>
            <p>
              Github Link:{' '}
              <a href="https://github.com/keegan-he/photographysite">Here</a>
            </p>
            <p>
              Live Project:{' '}
              <a href="https://keegsphotography.netlify.com">Here</a>
            </p>
            <h2>Learnings</h2>
            <p>HTML, CSS, SASS, Vanilla Javascript</p>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Generic;
