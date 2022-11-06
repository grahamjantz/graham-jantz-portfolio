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

  // const StyledProjectTriangle = styled.div`
  // background-image:
  // linear-gradient(to bottom right, transparent 50%, ${themeBluRec} 0),
  // linear-gradient(to top right, ${themeBluRec} 50%, transparent 0);
  // `;


  return (
    <div style={{display: 'flex', flexDirection: 'column', height: 'auto', alignItems: 'center' }}>
      <StyledProjectContainer className='project-container'>
        {/* <h3 className='title'></h3> */}
        <figure className='image'>
          <img src={src} alt="mockup for project"/>
          {/* <StyledProjectTriangle className='project-triangle'/>  */}
        </figure>
        <figcaption className='links'>
            <Button 
                className='live-site-link' 
                icon={<FaLink style={{ fontSize: '2em', marginRight: '0.5em'}}/>}
                text={'Live Site'}
                href={liveLink}
                target={target}
                themeColor={themeColor}
                themeBoxShadow1={themeBoxShadow1}
                themeBoxShadow2={themeBoxShadow2}
                bluRect={themeBluRec}
                />
            <Button 
                className='github-repo-link' 
                icon={<FaGithub style={{ fontSize: '2em', marginRight: '0.5em'}}/>}
                text={'Github Repo'}
                href={repoLink}
                target={target}
                display={display}
                themeColor={themeColor}
                themeBoxShadow1={themeBoxShadow1}
                themeBoxShadow2={themeBoxShadow2}
                bluRect={themeBluRec}
              />
        </figcaption>
        <div className='description'>
            <h3 className=''>{title}</h3>
            <p>{description}</p>    
            <div className='triangle-container'>
              <div className='triangle'><StyledTriangle /></div>
              <div className='triangle'><StyledTriangle /></div>
              <div className='triangle'><StyledTriangle /></div>
            </div>
        </div>
    </StyledProjectContainer>
    </div>
  )
}

export default Project