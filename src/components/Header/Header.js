import React from 'react'
import './Header.css'
import NavbarList from '../NavbarList/NavbarList'
import Button from '../Button/Button'
import SideSwitch from '../SideSwitch/SideSwitch'

const Header = ({ toggleTheme, themeBody, themeColor, themeBoxShadow1, themeBoxShadow2, switchClass, slide, switchButtonPosition }) => {

  return (
    <div className='component'>
        <header className='nav'>
          <nav className='navbar'>
            <Button 
              text='GJ' 
              href="#"
              themeColor={themeColor}
              themeBoxShadow1={themeBoxShadow1}
              themeBoxShadow2={themeBoxShadow2}/>
            <NavbarList 
              toggleTheme={toggleTheme} 
              themeColor={themeColor}
              themeBoxShadow1={themeBoxShadow1}
              themeBoxShadow2={themeBoxShadow2}
              switchClass={switchClass}
              slide={slide}
              />
          </nav>
          <SideSwitch 
              toggleTheme={toggleTheme} 
              switchClass={switchClass}
              themeBoxShadow1={themeBoxShadow1}
              themeBoxShadow2={themeBoxShadow2}
              className='phone-switch'
              switchButtonPosition={switchButtonPosition}
              slide={slide}
            />
        </header>
    </div>
  )
}

export default Header

