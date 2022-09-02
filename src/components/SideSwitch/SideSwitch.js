import React from 'react'
import styled  from "@emotion/styled"

const SideSwitch = ({ toggleTheme, switchButtonPosition, themeBoxShadow1, themeBoxShadow2 }) => {
  

  const ThemeSwitch = styled.div`
    position: fixed;
    right: 0;
    margin: 20px 15px;
    height: 30px;
    width: 60px;
    background-color: ${themeBoxShadow2};
    border-radius: 24px;
    display: none;
    align-items: center;
    z-index: 100;

  @media only screen and (max-width: 650px) {
    display: flex;
  }
  `;
  const SwitchButton = styled.span`
      height: 22px;
      width: 22px;
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