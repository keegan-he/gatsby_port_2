import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Waypoint from 'react-waypoint';
import Layout from '../components/layout';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Keegpic from '../assets/images/avatar.jpg';
import './index.css';
import Groupmeet from '../assets/projects/login_demo.png';
import Euni from '../assets/projects/eunisite.png';
import Movie from '../assets/projects/movie.png';
import Reactquiz from '../assets/projects/reactquiz.png';
import Snowcrash from '../assets/projects/snowcrash.png';
import Ssg from '../assets/projects/ssg.png';

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
                  to my first Defcon as a 13 year old and I love Linux like an
                  old friend. I took my passion for phone phreaking and system
                  exploits to studying Information Networking and
                  Telecommunications in college. I now work in the Bay Area, for
                  the art e-commerce website, Redbubble, specifically in the
                  field of Intellectual Property and Licensing.
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
                <img className="Project-image" src={Ssg} alt="Project 1" />

                <h3>Static Site Generator</h3>
                <p>
                  Using the Django web framework I built this static site
                  generator using Python, CSS, HTML and Jinja2. Run build.py and
                  combine your content with templates to create static pages.
                </p>
                <Link to="/ssg" className="button">
                  Learn More
                </Link>
              </li>
              <li>
                <img className="Project-image" src={Movie} alt="Project 2" />
                <h3>AyeeEmmDeeBee To-Do Watchlist</h3>
                <p>
                  Built using the MERN stack. This app fetches in data from The
                  Movie DB API and allows you to save your additions to a watch
                  list via MongoDB.
                </p>
                <Link to="/movie" className="button">
                  Learn More
                </Link>
              </li>
              <li>
                <img
                  className="Project-image"
                  src={Snowcrash}
                  alt="Project 3"
                />
                <h3>Snowcrash Chapters CSS</h3>
                <p>
                  Having been obsessed with Snow Crash I wanted to practice my
                  CSS to create a fun way to stylize the first chapter of my
                  favorite Cyber Punk novel by Neal Stephenson.
                </p>
                <Link to="/snowcrash" className="button">
                  Learn More
                </Link>
              </li>
            </ul>

            <ul className="features">
              <li>
                <img
                  className="Project-image"
                  src={Groupmeet}
                  alt="Project 3"
                />
                <h3>Group Meet</h3>
                <p>
                  This is a Django app that I worked on with friends. I did the
                  front end and we put a lot of business logic into the Jinja2
                  templating so I'm working to refactor it into the Model where
                  it belongs. :)
                </p>
                <Link to="/groupmeet" className="button">
                  Learn More
                </Link>
              </li>
              <li>
                <img
                  className="Project-image"
                  src={Reactquiz}
                  alt="Project 3"
                />
                <h3>Cyberpunk Quiz in React</h3>
                <p>
                  Using React I wanted to create an app that would help me
                  understand how state is passed around the front end. I thought
                  what better way than to create a quiz to test your Cyberpunk
                  knowledge.
                </p>
                <Link to="/cyberpunkquiz" className="button">
                  Learn More
                </Link>
              </li>
              <li>
                <img className="Project-image" src={Euni} alt="Project 3" />
                <h3>UX Portfolio</h3>
                <p>
                  Built for the all mighty UX writer and designer, Euni G. This
                  is a work in progress! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Illo minima officia harum necessitatibus,
                  veniam ex suscipit corporis sint.
                </p>
                <Link to="/euni" className="button">
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
