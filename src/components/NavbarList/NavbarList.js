import React from 'react'
import Button from '../Button/Button'
import './NavbarList.css'
import Switch from '../Switch/Switch'

const NavbarList = ({ renderHomePage, renderPortfolioPage, renderAboutPage, renderContactPage, toggleTheme, changeTheme }) => {

  return (
    <div className='navbar-list'>
        <Button text='home' handleClick={renderHomePage}/>
        <Button text='portfolio' handleClick={renderPortfolioPage}/>
        <Button text='about' handleClick={renderAboutPage}/>
        <Button text='contact' handleClick={renderContactPage}/>
        <Switch toggleTheme={toggleTheme} changeTheme={changeTheme}/>
    </div>
  )
}

export default NavbarList
