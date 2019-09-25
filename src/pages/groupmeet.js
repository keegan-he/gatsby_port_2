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
            <h2>
              Group Meet - A Django app to improve diversity among the workplace
              and connect employees with similar interests!
            </h2>
            <p>
              Front End Code on Github:{' '}
              <a href="https://github.com/keegan-he/Group-Meet-Frontend">
                Here
              </a>
            </p>
            <p>
              Live Project:{' '}
              <a href="https://polar-lake-85399.herokuapp.com">Here</a>
            </p>

            <h2>Learnings:</h2>
            <p>
              Python, Django, Sqlite, MVC/MVT framework, User registration and
              authentication, also this was my first introduction to Daniel
              Greenfield's awesome Cookiecutter workflow. I am a huge fan of his
              .{' '}
              <p>
                <a href="https://www.amazon.com/gp/product/0692915729/ref=dbs_a_def_rwt_hsch_vapi_taft_p1_i0">
                  Two Scoops of Django book series!
                </a>
              </p>{' '}
            </p>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Generic;
