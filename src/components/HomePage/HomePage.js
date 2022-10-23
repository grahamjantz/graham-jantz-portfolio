import React from 'react'
import './HomePage.css'
import { fadeInLeftBig, fadeIn } from 'react-animations'
import styled, { keyframes } from 'styled-components'
import heroImage from '../../images/Hero_Image.png'

const fadeAnimation = keyframes`${fadeIn}`;
const StyledFadeDiv = styled.div`
  animation: 2s ${fadeAnimation};
`;

const slideAnimation = keyframes`${fadeInLeftBig}`;
const StyledSlideDiv = styled.div`
  animation: ${slideAnimation} 4s;
`;
const HomePage = ({theme}) => {


  return (
    <div className='home-page' id='home'>
      <div className='main-header'>
        <StyledFadeDiv>
          <h1 className='hero-title'>Hi, I'm Graham Jantz</h1>
        </StyledFadeDiv>
        <StyledSlideDiv>
            <h2 className='hero-subtitle'>{'<a front-end developer />'}</h2>
        </StyledSlideDiv>
      </div>
      <img src={heroImage} className='hero-image' alt=''/>
    </div>
  )
}

export default HomePage