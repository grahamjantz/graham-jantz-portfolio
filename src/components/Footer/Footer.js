import React from 'react'
import Button from '../Button/Button'
import './Footer.css'
import { FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa";

const Footer = ({ changeTheme, toggleTheme }) => {
  return (
    <div className='component'>
        <div className='footer-nav'>
          <Button icon = {<FaLinkedinIn/>} />
          <Button icon = {<FaEnvelope/>}/>
          <Button icon = {<FaGithub/>}/>
        </div>
    </div>
  )
}

export default Footer