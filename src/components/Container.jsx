'use client'
import './css/container.css'
import Image from 'next/image'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';


const Container = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=>{

    gsap.from('.sec2', {
      scrollTrigger: {
        trigger: '.sec2',
        // markers: true, // Ensure correct property name
        // pinSpacing: true, // Handle potential layout issues
        toggleActions: 'play pause resume reset',
        start: 'top 900px',
        // scrub: true,
    },
    y: 200,
    ease: 'easeIn',
    opacity: 0,
    // delay: .3,
    duration: 2,
  });
  
},[])
  return (
    <div id='container'>
            <h1>Ready to Accelerate Your Sales Journey?</h1>
            <p>Get started with 1 year for free on any plan</p>
            <button>Request Access</button>
        <div className="c_box">
            {/* <div className="sec1">
                With THe Ulitamte Changing Modes
            </div> */}
            <div className="sec2">
                <img src="/projectui.webp" fill></img>
            </div>
        </div>
    </div>
  )
}

export default Container