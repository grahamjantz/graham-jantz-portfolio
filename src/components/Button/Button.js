import styled from '@emotion/styled'
import React from 'react'
import './Button.css'

const Button = ({ text, handleClick, themeColor, icon, themeBoxShadow1, themeBoxShadow2, href, target, display, bluRect }) => {

  const  StyledLink = styled.a`
  color: ${themeColor};
  height: 100%;
  `;

  const StyledButton = styled.button`
    border-radius: 50px;
    border: 1px solid ${themeColor};

   &.nav-btn:hover {
    border-bottom: 2px solid ${bluRect};
   }
  `;

  // box-shadow: -3px -3px 7px ${themeBoxShadow1}, 
  // 3px 3px 5px ${themeBoxShadow2};

  // &.nav-btn:active {
  //   box-shadow: inset 3px 3px 5px ${themeBoxShadow2},
  //           -3px -3px 7px ${themeBoxShadow1};
  // }

  return (
      <StyledButton 
          onClick={handleClick}
          className='nav-btn'>
        <StyledLink href={href} target={target}>
        {icon}
        {text}
        </StyledLink>
      </StyledButton>
  )
}

export default Button