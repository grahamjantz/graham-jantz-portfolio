import React from 'react'
import './Header.css'
import NavbarList from '../NavbarList/NavbarList'
import Button from '../Button/Button'

const Header = ({ renderHomePage, renderPortfolioPage, renderAboutPage, renderContactPage, toggleTheme, themeColor, themeBoxShadow1, themeBoxShadow2, switchButtonPosition }) => {
  return (
    <div className='component'>
        <header className='nav'>
          <nav className='navbar'>
            <Button 
              text='GJ' 
              href="#"
              handleClick={renderHomePage} themeColor={themeColor}
              themeBoxShadow1={themeBoxShadow1}
              themeBoxShadow2={themeBoxShadow2}/>
            <NavbarList 
              renderHomePage={renderHomePage}
              renderPortfolioPage={renderPortfolioPage}
              renderAboutPage={renderAboutPage}
              renderContactPage={renderContactPage}
              toggleTheme={toggleTheme} 
              themeColor={themeColor}
              themeBoxShadow1={themeBoxShadow1}
              themeBoxShadow2={themeBoxShadow2}
              switchButtonPosition={switchButtonPosition}
              />
          </nav>
        </header>
    </div>
  )
}

export default Header

