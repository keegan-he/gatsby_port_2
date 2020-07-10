import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import HeaderGeneric from '../components/HeaderGeneric';
import Movie from '../assets/images/Movie_example2.png';

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="AyeeEmmDeeBee Movie App Watchlist" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={Movie} alt="" />
            </span>
            <h2>AyeeEmmDeeBee Movie App Watchlist!</h2>
            <p>
              Code on Github:{' '}
              <a href="https://github.com/keegan-he/v2-react-movie-list">
                Here
              </a>
            </p>
            <p>
              Live Project:{' '}
              <a href="https://protected-retreat-68530.herokuapp.com/">Here</a>
            </p>
            <h2>Learnings:</h2>
            <p>
              First time making CRUD app with the MERN stack. Had a lot of fun
              learning how to make multiple fetch requests to pull from the Open
              Movie Database api. This app incorporates Mongo database by
              allowing you to store your favorite movies to a watchlist for
              later.{' '}
            </p>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Generic;
