import React from 'react'

import './Footer.css'
import { FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { selectTheme } from '../../AppSlice';

const Footer = () => {

    const theme = useSelector(selectTheme)

    const buttonStyle = {
        color: theme.color,
    }

  return (
    <footer>
        <button style={buttonStyle}>
          <a href="https://www.linkedin.com/in/graham-jantz-b87921145/" target="_blank"><FaLinkedinIn/></a>
        </button>
        <button style={buttonStyle}>
          <a href="mailto:grahammrjantz@gmail.com" ><FaEnvelope/></a>
        </button>
        <button style={buttonStyle}>
          <a href="https://github.com/grahamjantz" target="_blank" ><FaGithub/></a>
        </button>
    </footer>
  )
}

export default Footer