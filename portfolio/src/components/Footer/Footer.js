import React from 'react'
import './Footer.css'
import aiplatslogo from './../assets/aiplatslogo.jpeg'

import linkedin from './../assets/icons8-linkedin-48.png'
import github from './../assets/icons8-white-github-50.png'

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="main-footer">
          <div className="footer-container">
            <div class="footer-name">
              <img src={aiplatslogo} alt='aiplats logo' /> &nbsp; &nbsp;
              © 2025 aiplats. All rights reserved.
            </div>
            
            <img src={aiplatslogo} alt='aiplats logo' />
            
            <div class="footer-links">
              <a href="#About">About</a> | 
              <a href="#Projects">Projects</a> | 
              <a href="#Services">Services</a> | 
              <a href="#Contact">Contact</a>
            </div>
            <div class="footer-socials">
              <a href="www.linkedin.com/in/aiplats"><img src={linkedin} alt="LinkedIn" style={{width: '40px', height: '40px'}}/></a>
              <a href="https://github.com/aipPlaton"><img src={github} alt="GitHub" style={{width: '40px', height: '40px'}} /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
