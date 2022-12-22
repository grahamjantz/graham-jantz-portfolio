import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../AppSlice.js'

import { lightTheme, darkTheme } from '../../themes.js'

import './Switch.css'

const Switch = () => {

  const dispatch = useDispatch()

  const [switchActive, setSwitchActive] = useState(false);
  
  useEffect(() => {
    const active = localStorage.getItem('switch-active')
    console.log(active)
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

  return (
    <div className={`switch ${switchActive === true ? 'active' : ''}`} onClick={handleClickSwitch}>
      <span></span>
    </div>
  )
}

export default Switch