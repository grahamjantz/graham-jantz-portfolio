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
        <button 
        href="https://www.linkedin.com/in/graham-jantz-b87921145/"
        target="_blank"
        style={buttonStyle}
        ><FaLinkedinIn/></button>
        <button 
        href="mailto:grahammrjantz@gmail.com"
        style={buttonStyle}
        ><FaEnvelope/></button>
        <button 
        href="https://github.com/grahamjantz"
        target="_blank"
        style={buttonStyle}
        ><FaGithub/></button>
    </footer>
  )
}

export default Footer