import React, { useEffect, useState } from 'react'

import './Home.css'

import heroImage from '../../images/Hero_Image.jpeg'
import { useSelector } from 'react-redux'
import { selectTheme } from '../../AppSlice'

const Home = () => {

  const theme = useSelector(selectTheme)

  const [position, setPosition] = useState('-100vw')
  const [opacity, setOpacity] = useState('0')

  useEffect(() => {
    setPosition('0')
    setOpacity('1')
  }, [position, opacity])
  

  const h3Style = {
    // transform: `translateX(${position})`,
    opacity: `${opacity}`
  }
  
  const h1Style = {
    opacity: `${opacity}`,
  }

  const square1Style = {
    backgroundColor: theme.square1
  }

  const square2Style = {
    // backgroundColor: theme.square2,
    background: `linear-gradient(to bottom right, transparent 50%, ${theme.square2} 50%)`
  }

  return (
    <div className='home'>
        <div className='square1' style={square1Style}></div>
        <div className='square2-container'>
          <span style={square2Style}></span>
          <span style={square2Style}></span>
        </div>
      <main>
          <img src={heroImage} alt='hero' />
          <div>
            <h1 style={h1Style}>Hi, I'm Graham Jantz</h1>
            <h3 style={h3Style}><code>{'<'}</code><em>front end developer</em><code>{'/>'}</code></h3>
          </div>
      </main>
    </div>
  )
}

export default Home