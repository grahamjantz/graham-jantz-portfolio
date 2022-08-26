import { React, useState } from 'react'
import './Main.css'
import HomePage from '../HomePage/HomePage'
import Portfolio from '../PortfolioPage/PortfolioPage'

const Main = ({ page }) => {
  
  return (
    <div className='component'>
      <div className='org-squ-container'>
        <div className='org-square'></div>
      </div>
      <div className='blu-rec-container'>
        <div className='blu-rectangle'></div>
      </div>
      {page}
    </div>
  )
}

export default Main