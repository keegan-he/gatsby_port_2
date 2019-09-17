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
            <p>Live Project: {' '}
            <a href="https://calm-fortress-18434.herokuapp.com/">
              Here
            </a> </p>
            <h2>Learnings:</h2>
            <p>First project working with Django and its templating language. This project started out as a way for me to build a static site generator. </p>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Generic;
