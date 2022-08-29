import React from 'react'
import './AboutPage.css'

const AboutPage = () => {
  return (
      <div className="about-container">
        <h1 className="about-hero-section-title about-margin">About Me</h1>
        <div className="about-hero-image"></div>
        <div className="about-bio">
          <p className="bio about-margin">I am a trained musician looking to change careers and become a Front-End Web Developer! I have a degree in music from the University of Lethbridge and Diploma in Percussion Studies from Red Deer College.</p>
          <p className="bio about-margin">I began my developer studies in May 2022 and have been loving it. I enjoy a good puzzle and solving problems, so I thoroughly enjoy the challenge of web development.</p>
          <p className="bio about-margin">Currently I am working through Codecademy's Front End Development Career Path. But I have also completed freeCodeCamps Responsive Web Design Certificate.</p>
          <p className="bio about-margin">I look forward to an exciting career in web development, please reach out to me if you'd like to connect!</p>
        </div> 
        <ul className="about-section-skills">
          <li id="skills">Skills:</li>
          <li id="html">HTML</li>
          <li id="css">CSS</li>
          <li id="java">JavaScript</li>
          <li id="react">React</li>
          <li id="git">Git / GitHub</li>
        </ul>
      </div>
  )
}

export default AboutPage