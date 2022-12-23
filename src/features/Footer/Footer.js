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
        <button>
          <a style={buttonStyle} href="https://www.linkedin.com/in/graham-jantz-b87921145/" target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
        </button>
        <button>
          <a style={buttonStyle} href="mailto:grahammrjantz@gmail.com" ><FaEnvelope/></a>
        </button>
        <button>
          <a style={buttonStyle} href="https://github.com/grahamjantz" target="_blank" rel="noreferrer"><FaGithub/></a>
        </button>
    </footer>
  )
}

export default Footer