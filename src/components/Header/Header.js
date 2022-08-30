import React from 'react'
import './Header.css'
import NavbarList from '../NavbarList/NavbarList'
import Button from '../Button/Button'

const Header = ({ renderHomePage, renderPortfolioPage, renderAboutPage, renderContactPage, toggleTheme, changeTheme, themeColor, themeBoxShadow1, themeBoxShadow2,switchButtonPosition, themeBody }) => {
  return (
    <div className='component'>
        <header className='nav'>
          <nav className='navbar'>
            <Button 
              text='GJ' 
              handleClick={renderHomePage} themeColor={themeColor}
              themeBoxShadow1={themeBoxShadow1}
              themeBoxShadow2={themeBoxShadow2}/>
            <NavbarList 
              renderHomePage={renderHomePage}
              renderPortfolioPage={renderPortfolioPage}
              renderAboutPage={renderAboutPage}
              renderContactPage={renderContactPage}
              toggleTheme={toggleTheme} 
              changeTheme={changeTheme}
              themeColor={themeColor}
              themeBody={themeBody}
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

