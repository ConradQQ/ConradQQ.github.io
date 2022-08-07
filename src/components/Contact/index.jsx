import './index.scss';
import emailjs from '@emailjs/browser';
import React, { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000)
    return () => {
      clearTimeout(timer);
    }
  })
  
  const refForm  = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
    .sendForm(
      'service_f1ke6qe',
      'template_0miadqn',
      refForm.current,
      'AVTOIQBTPlIqKEEmr'
    )
    .then(
      () => {
        alert('Message Successfully Sent! I will be in touch within 24 - 48 hours.')
        window.location.reload(false);
      },
      () => {
        alert('Failed to send message. Please try again.')
      }
    )
  }
  
  return (
   <>
   <div className='container contact-page'>
    <div className='text-zone'>
      <h1>
        <AnimatedLetters 
        letterClass={letterClass}
        strArray={['C','o','n','t','a','c','t',' ','m','e']} 
        idx={15}/>
      </h1>
      <p>
        I am interested in freelance opportunities. However, if you have any questions or requests regarding any sort of project please don't hesitate to contact me!
      </p>
      <div className='contact-form'>
        <form ref={refForm} onSubmit={sendEmail} action="">
          <ul>
            <li>
              <textarea 
              name="message" 
              placeholder='
              Please include your name, contact info, and a short message.' 
              required ></textarea>
            </li>
            <li>
              <input type="submit" className='flat-button' value='SEND'/>
            </li>
          </ul>
        </form>
      </div>
    </div>
    <div className='info-map'>
      Connor Hawkes
      <br />

      <br />
      1400 John F. Kennedy Blvd
      <br />
      
      Philadelphia, Pennsylvania, USA
      <br />
      <span>connorhawkes@gmail.com</span>
    </div>
    <div className='map-wrap'>
      <MapContainer center={[39.9513, -75.1583]} zoom={14}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={[39.9513, -75.1583]}>
          <Popup>Connor lives here, come over for some coffee!</Popup>
        </Marker>
      </MapContainer>
    </div>
   </div>
   <Loader type='pacman' />
   </>
  )
}

export default Contact