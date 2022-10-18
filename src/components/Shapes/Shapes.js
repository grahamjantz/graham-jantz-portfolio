import React from 'react'
import styled from '@emotion/styled'

const Shapes = ({theme}) => {

    // UNCOMMENT THIS TO BRING BACK SHAPES ON HOME PAGE
    const StyledOrgSqu = styled.div`
    background-color: ${theme.orgSquare};
    `;

    // background-color: ${theme.bluRectangle};
    const StyledBluRec = styled.div`
    background: linear-gradient(to top right, transparent 50%, ${theme.bluRectangle} 50%); 
    `;

    return (
        <>
            <div className={`org-squ-container`} >
                <StyledOrgSqu className='org-square'/>
            </div>
            <div className='blu-rec-master-container'>
                <StyledBluRec className='blu-rectangle2'/>
                <StyledBluRec className='blu-rectangle'/>
            </div>
      </>
    )
}

export default Shapes;