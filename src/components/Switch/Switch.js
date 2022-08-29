import { React, useState } from 'react'
import styled  from "@emotion/styled"
// import './Switch.css'



const Switch = ({ changeTheme, toggleTheme }) => {
  const [switchButtonPosition, setSwitchButtonPosition] = useState('2px');

  const ThemeSwitch = styled.div`
    height: 24px;
    width: 48px;
    background-color: #bebebe;
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

    const handleClick = () => {
      if (switchButtonPosition === '2px') {
        setSwitchButtonPosition('27px')
      } else if (switchButtonPosition === '27px') {
        setSwitchButtonPosition('2px')
      }
      toggleTheme()
    }
  return (
    <div>
        <ThemeSwitch onClick={handleClick}>
          <SwitchButton ></SwitchButton>
        </ThemeSwitch>
    </div>
  )
}

export default Switch;