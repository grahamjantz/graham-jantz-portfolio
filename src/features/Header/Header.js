import React, { useState } from 'react'
import { selectTheme } from '../../AppSlice'
import { useSelector } from 'react-redux'

import './Header.css'

import Switch from '../Switch/Switch'

const Header = () => {

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
  }

  return (
    <div className='header-div' style={headerDivStyle}>
      <div className={`nav-menu ${sideNavActive === false ? '' : 'active'}` } onClick={handleClickNavMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <header className={sideNavActive === true ? 'active' : ''} style={headerStyle}>
        <ul>
          <li>GJ</li>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
        </ul>
      </header>
      <Switch />
    </div>
  )
}

export default Header