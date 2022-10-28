import React, { useState } from 'react'
import './Header.css'
import NavbarList from '../NavbarList/NavbarList'
import NavButton from '../Button/NavButton'
import SideSwitch from '../SideSwitch/SideSwitch'
import SideNavbarList from '../SideNavbarList/SideNavbarList'

const Header = ({ toggleTheme, themeBody, themeColor, themeBoxShadow1, themeBoxShadow2, themeBoxShadow3, switchClass, slide, switchButtonPosition, bluRect, glass,glassBorder }) => {

  const [sideNavClass, setSideNavClass] = useState('inactive');

  const slideIn = () => {
    sideNavClass === 'inactive' ? setSideNavClass('active') : setSideNavClass('inactive')
  }

  return (
    <div className='component'>
          <div 
            id="navMenu" 
            className={sideNavClass} 
            onClick={() => {
              slideIn();
            }}>
            <span style={{backgroundColor: themeColor}}></span>
            <span style={{backgroundColor: themeColor}}></span>
            <span style={{backgroundColor: themeColor}}></span>
          </div>
        <header className='nav' style={{background: glass, border: glassBorder}}>
          <nav className='navbar'>
            <NavButton 
              text='GJ' 
              to="home"
              themeColor={themeColor}
              themeBoxShadow1={themeBoxShadow1}
              themeBoxShadow2={themeBoxShadow2}
              bluRect={bluRect}/>
            <NavbarList 
              toggleTheme={toggleTheme} 
              themeColor={themeColor}
              themeBoxShadow1={themeBoxShadow1}
              themeBoxShadow2={themeBoxShadow2}
              switchClass={switchClass}
              slide={slide}
              bluRect={bluRect}
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
        <SideNavbarList 
            toggleTheme={toggleTheme} 
            themeColor={themeColor}
            themeBody={themeBody}
            themeBoxShadow1={themeBoxShadow1}
            themeBoxShadow2={themeBoxShadow2}
            themeBoxShadow3={themeBoxShadow3}
            sideNavClass={sideNavClass}
            slideIn={slideIn}
          />
    </div>
  )
}

export default Header

