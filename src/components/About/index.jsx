import React, { useEffect, useState } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact, faSass } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {

const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
      const timer = setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 3000)
      return () => {
        clearTimeout(timer);
      }
    })

  return (
    <>
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters 
                strArray={['A','b','o','u','t',' ','m','e']}
                idx={15}
                letterClass={letterClass}
                />
            </h1>
            <p>I'm an ambitious full stack deveolper working out of Philadelphia, P.A.. I enjoy making all sorts of different projects using JavaScript in my free time. If I'm not out practicing martial arts at the local dojo, you'll find me at home, drinking coffee, typing away in my code editor.</p>
            <p>I am interested in working on challenging projects using the latest technologies. I spend the majority of my free time learning new technologies for fun anyway, so I'm not afriad to learn a new tech-stack, in fact, I'd be thrilled to do it.</p>
            <p>I enjoy working alone, and in a team. I thrive in both capacities equally. However, working with others on a programming project defintely brings me a certain kind of joy and satisfaction that I can't get from working alone.</p>
        </div>

    <div className='stage-cube-cont'>
        <div className='cubespinner'>
            <div className='face1'>
                <FontAwesomeIcon icon={faSass} color="#CF649A" className='sass-icon' />
            </div>
            <div className='face2'>
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className='face3'>
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className='face4'>
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className='face5'>
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className='face6'>
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
        </div>
    </div>
    </div>
    <Loader type='pacman' />
    </>
  )
}

export default About