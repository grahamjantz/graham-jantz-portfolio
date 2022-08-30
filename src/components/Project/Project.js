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

  return (
    <StyledProjectContainer className='project-container'>
        <figure className='image'>
                <img src={src} alt="mockup for project"/>
        </figure>
        <h3 className='title'>{title}</h3>
        <p className='description'>{description}</p>
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
  )
}

export default Project