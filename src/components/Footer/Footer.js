import React from 'react'
import Button from '../Button/Button'
import './Footer.css'
import { FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa";

const Footer = ({ themeBoxShadow1, themeBoxShadow2, themeColor }) => {
  return (
    <div className='component'>
        <div className='footer-nav'>
          <Button 
            href="https://www.linkedin.com/in/graham-jantz-b87921145/"
            target="_blank"
            icon={<FaLinkedinIn/>}
            themeBoxShadow1={themeBoxShadow1}
            themeBoxShadow2={themeBoxShadow2}
            themeColor={themeColor}
          />
          <Button 
            href="mailto:grahammrjantz@gmail.com"
            icon={<FaEnvelope/>}
            themeBoxShadow1={themeBoxShadow1}
            themeBoxShadow2={themeBoxShadow2}
            themeColor={themeColor}
          />
          <Button 
            href="https://github.com/grahamjantz"
            target="_blank"
            icon={<FaGithub/>}
            themeBoxShadow1={themeBoxShadow1}
            themeBoxShadow2={themeBoxShadow2}
            themeColor={themeColor}
          />
        </div>
    </div>
  )
}

export default Footer