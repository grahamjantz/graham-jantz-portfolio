import styled from '@emotion/styled'
import React from 'react'
import Button from '../Button/Button';
import './ContactPage.css'


const ContactPage = ({ themeColor, themeBoxShadow1, themeBoxShadow2, themeBluRec, themeOrgSqu }) => {
  const StyledInput = styled.input`
  background-color: black;
  
  color: ${themeColor};
  border: 1px solid ${themeBoxShadow1};
  `;
  // taken from styled component above
  // box-shadow: inset 3px 3px 5px ${themeBoxShadow1},
  // inset -3px -3px 7px ${themeBoxShadow2};

  const StyledTextarea = styled.textarea`
  background-color: transparent;
  color: ${themeColor};
  border: 1px solid ${themeBoxShadow1};
  `;
  // Taken from styled component above
  // box-shadow: inset 3px 3px 5px ${themeBoxShadow1},
  // inset -3px -3px 7px ${themeBoxShadow2};

  const StyledOrgSqu = styled.div`
    background-color: ${themeOrgSqu};
  `;
  const StyledBluRec = styled.div`
    background-color: ${themeBluRec};
    border-bottom: 1px solid ${themeBluRec};
  `;


  return (
    <div className='contact-container' id="contact">
      <div className='contact-org-squ-container'>
          <StyledOrgSqu className='contact-org-square'/>
        </div>
        <div className='contact-blu-rec-master-container'>
          <div className='contact-blu-rec-container'>
            <StyledBluRec className='contact-blu-rectangle'/>
          </div>
          <div className='contact-blu-rec-container2'>
            <StyledBluRec className='contact-blu-rectangle2'/>
          </div>
        </div>
      <h2>Contact Me</h2>
      <form className='contact'name="contact" method="POST" >
        <input type="hidden" name="form-name" value="contact" />
          <label>Your Name: 
            <StyledInput type="text" name="name" placeholder='Name'/>
          </label>
          <label>Your Email: 
            <StyledInput type="email" name="email" placeholder='Email'/>
          </label>
          <label>Message: 
            <StyledTextarea name="message" placeholder='Message'/>
          </label>
          <Button 
            type="submit" 
            text="Send" 
            themeColor={themeColor}
            themeBoxShadow1={themeBoxShadow2}
            themeBoxShadow2={themeBoxShadow1}
          />
      </form>
    </div>
  )
}

export default ContactPage