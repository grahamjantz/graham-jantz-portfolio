import React from 'react'
import './Button.css'

const Button = ({ text, handleClick}) => {
  return (
    <div>
        <button 
            onClick={handleClick}
            className='nav-btn'>
        {text}
        </button>
    </div>
  )
}

export default Button