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
    height: fit-content;
    margin: 0 auto;
    align-items: center;
    z-index: 10;
    gap: 10em;

    @media only screen and (min-width: 1200px) {
      gap: 5em;
    }

    @media only screen and (max-width: 800px) {
      gap: 0;
    }
  `;
  
  

  return (
    <div className={`${className} portfolio`} id="portfolio">
      <h2 style={{ paddingTop: '5em' }}>Portfolio</h2>
      <StyledProjects>
        <Project 
            title='G&M Wedding Website'
            description="I originally built this site using simple HTML, CSS, and JavaScript, I have since fully rebuilt the site using React. This was due to long load times between pages. By utilizing React Router I was able to only rerender the information on each page without reloading the entire site, making it much faster and more efficient."
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
            title='Waterfront Official Band Website'
            description={`This website was built for the band Waterfront using Wix. I built this site before I began learning to code and although I did not code this site I still learned a lot about site layout, button hover/active states and background images.`}
            src={waterfrontOfficialV2}
            target="_blank"
            liveLink="https://www.waterfrontofficial.com"
            repoLink="https://www.waterfrontofficial.com"
            display='none'
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