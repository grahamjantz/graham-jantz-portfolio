import styled from '@emotion/styled'
import React from 'react'
import Button from '../Button/Button';
import './ContactPage.css'

const ContactPage = ({ themeColor, themeBoxShadow1, themeBoxShadow2 }) => {
  const StyledInput = styled.input`
  box-shadow: inset 3px 3px 5px ${themeBoxShadow1},
  inset -3px -3px 7px ${themeBoxShadow2};
  `;

  const StyledTextarea = styled.textarea`
  box-shadow: inset 3px 3px 5px ${themeBoxShadow1},
  inset -3px -3px 7px ${themeBoxShadow2};
  `;

  return (
    <div className='contact-container' id="contact">
      <h2>Contact Me</h2>
      <form className='contact'name="contact" method="POST" data-netlify="true">
          <label>Your Name: 
            <StyledInput type="text" name="name" />
          </label>
          <label>Your Email: 
            <StyledInput type="email" name="email" />
          </label>
          <label>Message: 
            <StyledTextarea name="message" />
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