import React from 'react'
import './Switch.css'



const Switch = ({ toggleTheme, switchButtonPosition, themeBoxShadow1, themeBoxShadow2, switchClass }) => {

  return (
    <div>
        <div 
          onClick={toggleTheme}
          style={{
            height: '30px',
            width: '60px',
            backgroundColor: themeBoxShadow2,
            borderRadius: '24px',
            display: 'flex',
            alignItems: 'center',
            boxShadow: `-3px -3px 7px ${themeBoxShadow1}, 
          3px 3px 5px ${themeBoxShadow2}`
          }}  
        >
          <div
            className={`switch-button ${switchClass}`}>
          </div>
        </div>
    </div>
  )
}

export default Switch;