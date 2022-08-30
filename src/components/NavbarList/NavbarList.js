import React from 'react'
import Button from '../Button/Button'
import './NavbarList.css'
import Switch from '../Switch/Switch'

const NavbarList = ({ renderHomePage, renderPortfolioPage, renderAboutPage, renderContactPage, toggleTheme, changeTheme, themeColor,themeBoxShadow1, themeBoxShadow2, switchButtonPosition, themeBody }) => {

  return (
    <div className='navbar-list'>
        <Button 
          text='home' 
          handleClick={renderHomePage} 
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Button 
          text='portfolio' 
          handleClick={renderPortfolioPage} themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Button 
          text='about' 
          handleClick={renderAboutPage} 
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Button 
          text='contact' 
          handleClick={renderContactPage} themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Switch 
          toggleTheme={toggleTheme} 
          changeTheme={changeTheme}
          switchButtonPosition={switchButtonPosition}
          themeBody={themeBody}
          />
    </div>
  )
}

export default NavbarList
