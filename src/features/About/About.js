import React from 'react'
import './About.css'

import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb"

import { useSelector } from 'react-redux';
import { selectTheme } from '../../AppSlice';

import heroDrums from '../../images/Drums-Graham.jpeg'

const About = () => {

    const theme = useSelector(selectTheme)

    const skillStyle = {
        color: theme.square1
    }

    const imgStyle = {
      boxShadow: `0px 0px 0px 8px ${theme.backgroundColor}, 0px 0px 0px 10px ${theme.square1}`
    }

  return (
    <div className="about-container about" id="about">
        <h2>About Me</h2>
        <img src={heroDrums} alt='drum hero' style={imgStyle}/>
        <div className="about-bio">
          <p className="bio">I am a self taught Front End Developer specializing in React, Redux, and JavaScript. Using these skills, I have created several projects such as: a Monopoly money tracking web app, the official website for the band Waterfront, a PokeDex using the PokeAPI, a static wedding website acting as a landing page for guests to get info, view the registry, and rsvp, as well as several smaller projects intended as practice opportunities for learning new skills. 
          {/*I am a trained musician looking to change careers and become a Front-End Web Developer! I have a degree in music from the University of Lethbridge and Diploma in Percussion Studies from Red Deer College.*/}</p> 
          <p className="bio">
          In addition to my main focuses, I have explored additional topics including: Python, Express.js, Firebase/Firestore, Node.js, SQL, PostgreSQL, C, Vue.js, Phaser.js, and Cyber Security to name a few. 
          </p>
          <p className="bio">My previous professional experience has given me invaluable administration skills such as: scheduling, communication, and customer service. 
            
          {/* I began my developer studies in May 2022 and have been loving it. I enjoy a good puzzle and solving problems, so I thoroughly enjoy the challenge of web development.*/}
          </p> 
          <p className="bio">I possess a B.A. degree in from the University of Lethbridge and a Diploma from Red Deer Polytechnic. In these programs I learned valuable skills such as: time management, project coordination, and collaborating with a team.

          {/* Currently I am working through Codecademy's Front End Development Career Path. But I have also completed freeCodeCamps Responsive Web Design Certificate. */}
          </p>
          {/* <p className="bio">I look forward to an exciting career in web development, please reach out to me if you'd like to connect!</p> */}
        </div> 
        <ul className="about-section-skills">
          {/* <SkillList /> */}
          <li id="react"><FaReact className='skill-icon' style={skillStyle}/>React</li>
          <li id="redux"><SiRedux className='skill-icon' style={skillStyle}/>Redux</li>
          <li id="html"><FaHtml5 className='skill-icon' style={skillStyle}/>HTML</li>
          <li id="css"><FaCss3Alt className='skill-icon' style={skillStyle}/>CSS</li>
          <li id="java"><TbBrandJavascript className="skill-icon" style={skillStyle}/>JavaScript</li>
          <li id="git"><FaGitAlt className='skill-icon' style={skillStyle}/>Git / GitHub</li>
          {/* <li id="SQL"><FiDatabase className='skill-icon' />SQL</li> */}
        </ul>
      </div>
  )
}

export default About