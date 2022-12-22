import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTheme, toggleTheme } from '../../AppSlice.js'

import { lightTheme, darkTheme } from '../../themes.js'

import './Switch.css'

const Switch = () => {

  const dispatch = useDispatch()

  const theme = useSelector(selectTheme)

  const [switchActive, setSwitchActive] = useState(false);
  
  useEffect(() => {
    const active = localStorage.getItem('switch-active')
    if (active === 'dark-theme') {
      setSwitchActive(true)
      dispatch(toggleTheme(darkTheme))
    } else {
      setSwitchActive(false)
      dispatch(toggleTheme(lightTheme))
    }
  }, [dispatch])
  
  const handleClickSwitch = () => {
    if (switchActive === false) {
      setSwitchActive(true) 
      localStorage.setItem('switch-active', 'dark-theme');
      dispatch(toggleTheme(darkTheme))
    } else {
      setSwitchActive(false)
      localStorage.setItem('switch-active', 'light-theme');
      dispatch(toggleTheme(lightTheme))
    }
  }

  const switchStyle = {
    backgroundColor: theme.switchBackgroundColor
  }

  const spanStyle = {
    backgroundColor: theme.switchColor
  }

  return (
    <div className={`switch ${switchActive === true ? 'active' : ''}`} onClick={handleClickSwitch} style={switchStyle}>
      <span style={spanStyle}></span>
    </div>
  )
}

export default Switch