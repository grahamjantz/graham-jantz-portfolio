import React from 'react'
import './Project.css'
import { FaLink, FaGithub } from "react-icons/fa";
import Button from '../Button/Button';
import styled from '@emotion/styled';

const Project = ({ title, src, liveLink, repoLink, target, description, themeColor, themeBoxShadow1, themeBoxShadow2, themeBluRec, themeOrgSqu, display }) => {

  const StyledProjectContainer = styled.div`
    background-color: transparent;
    position: relative;
  `;

  const StyledTriangle = styled.div`
    width: 100%;
    height: 100%;
    background-image:
      linear-gradient(to bottom right, transparent 50%, ${themeOrgSqu} 0),
      linear-gradient(to top right, ${themeOrgSqu} 50%, transparent 0);
    background-size: 50% 100%;
    background-repeat: no-repeat;
    background-position: left, right;
    transform: rotate(90deg);

    @media only screen and (max-width: 800px) {
      width: 50%;
      height: 50%;
    }
  `;

  const StyledRectangle = styled.div`
    width: 500px;
    height: 200px;
    position: relative;
    top: 280px;
    margin: 0;
    transform: rotate(150deg);
    background-image:
      linear-gradient(to bottom right, transparent 50%, ${themeBluRec} 0),
      linear-gradient(to top right, ${themeBluRec} 50%, transparent 0);
    background-size: 50% 100%;
    background-repeat: no-repeat;
    background-position: left, right;

    @media only screen and (max-width: 1000px) {
      width: 400px;
    }
    
    @media only screen and (max-width: 800px) {
      width: 300px;
      height: 150px;
    }

    @media only screen and (max-width: 700px) {
      width: 500px;
    }

    @media only screen and (max-width: 500px) {
      width: 300px;
      left: 30px;
      top: 300px;
    }

    @media only screen and (max-width: 400px) {
      top: 200px;
    }
  `;

  /*
    DEAR FUTURE GRAHAM,
    ONCE THE WATERFRONT SITE IS TAKEN OFF YOUR PORTFOLIO, OR IF YOU REBUILD IT IN REACT, DELETE THIS IF STATEMENT. THIS IS ONLY HERE TO ENSURE THAT THERE IS NOT A LINK TO A GITHUB REPO FOR THE WF SITE. AS OF NOW (09/14/2022) THERE IS NO GITHUB REPO FOR THIS SITE. MAYBE YOU WILL MAKE ONE DOWN THE ROAD I DON'T KNOW MAYBE YOU WON'T. TIME WILL TELL, THE FATE OF THIS REPO IS IN YOUR HANDS, WIELD THIS POWER WELL AND BE A FAIR RULER OF THE REPO POWER. REMEMBER, WITH GREAT POWER COMES GREAT RESPONSIBILITY. -STAN LEE -UNCLE BEN -GRAHAM JANTZ

    YOU MISS 100% OF THE SHOTS YOU DON'T TAKE -WAYNE GRETZY -MICHAEL SCOTT
  */
  if (display === 'none') {
    return (
      <div style={{display: 'flex', flexDirection: 'column', height: 'auto' }}>
    <StyledRectangle></StyledRectangle>
    <StyledProjectContainer className='project-container'>
      
        <figure className='image'>
                <img src={src} alt="mockup for project"/>
        </figure>
        <h3 className='title'>{title}</h3>
          <div className='description'>
            <p>{description}</p>    
            <div className='triangle-container'>
              <div className='triangle'><StyledTriangle /></div>
              <div className='triangle'><StyledTriangle /></div>
              <div className='triangle'><StyledTriangle /></div>
            </div>
          </div>
        <figcaption className='links'>
            <Button 
                className='live-site-link' 
                icon={<FaLink style={{ fontSize: '1.5em', marginRight: '0.5em'}}/>}
                text={'Live Site'}
                href={liveLink}
                target={target}
                themeColor={themeColor}
                themeBoxShadow1={themeBoxShadow1}
                themeBoxShadow2={themeBoxShadow2}
                />
        </figcaption>
    </StyledProjectContainer>
    </div>
    )
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', height: 'auto' }}>
    <StyledRectangle></StyledRectangle>
    <StyledProjectContainer className='project-container'>
      
        <figure className='image'>
                <img src={src} alt="mockup for project"/>
        </figure>
        <h3 className='title'>{title}</h3>
          <div className='description'>
            <p>{description}</p>    
            <div className='triangle-container'>
              <div className='triangle'><StyledTriangle /></div>
              <div className='triangle'><StyledTriangle /></div>
              <div className='triangle'><StyledTriangle /></div>
            </div>
          </div>
        <figcaption className='links'>
            <Button 
                className='live-site-link' 
                icon={<FaLink style={{ fontSize: '1.5em', marginRight: '0.5em'}}/>}
                text={'Live Site'}
                href={liveLink}
                target={target}
                themeColor={themeColor}
                themeBoxShadow1={themeBoxShadow1}
                themeBoxShadow2={themeBoxShadow2}
                />
            <Button 
                className='github-repo-link' 
                icon={<FaGithub style={{ fontSize: '1.5em', marginRight: '0.5em'}}/>}
                text={'Github Repo'}
                href={repoLink}
                target={target}
                display={display}
                themeColor={themeColor}
                themeBoxShadow1={themeBoxShadow1}
                themeBoxShadow2={themeBoxShadow2}
              />
        </figcaption>
    </StyledProjectContainer>
    </div>
  )
}

export default Project