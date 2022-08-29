import React from 'react'
import './HomePage.css'

const HomePage = ({ renderHomePage, renderPortfolioPage, renderAboutPage, renderContactPage }) => {
  return (
    <div className='home-page'>
        <div className='main-comp'>
          <div className='main-header'>
            <h1 className='hero-title'>Hey, I'm Graham Jantz</h1>
            <h2 className='hero-subtitle'>{'<a front-end developer />'}</h2>
          </div>
          <div className='hero-image'></div>
        </div>
    </div>
  )
}

export default HomePage