import React, { useEffect, useState } from 'react'
import { selectTheme } from '../../AppSlice'
import { useSelector } from 'react-redux'

import './Header.css'

import Switch from '../Switch/Switch'

const Header = () => {

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);


  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  const theme = useSelector(selectTheme)

  const [sideNavActive, setSideNavActive] = useState(false)

  const handleClickNavMenu = () => {
    sideNavActive === false ? setSideNavActive(true) : setSideNavActive(false)
  }

  const headerStyle = {
    backgroundColor: theme.backgroundColor,
    boxShadow: `0 0 15px ${theme.color}`
  }

  const headerDivStyle = {
    backgroundColor: theme.glass,
    borderColor: theme.glassBorder,
    boxShadow: `0 0 5px ${theme.boxShadow1}`
  }

  const headerButtonStyle = {
    color: theme.color,
  }

  return (
    <div className='header-div' style={headerDivStyle}>
      <div className={`nav-menu ${sideNavActive === false ? '' : 'active'}` } onClick={handleClickNavMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <header 
        className={sideNavActive === true ? 'active' : ''} 
        style={windowSize.innerWidth < 500 ? headerStyle : {}}>
        <ul>
          <li><button style={headerButtonStyle}>GJ</button></li>
          <li><button style={headerButtonStyle}>Home</button></li>
          <li><button style={headerButtonStyle}>About</button></li>
          <li><button style={headerButtonStyle}>Portfolio</button></li>
        </ul>
      </header>
      <Switch />
    </div>
  )
}

export default Header