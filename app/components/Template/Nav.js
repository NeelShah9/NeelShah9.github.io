import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
                <img src="https://i.imgur.com/Tz5X1j3.jpeg" alt="" />
      </Link>
      <header>
        <h2>Neel Shah</h2>
        <strong><a href="mailto:neellalitshah9@gmail.com">neellalitshah9@gmail.com</a></strong>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
                I am a <a href="https://www.northeastern.edu/">Northeastern University</a> Information Systems Graduate student, <a href="https://mu.ac.in//">Mumbai University</a> Alumni, and a Computer Scientist.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/contact" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  </section>
);

export default Nav;