import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Waypoint from 'react-waypoint';
import Layout from '../components/layout';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Keegpic from '../assets/images/avatar.jpg';
import './index.css';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    };
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }));
  };

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  };

  render() {
    return (
      <Layout>
        <Helmet title="Keegan Helmbrecht Portfolio" />
        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About</h2>
                </header>
                <p>
                  Throughout my life, I've had many varied passions and
                  interests, usually centered around art and technology. I went
                  to my first Defcon as a 13 year old, I love Linux like an old
                  friend and took that passion into studying Information
                  Networking, Telecommunications, and Information Security. I
                  now work in the Bay Area, for the art e-commerce website,
                  Redbubble, specifically in the field of Intellectual Property
                  and Licensing.
                </p>
                <ul className="actions">
                  <li></li>
                </ul>
              </div>
              <span className="image">
                <img src={Keegpic} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>
            <ul className="features">
              <li>
                <img
                  className="hvr-grow"
                  src="https://i.imgur.com/NPTQ1Hv.jpg"
                  alt="Project 1"
                />

                <h3>Project 1</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
                <Link to="/generic" className="button">
                  Learn More
                </Link>
              </li>
              <li>
                <img
                  className="Project-image"
                  src="https://i.imgur.com/NPTQ1Hv.jpg"
                  alt="Project 2"
                />
                <h3>Project 2</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
                <Link to="/generic" className="button">
                  Learn More
                </Link>
              </li>
              <li>
                <img
                  className="Project-image"
                  src="https://i.imgur.com/NPTQ1Hv.jpg"
                  alt="Project 3"
                />
                <h3>Project 3</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
                <Link to="/generic" className="button">
                  Learn More
                </Link>
              </li>
            </ul>

            <ul className="features">
              <li>
                <img
                  className="Project-image"
                  src="https://i.imgur.com/NPTQ1Hv.jpg"
                  alt="Project 3"
                />
                <h3>Project 1</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
                <Link to="/generic" className="button">
                  Learn More
                </Link>
              </li>
              <li>
                <img
                  className="Project-image"
                  src="https://i.imgur.com/NPTQ1Hv.jpg"
                  alt="Project 3"
                />
                <h3>Project 2</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
                <Link to="/generic" className="button">
                  Learn More
                </Link>
              </li>
              <li>
                <img
                  className="Project-image"
                  src="https://i.imgur.com/NPTQ1Hv.jpg"
                  alt="Project 3"
                />
                <h3>Project 3</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                </p>
                <Link to="/generic" className="button">
                  Learn More
                </Link>
              </li>
            </ul>

            <footer className="major">
              <ul className="actions">
                <li></li>
              </ul>
            </footer>
          </section>
        </div>
      </Layout>
    );
  }
}

export default Index;
