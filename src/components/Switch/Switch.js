import { React, useState } from 'react'
import styled  from "@emotion/styled"
// import './Switch.css'



const Switch = () => {
  const [switchButtonPosition, setSwitchButtonPosition] = useState('5px');

  const ThemeSwitch = styled.div`
    height: 50px;
    width: 100px;
    background-color: #bebebe;
    border-radius: 50px;
    display: flex;
    align-items: center;
  `;
  const SwitchButton = styled.span`
      height: 40px;
      width: 40px;
      background-color: #ffffffb2;
      border-radius: 50px;
      margin-left: ${switchButtonPosition};
  `;

    const handleClick = (position) => {
      if (switchButtonPosition === '5px') {
        setSwitchButtonPosition('55px')
      } else if (switchButtonPosition === '55px') {
        setSwitchButtonPosition('5px')
      }
    }
  return (
    <div>
        <ThemeSwitch onClick={handleClick}>
          <SwitchButton></SwitchButton>
        </ThemeSwitch>
    </div>
  )
}

export default Switch;