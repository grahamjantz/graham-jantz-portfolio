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
        color: theme.square1,
        fontWeight: 'lighter'
      }
      
      const imgStyle = {
        boxShadow: `0px 0px 0px 8px ${theme.backgroundColor}, 0px 0px 0px 10px ${theme.square1}`
      }
      
      const aStyle = {
      color: theme.square1,
      textDecoration: 'underline'
    }

  return (
    <div className="about-container about" id="about">
        <h2>About Me</h2>
        <img src={heroDrums} alt='drum hero' style={imgStyle}/>
        <div className="about-bio">
          <p className='bio'>I'm a dedicated professional passionate about front-end development, specializing in technologies like <strong style={skillStyle}>React</strong>, <strong style={skillStyle}>Redux</strong>, and <strong style={skillStyle}>JavaScript</strong>. My journey in this field has led me to create various projects, ranging from a <a href='https://film.grahamjantz.com' style={aStyle}>full-stack Film Catalog app </a>featuring authentication, a firestore database, and user content creation, to <strong style={skillStyle}>user-friendly web apps</strong> tailored for board games like <a href='https://monopoly-money-60c8d.web.app/' style={aStyle}>Monopoly Money</a> and <a href='https://catan.grahamjantz.com/' style={aStyle}>Catan Calculator</a>.
</p>
          <p className='bio'>My commitment to continuous learning extends beyond my primary areas of focus. I've ventured into diverse domains, exploring <strong style={skillStyle}>Node.js</strong>, <strong style={skillStyle}>SQL</strong>, <strong style={skillStyle}>C</strong>, and <strong style={skillStyle}>Cyber Security</strong>, all part of my pursuit of growth and knowledge.</p>
          <p className='bio'>My educational foundation includes a B.A. degree in music from the University of Lethbridge and a Music Diploma in percussion from Red Deer Polytechnic. These academic experiences have instilled invaluable skills such as <strong style={skillStyle}>effective time management</strong>, <strong style={skillStyle}>project coordination</strong>, and <strong style={skillStyle}>adept teamwork</strong>.</p>
          <p className='bio'>You can explore my portfolio and discover more about my work below.</p>
          <p className='bio'>Reach out to me on<a style={aStyle} href='https://github.com/grahamjantz'> GitHub</a> or connect on <a style={aStyle} href='https://www.linkedin.com/in/graham-jantz-b87921145/'>LinkedIn</a> to chat further about our shared interests and potential collaborations.</p>
        
        </div> 
        <ul className="about-section-skills">
          <li id="react"><FaReact className='skill-icon' style={skillStyle}/>React</li>
          <li id="java"><TbBrandJavascript className="skill-icon" style={skillStyle}/>JavaScript</li>
          <li id="redux"><SiRedux className='skill-icon' style={skillStyle}/>Redux</li>
          <li id="html"><FaHtml5 className='skill-icon' style={skillStyle}/>HTML</li>
          <li id="css"><FaCss3Alt className='skill-icon' style={skillStyle}/>CSS</li>
          <li id="git"><FaGitAlt className='skill-icon' style={skillStyle}/>Git / GitHub</li>
        </ul>
      </div>
  )
}

export default About