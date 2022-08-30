import styled from '@emotion/styled'
import React from 'react'
import './Button.css'

const Button = ({ text, handleClick, themeColor, icon, themeBoxShadow1, themeBoxShadow2, href, target }) => {
  const  StyledLink = styled.a`
  color: ${themeColor};
  `;

  const StyledButton = styled.button`
    box-shadow: -3px -3px 7px ${themeBoxShadow1}, 
  3px 3px 5px ${themeBoxShadow2};

  &.nav-btn:active {
    box-shadow: inset 3px 3px 5px ${themeBoxShadow2},
            -3px -3px 7px ${themeBoxShadow1};
  }
  `;

  return (
    <div>
        <StyledButton 
            onClick={handleClick}
            className='nav-btn'>
          <StyledLink href={href} target={target}>
          {icon}
          {text}
          </StyledLink>
        </StyledButton>
    </div>
  )
}

export default Button