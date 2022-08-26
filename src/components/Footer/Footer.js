import React from 'react'
import Button from '../Button/Button'
import Switch from '../Switch/Switch';
import './Footer.css'
import { FaLinkedinIn, FaEnvelope, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='component'>
      <div className='footer-container'>
        <Switch />
        <div className='footer-nav'>
          <Button text = {FaLinkedinIn()} />
          <Button text = {FaEnvelope()}/>
          <Button text = {FaGithub()}/>
        </div>
      </div>
    </div>
  )
}

export default Footer