import React from 'react'
import Button from '../Button/Button'
import './SideNavbarList.css'
import styled from '@emotion/styled'

const SideNavbarList = ({ renderHomePage, renderPortfolioPage, renderAboutPage, renderContactPage, themeBody, themeColor,themeBoxShadow1, themeBoxShadow2 }) => {

  const StyledSideNavBarList = styled.div`
    background-color: ${themeBody};
    left: -300px;
  `;

  const StyledMenuButton = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
  `;

  return (
    <div>
      <StyledMenuButton className='menu'>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
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
