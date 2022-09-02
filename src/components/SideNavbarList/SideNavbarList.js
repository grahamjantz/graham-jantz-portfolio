import React, { useState} from 'react'
import Button from '../Button/Button'
import './SideNavbarList.css'

const SideNavbarList = ({ themeBody, themeColor,themeBoxShadow1, themeBoxShadow2, themeBoxShadow3 }) => {

  const [sideNavClass, setSideNavClass] = useState('inactive');

  const slideIn = () => {
    sideNavClass === 'inactive' ? setSideNavClass('active') : setSideNavClass('inactive')
  }

  return (
    <div>
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
    <div 
      className={`side-navbar-list ${sideNavClass}`}
      style={{
        backgroundColor: themeBody,
        boxShadow: `-3px -3px 7px ${themeBoxShadow3}, 3px 3px 5px ${themeBoxShadow3}`,
        zIndex: 100
        }}>
        <Button 
          text='home' 
          href="#home"
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}
          handleClick={slideIn}/>
        <Button 
          text='portfolio' 
          href="#portfolio"
          handleClick={slideIn} 
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Button 
          text='about' 
          href="#about"
          handleClick={slideIn} 
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Button 
          text='contact' 
          href="#contact"
          handleClick={slideIn} 
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
    </div>
    </div>
  )
}

export default SideNavbarList
