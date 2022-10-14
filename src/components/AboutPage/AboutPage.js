import styled from '@emotion/styled'
import React from 'react'
import './AboutPage.css'
// import SkillList from '../SkillList/SkillList'
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb"
import { FiDatabase } from "react-icons/fi";
import heroDrums from '../../images/Drums-Graham.jpg'

const AboutPage = ({ themeBluRec, themeOrgSqu, themeBody }) => {
  const StyledList = styled.div`
    background-color: ${themeBody};
    color: ${themeBluRec}
  `;

  const StyledAboutHeroImage = styled.img`
    box-shadow: 0px 0px 0px 8px ${themeBody}, 0px 0px 0px 10px ${themeOrgSqu};
  `;

  return (
      <div className="about-container" id="about">
        <h2 className="about-hero-section-title about-margin">About Me</h2>
        <StyledAboutHeroImage className="about-hero-image" src={heroDrums}/>
        <div className="about-bio">
          <p className="bio about-margin">I am a Front End Developer specializing in React, and JavaScript. During my time as a developer I have created several projects such as: A PokeDex using the PokeAPI, a static wedding website acting as a landing page for guests to get info, view the registry, and rsvp, as well as several smaller projects intended as practice opportunities for learning new skills. 
          {/*I am a trained musician looking to change careers and become a Front-End Web Developer! I have a degree in music from the University of Lethbridge and Diploma in Percussion Studies from Red Deer College.*/}</p> 
          <p className="bio about-margin">
          In addition to my main focuses, I have explored additional topics including: Node.js, Cypress, SQL, PostgreSQL, C, Vue.js, Phaser.js, and Cyber Security to name a few. 
          </p>
          <p className="bio about-margin">My previous professional experience has given me invaluable administration skills such as: scheduling, communication, and customer service. 
            
          {/* I began my developer studies in May 2022 and have been loving it. I enjoy a good puzzle and solving problems, so I thoroughly enjoy the challenge of web development.*/}
          </p> 
          <p className="bio about-margin">I possess a B.A. degree in music from the University of Lethbridge and a Music Diploma in percussion from Red Deer Polytechnic. In these programs I learned valuable skills such as: time management, project coordination, and collaborating with a team.

          {/* Currently I am working through Codecademy's Front End Development Career Path. But I have also completed freeCodeCamps Responsive Web Design Certificate. */}
          </p>
          {/* <p className="bio about-margin">I look forward to an exciting career in web development, please reach out to me if you'd like to connect!</p> */}
        </div> 
        <ul className="about-section-skills">
          {/* <SkillList /> */}
          <li id="html">
            <StyledList>
              <FaHtml5 className='skill-icon'/>
            </StyledList>
            HTML
          </li>
          <li id="css">
            <StyledList>
              <FaCss3Alt className='skill-icon'/>
            </StyledList>
            CSS
          </li>
          <li id="java">
            <StyledList>
              <TbBrandJavascript className="skill-icon"/>
            </StyledList>
            JavaScript
          </li>
          <li id="react">
            <StyledList>
              <FaReact className='skill-icon'/>
            </StyledList>
            React
          </li>
          <li id="git">
            <StyledList>
              <FaGitAlt className='skill-icon' />
            </StyledList>
            Git / GitHub
          </li>
          <li id="SQL">
            <StyledList>
              <FiDatabase className='skill-icon' />
            </StyledList>
            SQL
          </li>
        </ul>
      </div>
  )
}

export default AboutPage