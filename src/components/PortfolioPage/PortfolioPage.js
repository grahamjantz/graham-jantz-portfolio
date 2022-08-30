import React from 'react'
import Project from '../Project/Project'
import styled from '@emotion/styled'
import grahamAndMaddyV2 from '../../images/grahamandmaddyV3.png'
import waterfrontOfficialV2 from '../../images/waterfrontofficialV3.png'
import reactPlayground from '../../images/reactplaygroundV3.png'

const Portfolio = ({ className, themeColor, themeBoxShadow1, themeBoxShadow2, themeBluRec, themeOrgSqu }) => {
  const StyledProjects = styled.span`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
  `;

  return (
    <div className={`${className} portfolio`} id="portfolio">
      <h2>Portfolio</h2>
      <StyledProjects>
      <Project 
          title='Waterfront Official Band Website'
          description="This website was built for the band Waterfront using Wix. I built this site before I began learning to code and although I did not code this site I still learned a lot about site layout, button hover/active states and background images."
          src={waterfrontOfficialV2}
          target="_blank"
          liveLink="https://www.waterfrontofficial.com"
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}
          themeBluRec={themeBluRec}
          themeOrgSqu={themeOrgSqu}
        />
        <Project 
          title='G&M Wedding Website'
          description="This project was created as a personal wedding website using vanilla HTML, CSS, and, JavaScript. This site is built using individual files for each page. Which was a new concept for me at the time, so it was quite a learning curve but I learned a lot through online resources and styling tutorials."
          src={grahamAndMaddyV2}
          liveLink="https://grahamandmaddy.com"
          repoLink="https://github.com/grahamandmaddy/grahamandmaddy.github.io"
          target="_blank"
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}
          themeBluRec={themeBluRec}
          themeOrgSqu={themeOrgSqu}
        />
        <Project 
          title='React Playground'
          description="This project was created as a practice exercise in React. Each 'app' builds in complexity and functionality. This project was really helpful in learning how to use and pass props and the useState() hook."
          src={reactPlayground}
          liveLink="https://graham-jantz-react-playground.netlify.app/"
          repoLink="https://github.com/grahamjantz/react-playground"
          target="_blank"
          themeColor={themeColor}
          themeBoxShadow1={themeBoxShadow1}
          themeBoxShadow2={themeBoxShadow2}
          themeBluRec={themeBluRec}
          themeOrgSqu={themeOrgSqu}
        />
      </StyledProjects>
    </div>
  )
}

export default Portfolio