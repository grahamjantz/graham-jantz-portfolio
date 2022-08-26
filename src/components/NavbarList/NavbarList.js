import React from 'react'
import Button from '../Button/Button'
import './NavbarList.css'

const NavbarList = ({ renderHomePage, renderPortfolioPage, renderAboutPage, renderContactPage }) => {

  return (
    <div className='navbar-list'>
        <Button text='home' handleClick={renderHomePage}/>
        <Button text='portfolio' handleClick={renderPortfolioPage}/>
        <Button text='about' handleClick={renderAboutPage}/>
        <Button text='contact' handleClick={renderContactPage}/>
    </div>
  )
}

export default NavbarList
