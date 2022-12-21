import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../AppSlice.js'

import { lightTheme, darkTheme } from '../../themes.js'

import './Switch.css'

const Switch = () => {

  const dispatch = useDispatch()

  const [switchActive, setSwitchActive] = useState(false);

  const handleClickSwitch = () => {
    if (switchActive === false) {
      setSwitchActive(true) 
      dispatch(toggleTheme(darkTheme))
    } else {
      setSwitchActive(false)
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