import React from 'react'
import styled from '@emotion/styled'
import laptopImage from '../../images/laptop.png'
import './LaptopImage.css'


const LaptopImage = ({ src }) => {
    const StyledLaptop = styled.div`
        width: 400px;
        height: 300px;
        background-image: url(${laptopImage});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    `;
  return (
    <StyledLaptop className='styled-laptop'>
      {/* <div className='nested-image'></div> */}
        <img src={src} alt="laptop" className="nested-image"/>
    </StyledLaptop>
  )
}

export default LaptopImage