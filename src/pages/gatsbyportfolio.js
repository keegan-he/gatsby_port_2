import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import HeaderGeneric from '../components/HeaderGeneric';
import khgatsbyport from '../assets/projects/khgatsbyport.png';

class Generic extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet title="Keegan Helmbrecht Portfolio Project" />
        <HeaderGeneric />
        <div id="main">
          <section id="content" className="main">
            <span className="image main">
              <img src={khgatsbyport} alt="" />
            </span>
            <h2>Portfolio Site - aka this website</h2>
            <p>
              Github Link:{' '}
              <a href="https://github.com/keegan-he/gatsby_port_2">Here</a>
            </p>
            <p>
              Live Project: <a href="https://www.keeg.dev">Here</a>
            </p>
            <h2>Learnings</h2>
            <p>
              This project helped me understand unidirectional dataflow with
              React and also how to use JavaScript's class based components to
              update the application state & user interface.
            </p>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Generic;
