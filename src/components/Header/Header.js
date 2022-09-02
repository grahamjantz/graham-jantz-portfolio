import React from 'react'
import './Header.css'
import NavbarList from '../NavbarList/NavbarList'
import Button from '../Button/Button'
import SideSwitch from '../SideSwitch/SideSwitch'

const Header = ({ renderHomePage, renderPortfolioPage, renderAboutPage, renderContactPage, toggleTheme, themeBody, themeColor, themeBoxShadow1, themeBoxShadow2, switchButtonPosition }) => {

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
          <SideSwitch 
              toggleTheme={toggleTheme} 
              switchButtonPosition={switchButtonPosition}
              themeBoxShadow1={themeBoxShadow1}
              themeBoxShadow2={themeBoxShadow2}
              className='phone-switch'
            />
        </header>
    </div>
  )
}

export default Header

