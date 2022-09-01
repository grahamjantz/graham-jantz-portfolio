import React from 'react'
import styled  from "@emotion/styled"
// import './Switch.css'



const Switch = ({ toggleTheme, switchButtonPosition, themeBoxShadow1, themeBoxShadow2 }) => {
  

  const ThemeSwitch = styled.div`
    height: 30px;
    width: 60px;
    background-color: ${themeBoxShadow2};
    border-radius: 24px;
    display: flex;
    align-items: center;
    box-shadow: -3px -3px 7px ${themeBoxShadow1}, 
  3px 3px 5px ${themeBoxShadow2};
  &:active {
    box-shadow: inset 3px 3px 5px ${themeBoxShadow2},
            inset -3px -3px 7px ${themeBoxShadow1};
  }
  `;
  const SwitchButton = styled.span`
      height: 22px;
      width: 22px;
      background-color: #ffffffb2;
      border-radius: 24px;
      margin-left: ${switchButtonPosition};
      z-index: 10;
  `;
  return (
    <div>
        <ThemeSwitch onClick={toggleTheme}>
          <SwitchButton ></SwitchButton>
        </ThemeSwitch>
    </div>
  )
}

export default Switch;