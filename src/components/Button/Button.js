import styled from '@emotion/styled'
import React from 'react'
import './Button.css'


const Button = ({ text, handleClick, themeColor, icon, href, target, visibility, bluRect }) => {

  
  const StyledButton = styled.button`
  border-color: ${themeColor};
  visibility: ${visibility};
  
  &.nav-btn:hover {
    border-bottom: 2px solid ${bluRect};
  }
  &.nav-btn.active {
    border-bottom: 2px solid ${bluRect};
  }
  `;
  
  const  StyledLink = styled.a`
  color: ${themeColor};
  height: 100%;
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
      className='nav-btn'
      >
        <StyledLink 
          href={href}
          onClick={handleClick}
          target={target}
          activeClass='active'
          style={{
            color: themeColor,
            height: '100%'
          }}
        >
        {icon}
        {text}
        </StyledLink>
      </StyledButton>
  )
}

export default Button