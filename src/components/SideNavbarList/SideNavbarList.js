import React from 'react'
import Button from '../Button/Button'
import './SideNavbarList.css'
import styled from '@emotion/styled'

const showMenu = (item) => {
  item.style.backgroundColor = 'var(--main-rust)';
  item.style.animation = 'slideIn 1s';
  item.style.top = '0px';
}

const SideNavbarList = ({ renderHomePage, renderPortfolioPage, renderAboutPage, renderContactPage, themeBody, themeColor,themeBoxShadow1, themeBoxShadow2 }) => {

  let classname = 'inactive';

  const StyledSideNavBarList = styled.div`
    background-color: ${themeBody};
    left: -300px;
  `;

  const StyledMenuButton = styled.div`
    position: fixed;  
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 20px;
  `;
  
  const StyledNavSpan = styled.span`
    display: block;
    width: 28px;
    height: 3px;
    border-radius: 9999px;
    background-color: ${themeColor};
  `;

  return (
    <div>
      <StyledMenuButton id="navMenu" className={classname} onClick={() => {
        console.log('hi')
        classname === 'inactive' ? classname = 'active' : classname = 'inactive'
      }}>
        <StyledNavSpan/>
        <StyledNavSpan/>
        <StyledNavSpan/>
      </StyledMenuButton>
    <StyledSideNavBarList className='side-navbar-list'>
        <Button 
          text='home' 
          href="#"
          handleClick={renderHomePage} 
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Button 
          text='portfolio' 
          href="#portfolio"
          handleClick={renderPortfolioPage} 
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Button 
          text='about' 
          href="#about"
          handleClick={renderAboutPage} 
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
        <Button 
          text='contact' 
          href="#contact"
          handleClick={renderContactPage} 
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}/>
    </StyledSideNavBarList>
    </div>
  )
}

export default SideNavbarList
