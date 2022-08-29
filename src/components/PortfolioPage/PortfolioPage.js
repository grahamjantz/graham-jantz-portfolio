import React from 'react'
import Project from '../Project/Project'
import styled from '@emotion/styled'

const Portfolio = () => {
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
          src="./grahamandmaddy.png"
          liveLink=""
          repoLink=""
        />
      </StyledProjects>
    </div>
  )
}

export default Portfolio