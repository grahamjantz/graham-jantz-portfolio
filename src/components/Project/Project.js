import React from 'react'
import './Project.css'
import LaptopImage from '../LaptopImage/LaptopImage'
import { FaLink, FaGithub } from "react-icons/fa";
import Button from '../Button/Button';
import grahamAndMaddy from '../../images/grahamandmaddy.png'

const Project = ({ title, src, liveLink, repoLink, description }) => {
  return (
    <div className='project-container'>
        <figure className='image'>
                <LaptopImage src={grahamAndMaddy}/>
        </figure>
        <h3 className='title'>{title}</h3>
        <p className='description'>{description}</p>
        <figcaption className='links'>
            <Button 
                className='live-site-link' 
                text={<a href={liveLink}
                        className='live-site-link'>
                        <FaLink/>Live Site
                    </a>}/>
            <Button 
                className='github-repo-link' 
                text={<a href={repoLink}
                            className='github-repo-link'>
                    <FaGithub />Github Repo
                    </a>}/>
            <div className=''>
                
            </div>
        </figcaption>
    </div>
  )
}

export default Project