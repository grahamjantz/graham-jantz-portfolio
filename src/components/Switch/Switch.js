import { React, useState } from 'react'
import './Switch.css'

const Switch = () => {
    const [themeSwitchPosition, setThemeSwitchPosition] = useState('5000px');

    const handleClick = () => {
      console.log('hi')
      setThemeSwitchPosition('500px')
    }

  return (
    <div>
        <div className='theme-switch' onClick={handleClick}>
            <div 
              className='switch' 
              style={{ marginLeft: {themeSwitchPosition} }}>
            </div>
        </div>
    </div>
  )
}

export default Switch