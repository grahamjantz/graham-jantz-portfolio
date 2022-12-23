import React, { useEffect, useState } from 'react'
import { selectTheme } from '../../AppSlice'
import { useSelector } from 'react-redux'

import './Header.css'

import Switch from '../Switch/Switch'
import { Link } from 'react-scroll'

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
        style={windowSize.innerWidth < 1000 ? headerStyle : {}}>
        <ul>
          <li>
            <Link
              to='home' 
              spy={true} 
              smooth={true} 
              offset={0} 
              duration={500}
              activeClass='active'
              onClick={handleClickNavMenu}
            >
              <button style={headerButtonStyle}>GJ</button>
            </Link>
          </li>
          <li>
            <Link
              to='home' 
              spy={true} 
              smooth={true} 
              offset={0} 
              duration={500}
              activeClass='active'
              onClick={handleClickNavMenu}
            >
              <button style={headerButtonStyle}>Home</button>
            </Link>
          </li>
          <li>
            <Link
              to='about' 
              spy={true} 
              smooth={true} 
              offset={-50} 
              duration={500}
              activeClass='active'
              onClick={handleClickNavMenu}
            >
              <button style={headerButtonStyle}>About</button>
            </Link>
          </li>
          <li>
            <Link
              to='portfolio' 
              spy={true} 
              smooth={true} 
              offset={-50} 
              duration={500}
              activeClass='active'
              onClick={handleClickNavMenu}
            >
              <button 
                style={headerButtonStyle}
                
              >
                  Portfolio
              </button>
            </Link>
          </li>
        </ul>
      </header>
      <Switch />
    </div>
  )
}

export default Header