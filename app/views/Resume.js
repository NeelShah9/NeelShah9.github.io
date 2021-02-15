import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';

import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Courses',
];

const Resume = () => (
  <Main>
    <Helmet title="Resume" />
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2><Link to="resume">Resume </Link><Link to="/resume/NeelShahResume.pdf" className="button-download" target="_blank" download>Download</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />

    </article>
  </Main>
);

export default Resume;
