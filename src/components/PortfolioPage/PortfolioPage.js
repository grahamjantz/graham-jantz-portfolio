import React from 'react'
import Project from '../Project/Project'
import styled from '@emotion/styled'
import grahamAndMaddy from '../../images/grahamandmaddy.png'

const Portfolio = ({ themeColor, themeBoxShadow1, themeBoxShadow2 }) => {
  const StyledProjects = styled.span`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    height: 700px;
    align-items: center;
    justify-content: space-between;
  `;

  return (
    <div className='portfolio'>
      <h2>Portfolio</h2>
      <StyledProjects>
        <Project 
          title='Project 1'
          description="This project was created as a personal wedding website using vanilla HTML, CSS, and, JavaScript."
          src={grahamAndMaddy}
          liveLink=""
          repoLink=""
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}
        />
      </StyledProjects>
    </div>
  )
}

export default Portfolio