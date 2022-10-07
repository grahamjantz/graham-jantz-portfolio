import React from 'react'
import './Switch.css'
// import { slideOutLeft, slideOutRight } from 'react-animations'
import styled/*, { keyframes }*/ from 'styled-components'

const Switch = ({ toggleTheme, themeBoxShadow1, themeBoxShadow2, switchClass, slide }) => {

  // const slideAnimation = keyframes`${slide}`;
  // const StyledSlideDiv = styled.div`
  //   animation: ${slideAnimation} .8s;
  // `;

  const StyledSwitch = styled.div`
    height: 22px;
    width: 22px;
    background-color: #ffffffb2;
    border-radius: 24px;
    margin-left: 4px;
    z-index: 10;
    transition: all 0.8s ease;
    
    &.active{
      transform: translateX(${slide});
    }
  `;

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
          //   boxShadow: `-3px -3px 7px ${themeBoxShadow1}, 
          // 3px 3px 5px ${themeBoxShadow2}`
          }}  
        >
          <StyledSwitch
            className={`switch-button ${switchClass}`}>
          </StyledSwitch>
        </div>
    </div>
  )
}

export default Switch;