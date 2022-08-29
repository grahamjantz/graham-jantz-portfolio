import React from 'react'
import './Header.css'
import NavbarList from '../NavbarList/NavbarList'
import Button from '../Button/Button'

const Header = ({ renderHomePage, renderPortfolioPage, renderAboutPage, renderContactPage, toggleTheme, changeTheme }) => {
  return (
    <div className='component'>
        <header className='nav'>
          <nav className='navbar'>
            <Button text='GJ' handleClick={renderHomePage}/>
            <NavbarList 
              renderHomePage={renderHomePage}
              renderPortfolioPage={renderPortfolioPage}
              renderAboutPage={renderAboutPage}
              renderContactPage={renderContactPage}
              toggleTheme={toggleTheme} 
              changeTheme={changeTheme}
              />
          </nav>
        </header>
    </div>
  )
}

export default Header

