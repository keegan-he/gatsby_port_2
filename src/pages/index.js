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
                  className="Project-image"
                  src="https://i.imgur.com/NPTQ1Hv.jpg"
                  alt="Project 1"
                />

                <h3>Static Site Generator</h3>
                <p>
                  Using the Django web framework I built this static site
                  generator using Python, CSS, HTML and Jinja2. When you run
                  build it will generate the
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
                <h3>Ayee Emm Dee Bee Watchlist</h3>
                <p>
                  Built using the MERN stack. This app sucks in data from The
                  Movie DB and allows you to save your additions to a watch
                  list.
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
                <h3>Snowcrash Chapters CSS</h3>
                <p>
                  Having been obsessed with Snow Crash I wanted to practice my
                  CSS to create a fun way to stylizing the first chapter of the
                  famous Cyber Punk novel.
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
                <h3>Group Meet</h3>
                <p>
                  Front-End project using the boostrap framework and lots of
                  different CSS techniques. Eventually I will add this to a
                  Django project and it will be social app for meeting people
                  with similar interests.
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
                <h3>Cyberpunk Quiz in React</h3>
                <p>
                  Using React I wanted to create an app that would help me
                  understand how state is passed around the front end. I thought
                  what better way than to create a quiz to test your Cyberpunk
                  knowledge.
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
                <h3>Github Search</h3>
                <p>
                  Find your favorite people to follow on github by searching
                  usernames. This app interacts with Githubs API to find
                  relevant users. This was built using react to practice
                  fetching data from an API.
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
