'use client'

import '../about/about.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const page = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from('.box2', {
      scrollTrigger: {
        trigger: '.box2',
        markers: true, // Ensure correct property name
        pinSpacing: true, // Handle potential layout issues
        toggleActions: 'play pause resume reset',
        start: 'top 500px',
      },
      y: -100,
      ease: 'easeIn',
      opacity: 0,
      scrub: true,
      duration: 2,
    });
  }, []);

  return (
    <section id='about'>
      <div className='box'>
        <div className='box1'>box</div>
        <div className='box2'>box2</div>
        <div className='box3'>box3</div>
        <div className='box4'>box3</div>
        <div className='box5'>box3</div>
      </div>
    </section>
  );
};

export default page;