import React from 'react'
import './Project.css'
import { FaLink, FaGithub } from "react-icons/fa";
import Button from '../Button/Button';
import styled from '@emotion/styled';

const Project = ({ title, src, liveLink, repoLink, target, description, themeColor, themeBoxShadow1, themeBoxShadow2, themeBluRec, themeOrgSqu }) => {

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
    }

    @media only screen and (max-width: 700px) {
      width: 500px;
    }

    @media only screen and (max-width: 500px) {
      width: 300px;
      left: 30px;
      top: 300px;
    }
  `;

  return (
    <div style={{display: 'flex', flexDirection: 'column', height: 'auto', marginBottom: '2em'}}>
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
                icon={<FaLink />}
                text={'Live Site'}
                href={liveLink}
                target={target}
                themeColor={themeColor}
                themeBoxShadow1={themeBoxShadow1}
                themeBoxShadow2={themeBoxShadow2}
                />
            <Button 
                className='github-repo-link' 
                icon={<FaGithub />}
                text={'Github Repo'}
                href={repoLink}
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

export default Project