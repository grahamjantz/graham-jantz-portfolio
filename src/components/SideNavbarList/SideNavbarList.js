import React, { useState} from 'react'
import Button from '../Button/Button'
import './SideNavbarList.css'

const SideNavbarList = ({ renderHomePage, renderPortfolioPage, renderAboutPage, renderContactPage, themeBody, themeColor,themeBoxShadow1, themeBoxShadow2 }) => {

  const [sideNavClass, setSideNavClass] = useState('inactive');

  return (
    <div>
        <div 
          id="navMenu" 
          className={sideNavClass} 
          onClick={() => {
            sideNavClass === 'inactive' ||
            sideNavClass === '' 
            ? setSideNavClass('active') : setSideNavClass('inactive')
        }}>
          <span style={{backgroundColor: themeColor}}></span>
          <span style={{backgroundColor: themeColor}}></span>
          <span style={{backgroundColor: themeColor}}></span>
        </div>
    <div 
      className={`side-navbar-list ${sideNavClass}`}
      style={{backgroundColor: themeBody}}>
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
    </div>
    </div>
  )
}

export default SideNavbarList
