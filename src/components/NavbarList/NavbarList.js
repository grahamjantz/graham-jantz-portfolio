import React from 'react'
import Button from '../Button/Button'
import './NavbarList.css'
import Switch from '../Switch/Switch'

const NavbarList = ({ toggleTheme, themeColor,themeBoxShadow1, themeBoxShadow2, switchClass, slide }) => {

  return (
    <div className='navbar-list'>
        <Button 
          text='home' 
          href="#"
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Button 
          text='portfolio' 
          href="#portfolio"
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Button 
          text='about' 
          href="#about"
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Button 
          text='contact' 
          href="#contact"
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Switch 
          toggleTheme={toggleTheme} 
          switchClass={switchClass}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}
          slide={slide}
          />
    </div>
  )
}

export default NavbarList
