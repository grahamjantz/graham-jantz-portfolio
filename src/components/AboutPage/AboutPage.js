import styled from '@emotion/styled'
import React from 'react'
import './AboutPage.css'

const AboutPage = ({ themeBluRec, themeOrgSqu, themeBody }) => {
  const StyledList = styled.li`
    background-color: ${themeOrgSqu};
  `;

  const StyledAboutHeroImage = styled.div`
    box-shadow: 0px 0px 0px 8px ${themeBody}, 0px 0px 0px 15px ${themeBluRec};
  `;

  return (
      <div className="about-container" id="about">
        <h2 className="about-hero-section-title about-margin">About Me</h2>
        <StyledAboutHeroImage className="about-hero-image"/>
        <div className="about-bio">
          <p className="bio about-margin">I am a trained musician looking to change careers and become a Front-End Web Developer! I have a degree in music from the University of Lethbridge and Diploma in Percussion Studies from Red Deer College.</p>
          <p className="bio about-margin">I began my developer studies in May 2022 and have been loving it. I enjoy a good puzzle and solving problems, so I thoroughly enjoy the challenge of web development.</p>
          <p className="bio about-margin">Currently I am working through Codecademy's Front End Development Career Path. But I have also completed freeCodeCamps Responsive Web Design Certificate.</p>
          <p className="bio about-margin">I look forward to an exciting career in web development, please reach out to me if you'd like to connect!</p>
        </div> 
        <ul className="about-section-skills">
          <StyledList id="skills">Skills:</StyledList>
          <StyledList id="html">HTML</StyledList>
          <StyledList id="css">CSS</StyledList>
          <StyledList id="java">JavaScript</StyledList>
          <StyledList id="react">React</StyledList>
          <StyledList id="git">Git / GitHub</StyledList>
        </ul>
      </div>
  )
}

export default AboutPage