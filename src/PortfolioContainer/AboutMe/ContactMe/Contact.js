import React, { useState } from 'react';
import './Contact.css'

export default function Contact() {
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        // try {
        //   const response = await fetch('http://localhost:3001/bmsithole1998@gmail.com', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        //   });
      
        //   if (response.ok) {
        //     // Email sent successfully, you can show a success message here.
        //     console.log('Email sent successfully');
        //   } else {
        //     // Handle errors, show an error message to the user.
        //     console.error('Email sending failed');
        //   }
        // } catch (error) {
        //   console.error('Error:', error);
        // }
      };
      
    
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>If you have any questions or would like to get in touch, please use the form below.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
          type="text" 
          id="name" 
          name="name"
          placeholder='Enter your name ...' 
          required />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          placeholder='Enter your email ...' />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
          id="message" 
          name="message" 
          rows="4" 
          placeholder='Type here...'
          required></textarea>
        </div>
        
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}
