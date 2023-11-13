// src/components/Contact.js
import React from 'react';
import './Contact.css';
import iconwa from '../assets/wa-icon.jpeg'
import iconig from '../assets/ig-icon.jpeg'

function Contact() {
  return (
    <div className="contact-container">
      <h2>LET'S CONNECT</h2>
      <p className='contactus'>
        I really appreciate the opinions and ideas you want to throw at me.
        It would be great if we could talk about things together.
        Feel free to contact me anytime via my social media.
      </p>
      <div className="icon-container">
        <div className="wa-item">
          <img src={iconwa} alt="Foto 1" />
          <a href="https://wa.me/+6282115495125" target="_blank"> 
          <p>Chat me on WhatsApp</p>
          </a>
        </div>
        <div className="ig-item">
            <img src={iconig} alt="Foto 1" />
            <a href="https://www.instagram.com/beaskara22/" target="_blank">
            <p>DM me on Instagram</p>
            </a>
        </div>
      </div>
      <div className="page">
        <form>
            <div className="input-group">
                <input type="text" id="fname" name="fname" placeholder="Your Name.." />
            </div>
            <div className="input-group">
                <input type="text" id="em" name="em" placeholder="Your Email.."/>
            </div>

            <div className="input-group">
                <textarea name="message" rows="10" cols="50" placeholder="Your Message.."></textarea>
            </div>

            <div className="input-group">
                <input type="submit" value="Send" />
            </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
