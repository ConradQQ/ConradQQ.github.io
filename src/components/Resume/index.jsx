import './index.scss'
import caCert from '../../assets/images/certs/ca-css-cert.png'
import fccCssCert from '../../assets/images/certs/fcc-web-design-cert.png'
import fccJsCert from '../../assets/images/certs/fcc-js-cert.png'
import Loader from 'react-loaders'
import React, { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Resume = () => {

const nameArray = ['C','o','n','n','o','r',' ','H','a','w','k','e','s'];
const jobArray = ['E','n','t','r','y','-','le','v','e','l',' ','W','e','b', ' ','D','e','v','e','o','lp','e','r'];

const [letterClass, setLetterClass] = useState('text-animate');

useEffect(() => {
  const timer = setTimeout(() => {
    setLetterClass('text-animate-hover-resume');
  }, 3000)
  return () => {
    clearTimeout(timer);
  }
})

  return (
  <>
    <div className='container resume-page'>
      <header className='header'>
        <h1>
          <AnimatedLetters 
        strArray={nameArray}
        idx={15}
        letterClass={letterClass}
        />
        </h1>
        <p><AnimatedLetters
        strArray={jobArray}
        idx={45}
        letterClass={letterClass} 
        />
        </p>
      </header>

      <br />

      <div className='personal-info'>
        <h1>Personal Info</h1>
        <br />
        <div className='contact'>
          <p>239-645-7736</p>
          <p>connorhawkes@gmail.com</p>
        </div>
        <br />
        <div className="skills">
          <h1>Skills</h1>

          <div className="skill-1">
            <h2>Critical Thinking</h2>
            <div className='level-1'>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span> 
              <span class="dot"></span> 
            </div>

            <div className="skill-2">
            <h2>Teamwork</h2>
            <div className='level-2'>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span> 
              <span class="dot"></span> 
            </div>
          </div>

          <div className="skill-3">
            <h2>Problem Solving</h2>
            <div className='level-3'>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span> 
              <span class="dot"></span> 
            </div>
          </div>

          <div className="skill-4">
            <h2>HTML & CSS</h2>
            <div className='level-4'>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="final-dot"></span> 
            </div>
          </div>

          <div className="skill-5">
            <h2>Vanilla JS</h2>
            <div className='level-5'>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="final-dot"></span> 
            </div>
          </div>

          <div className="skill-6">
            <h2>React.js</h2>
            <div className='level-6'>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="final-dot"></span> 
              <span class="final-dot"></span> 
            </div>
          </div>
          </div>
          </div>
      </div>
      <div className='mission'>
        <p>Extremely motivated and naturally curious self-educated Web Developer and tech fanatic with practical experience creating everything from static web-pages to dynamic web applicaitons using HTML, CSS and Javascript, as well as many of the technologies within the CSS and Javascript ecosystems </p>
      </div>
      <div className='education'>
        <h1>Education</h1>
        <br />
        <h2>2019 -
          <br />
          2022
        </h2>
        <ul>
          <a href="/">
            <li>Code Academy: HTML/CSS Certification</li>
            <div className='cert-box'>
              <img src={caCert} alt="CA certification" />
            </div>
            </a>
            
            <a href="https://www.freecodecamp.org/certification/conradqq/responsive-web-design">
            <li>FreeCodeCamp: Responsive Web Design Certification</li>
            <div className='cert-box'>
              <img src={fccCssCert} alt="FCC CSS certification" />
            </div>
            </a>

            <a href="https://www.freecodecamp.org/certification/conradqq/javascript-algorithms-and-data-structures">
            <li>FreeCodeCamp: JavaScript Algorithms and Data Structures Certification</li>
            <div className='cert-box'>
              <img src={fccJsCert} alt="FCC Javascript certification" />
            </div>
            </a>
        </ul>
      </div>
      <div className='experience'>
        <h1>Experience</h1>
        <br />
        <h2>2020 -
          <br />
          2022
        </h2>
        
        <ul className='exp1'>Solo Freelance Web Deveolper and Designer
          <li>Built and maintained dynamic and responsive websites that met customer criteria</li>
          <li>Cultivated and nurtured relationships with clients in my own community</li>
          <li>Priortized client satisfaction and product quality above all else</li>
        </ul>

        <ul className='exp2'>Your Company Name Here
          <li>Pour my drive and ethusiasm into your team</li>
          <li>Contuine to grow and offer your company much more than you ever dreamed</li>
          <li>Instantly become a member of the family whom everyone on the team can count on</li>
        </ul>
      </div>
      <div className='interests'>
        <h1>Interests</h1>
        <br />
        <h3>Solving challenges on Codewars.com and Leetcode</h3>
        <h3>Experimenting with new technologies</h3>
        
      </div>
     
    </div>
    <Loader type="pacman" />
  </>
  )
}

export default Resume