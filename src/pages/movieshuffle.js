import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import HeaderGeneric from '../components/HeaderGeneric';
import MovieShuffleMockUp from '../assets/projects/movieSuffleMockUp.png';

class Generic extends React.Component {
  render() {
    return (
      <Layout>

        <Helmet title="MovieShuffle" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">

            <span className="image main">
              <img src={MovieShuffleMockUp} alt="" />
            </span>

            <h2>MovieShuffle App - Randomize your watchlist!</h2>
            <p>
              Live Project:{' '}
              <a href="https://www.movieshuffle.fun">Here</a>
            </p>
            <h2>Built with: </h2>
            <p>
            Vanilla JavaScript + Bootstrap
            </p>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Generic;
