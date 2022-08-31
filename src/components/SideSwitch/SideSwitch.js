import React from 'react'
import styled  from "@emotion/styled"
// import './Switch.css'



const SideSwitch = ({ toggleTheme, switchButtonPosition, themeBoxShadow1, themeBoxShadow2 }) => {
  

  const ThemeSwitch = styled.div`
    height: 40px;
    width: 70px;
    background-color: ${themeBoxShadow2};
    border-radius: 24px;
    display: flex;
    align-items: center;
    box-shadow: -3px -3px 7px ${themeBoxShadow1}, 
      3px 3px 5px ${themeBoxShadow2};
    display: none;

  &:active {
    box-shadow: inset 3px 3px 5px ${themeBoxShadow2},
            -3px -3px 7px ${themeBoxShadow1};
  }

  @media only screen and (max-width: 650px) {
    display: flex;
  }
  `;
  const SwitchButton = styled.span`
      height: 30px;
      width: 30px;
      background-color: #ffffffb2;
      border-radius: 24px;
      margin-left: ${switchButtonPosition};
  `;
  return (
    <div className='side-switch'>
        <ThemeSwitch onClick={toggleTheme}>
          <SwitchButton ></SwitchButton>
        </ThemeSwitch>
    </div>
  )
}

export default SideSwitch;