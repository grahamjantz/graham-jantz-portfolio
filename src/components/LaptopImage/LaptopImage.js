import React from 'react'
import styled from '@emotion/styled'
import laptopImage from '../../images/laptop.png'


const LaptopImage = ({ src }) => {
    const StyledLaptop = styled.div`
        width: 400px;
        height: 300px;
        background-image: url(${laptopImage});
        background-size: contain;
        background-position: center;
        background-repeat: none;
    `;
  return (
    <StyledLaptop>
        <img src={src} alt="laptop"/>
    </StyledLaptop>
  )
}

export default LaptopImage