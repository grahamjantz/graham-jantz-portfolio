import styled from '@emotion/styled'
import React from 'react'
import './Button.css'
import { Link } from 'react-scroll'


const NavButton = ({ text, handleClick, themeColor, icon, offset, target, visibility, bluRect, to }) => {

  
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
  
  // const  StyledLink = styled.a`
  // color: ${themeColor};
  // height: 100%;
  // }
  // `;
  
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
        <Link 
          onClick={handleClick}
          target={target}
          to={`${to}`} 
          spy={true} 
          smooth={true} 
          offset={offset} 
          duration={500}
          activeClass='active'
          style={{
            color: themeColor,
            height: '100%'
          }}
        >
        {icon}
        {text}
        </Link>
      </StyledButton>
  )
}

export default NavButton