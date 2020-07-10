import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Waypoint from 'react-waypoint';
import Layout from '../components/layout';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Keegpic from '../assets/images/keeg2pic.jpg';
import Groupmeet from '../assets/projects/login_demo.png';
import Euni from '../assets/projects/eunisite.png';
import Movie from '../assets/projects/movie.png';
import Reactquiz from '../assets/projects/reactquiz.png';
import Snowcrash from '../assets/projects/snowcrash.png';
import Ssg from '../assets/projects/ssg.png';
import Photographysite from '../assets/projects/photographysite.png';
import NorrisZone from '../assets/projects/norriszone.png';
import MovieShuffle from '../assets/projects/MovieShuffle.png';
import Fade from 'react-reveal/Fade';
import '../assets/css/style.css';
import './index.css';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false,
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
                  <h2>Hello! 👋</h2>
                </header>
                <Fade up>
                  <p>
                    I'm an experienced Software Developer and Content Operations Manager, with a passion for building great
                    user-focused products and developing wonderful stakeholder
                    relationships. I have a deep history of working in
                    e-commerce, specifically multi-sided marketplaces.
                  </p>
                </Fade>
                <ul className="actions">
                  <li></li>
                </ul>
              </div>
              <Fade left>
                <span className="image">
                  <img src={Keegpic} alt="" />
                </span>
              </Fade>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>

            <Fade up>
              <ul className="features">
                <li>
                  <img className="Project-image" src={Movie} alt="Project 2" />
                  <h3>AaayeMDB Movie Watchlist</h3>
                  <p>
                    Built using the MERN stack. This app fetches in data from
                    The Movie DB API and allows you to save your additions to a
                    watch list via MongoDB.
                  </p>
                  <Link to="/movie" className="button">
                    Learn More
                  </Link>
                </li>

                <li>
                  <img
                    className="Project-image"
                    src={Reactquiz}
                    alt="Project 3"
                  />
                  <h3>Cyberpunk Quiz</h3>
                  <p>
                    Using React I wanted to create an app that would help me
                    understand how state is passed around the front end. I
                    thought what better way than to create a quiz to test your
                    Cyberpunk knowledge.
                  </p>
                  <Link to="/cyberpunkquiz" className="button">
                    Learn More
                  </Link>
                </li>

                <li>
                  <img
                    className="Project-image"
                    src={MovieShuffle}
                    alt="Project 3"
                  />
                  <h3>MovieShuffle</h3>
                  <p>
                  Another passion project of mine. I created MovieShuffle to end the countless hours that my partner and I would spend debating on what to watch. Use MoveShuffle to enter your movie options and do the work of choosing for you.
                  </p>
                  <Link to="/movieshuffle" className="button">
                    Learn More
                  </Link>
                </li>

                <li>
                  <img
                    className="Project-image"
                    src={Photographysite}
                    alt="Project 3"
                  />
                  <h3>Keegan Helmbrecht Photography</h3>
                  <p>
                    This is my photography website. I host a lot of my travel
                    pictures on here and abstract images that I've taken over
                    the years. It also has lots of portrait pictures that I've
                    done of my collegues.
                  </p>
                  <Link to="/khphotography" className="button">
                    Learn More
                  </Link>
                </li>

                <li>
                  <img
                    className="Project-image"
                    src={NorrisZone}
                    alt="Project 3"
                  />
                  <h3>Chuck Norris Joke Zone</h3>
                  <p>
                    What's more fun than building something silly? To practice
                    my data fetching skills I built a little Chuck Norris Fan
                    Site.
                    <br/>
                    <br/>
                    Warning: it's ridiculous but was a treat to create.{' '}
                  </p>
                  <Link to="/norriszone" className="button">
                    Learn More
                  </Link>
                </li>

                <li>
                  <img
                    className="Project-image"
                    src={Groupmeet}
                    alt="Project 1"
                  />

                  <h3>Group Meet</h3>
                  <p>
                    My first real Django project. The goal of this app is to connect coworkers with similar hobbies and interests. Front end was put together using Django's templating and the database is PostgreSQL.
                  </p>
                  <Link to="/groupmeet" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>

              <ul className="features">
                <li>
                  <img className="Project-image" src={Ssg} alt="Project 3" />
                  <h3>Static Site Generator</h3>
                  <p>
                    Using the Django web framework I built this static site
                    generator using Python, CSS, HTML and Jinja2. Run build.py
                    and combine your content with templates to create static
                    pages.
                  </p>
                  <Link to="/ssg" className="button">
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

                <li>
                  <img className="Project-image" src={Euni} alt="Project 3" />
                  <h3>UX Portfolio</h3>
                  <p>
                    A local UX writer and designer portfolio. Eunice has worked
                    on many different projects for Redbubble and Google. This
                    portfolio is a work in progress and will be live soon! :)
                  </p>
                  <Link to="/euni" className="button">
                    Learn More
                  </Link>
                </li>
              </ul>
            </Fade>

            <footer className="major">
              <ul className="actions">
                <li></li>
              </ul>
            </footer>
          </section>
          <contact>
            <section id="second" className="main"></section>
          </contact>
        </div>
      </Layout>
    );
  }
}

export default Index;
