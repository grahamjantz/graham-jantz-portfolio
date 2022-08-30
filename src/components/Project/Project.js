import React from 'react'
import './Project.css'
import LaptopImage from '../LaptopImage/LaptopImage'
import { FaLink, FaGithub } from "react-icons/fa";
import Button from '../Button/Button';


const Project = ({ title, src, liveLink, repoLink, description, themeColor, themeBoxShadow1, themeBoxShadow2 }) => {
  return (
    <div className='project-container'>
        <figure className='image'>
                <LaptopImage src={src}/>
        </figure>
        <h3 className='title'>{title}</h3>
        <p className='description'>{description}</p>
        <figcaption className='links'>
            <Button 
                className='live-site-link' 
                icon={<FaLink />}
                text={'Live Site'}
                href={liveLink}
                themeColor={themeColor}
                themeBoxShadow1={themeBoxShadow1}
                themeBoxShadow2={themeBoxShadow2}
                />
            <Button 
                className='github-repo-link' 
                icon={<FaGithub />}
                text={'Github Repo'}
                href={repoLink}
                themeColor={themeColor}
                themeBoxShadow1={themeBoxShadow1}
                themeBoxShadow2={themeBoxShadow2}
              />
            <div className=''>
                
            </div>
        </figcaption>
    </div>
  )
}

export default Project