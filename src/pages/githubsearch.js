import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import HeaderGeneric from '../components/HeaderGeneric';
import githubsearch from '../assets/projects/findgithub1.png';

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Github Search User App" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={githubsearch} alt="" />
            </span>
            <h2>Github Search User</h2>
            <p>
              Github Link:{' '}
              <a href="https://github.com/keegan-he/react_github_finduser">
                Here
              </a>
            </p>
            <p>
              Live Project:{' '}
              <a href="https://gallant-joliot-b9be08.netlify.com/">Here</a>
            </p>
            <h2>Learnings</h2>
            <p>
            React, React Router, Managing state using class components, Axios to fetch data.
            </p>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Generic;
