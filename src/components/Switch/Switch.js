import React from 'react'
import styled  from "@emotion/styled"
// import './Switch.css'



const Switch = ({ changeTheme, toggleTheme, switchButtonPosition, themeBody }) => {
  

  const ThemeSwitch = styled.div`
    height: 24px;
    width: 48px;
    background-color: ${themeBody};
    border-radius: 24px;
    display: flex;
    align-items: center;
  `;
  const SwitchButton = styled.span`
      height: 18px;
      width: 18px;
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