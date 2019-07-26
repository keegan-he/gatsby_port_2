import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import HeaderGeneric from '../components/HeaderGeneric';
import pic04 from '../assets/pages/moviebig.png';

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="AyeeEmmDeeBee Movie App Watchlist" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={pic04} alt="" />
            </span>
            <h2>AyeeEmmDeeBee Movie App Watchlist!</h2>
            <p>
              Code:{' '}
              <a href="https://github.com/keegan-he/v2-react-movie-list">
                Here
              </a>
            </p>
            <p>
              Live Project:{' '}
              <a href="https://protected-retreat-68530.herokuapp.com/">Here</a>
            </p>
            <h2>Learnings:</h2>
            <p>First time making CRUD app with MongoDB.</p>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Generic;
