import React from 'react'
import styled from 'styled-components'


const StyledSwitch = styled.div`
  height: 22px;
  width: 22px;
  background-color: #ffffffb2;
  border-radius: 24px;
  margin-left: 4px;
  z-index: 10;
  transition: all 0.8s ease;
  `;

const Switch = ({ toggleTheme, themeBoxShadow1, themeBoxShadow2, switchClass, slide }) => {

  const translate = () => {
    if (switchClass === 'active') {
      return slide
    }
  }


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
            alignItems: 'center'
          }}  
        >
          <StyledSwitch
            className={`switch-button ${switchClass}`}
            style={{ transform: `translateX(${translate()})` }}  
          >
          </StyledSwitch>
        </div>
    </div>
  )
}

export default Switch;