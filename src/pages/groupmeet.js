import React from 'react';
import Helmet from 'react-helmet';

import Layout from '../components/layout';
import HeaderGeneric from '../components/HeaderGeneric';
import Groupmeet from '../assets/pages/signup_demo.png';

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Group Meet" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={Groupmeet} alt="" />
            </span>
            <h2>Group Meet - Connect to people with similar interests!</h2>
            <p>Github Link: will post the django project soon!</p>
            <p>Live Project: ''</p>
            <h2>Learnings:</h2>
            <p>Coming Sooon!</p>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Generic;
