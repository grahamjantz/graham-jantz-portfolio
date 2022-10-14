import React from 'react'
import styled  from "@emotion/styled"

const SideSwitch = ({ toggleTheme, switchButtonPosition, themeBoxShadow1, themeBoxShadow2 }) => {
  

  const ThemeSwitch = styled.div`
    background-color: ${themeBoxShadow2};
  `;

  const SwitchButton = styled.span`
      height: 22px;
      width: 22px;
      background-color: #ffffffb2;
      border-radius: 24px;
      margin-left: ${switchButtonPosition};
  `;
  return (
    <div >
        <ThemeSwitch onClick={toggleTheme} className='side-switch'>
          <SwitchButton ></SwitchButton>
        </ThemeSwitch>
    </div>
  )
}

export default SideSwitch;