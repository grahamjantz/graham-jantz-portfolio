import React from 'react'
import Button from '../Button/Button'
import './NavbarList.css'
import Switch from '../Switch/Switch'

const NavbarList = ({ renderHomePage, renderPortfolioPage, renderAboutPage, renderContactPage, toggleTheme, themeColor,themeBoxShadow1, themeBoxShadow2, switchClass }) => {

  return (
    <div className='navbar-list'>
        <Button 
          text='home' 
          href="#"
          handleClick={renderHomePage} 
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Button 
          text='portfolio' 
          href="#portfolio"
          handleClick={renderPortfolioPage} 
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Button 
          text='about' 
          href="#about"
          handleClick={renderAboutPage} 
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Button 
          text='contact' 
          href="#contact"
          handleClick={renderContactPage} 
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Switch 
          toggleTheme={toggleTheme} 
          switchClass={switchClass}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}
          />
    </div>
  )
}

export default NavbarList
