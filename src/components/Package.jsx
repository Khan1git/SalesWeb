'use client'
import './css/package.css'

import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';


const Package = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {

    gsap.from('.package1', {
      scrollTrigger: {
        trigger: '.package1',
        // markers: true, // Ensure correct property name
        pinSpacing: true, // Handle potential layout issues
        toggleActions: 'play pause resume reset',
        start: 'top 500px',
        // scrub: true,
      },
      y: 100,
      ease: 'easeIn',
      opacity: 0,
      delay: .4,
      duration: 3,
    });
    gsap.from('.package2', {
      scrollTrigger: {
        trigger: '.package1',
        // markers: true, // Ensure correct property name
        pinSpacing: true, // Handle potential layout issues
        toggleActions: 'play pause resume reset',
        start: 'top 500px',
        // scrub: true,
      },
      y: 200,
      ease: 'easeIn',
      opacity: 0,
      // delay: .3,
      duration: 3,
    });
    gsap.from('.package3', {
      scrollTrigger: {
        trigger: '.package1',
        // markers: true, // Ensure correct property name
        pinSpacing: true, // Handle potential layout issues
        toggleActions: 'play pause resume reset',
        start: 'top 500px',
        // scrub: true,
      },
      y: 100,
      ease: 'easeIn',
      opacity: 0,
      delay: .4,
      duration: 3,
    });


  }, {})


  return (
    <div id='packages'>
      <h1 className='heading'>SELECT YOUR PACKAGE NOW GROW</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, consectetur. Dolorum fugit vel voluptatibus amet totam ullam incidunt, quod nulla quam placeat.</p>
      <div className="p_home">
        <div className="box  package1">
          <h1>Free Package</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nostrum.</p>
          <p className='price'>Price: 0$</p>
          <h2>Features</h2>
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
          <button className='package_btn'>Continue</button>
        </div>
        <div className="box  package2">
          <h1>Monthly Package</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nostrum.</p>
          <p className='price'>Price: 50$</p>
          <h2>Features</h2>
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
          <button className='package_btn'>Continue</button>
        </div>
        <div className="box  package3">
          <h1>Yearly Package</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nostrum.</p>
          <p className='price'>Price: 100$</p>
          <h2>Features</h2>
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
            <li>Lorem, ipsum.</li>
          </ul>
          <button className='package'>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default Package
