'use client'
import React, { useEffect } from 'react'
import './page.css'
import Image from 'next/image'
import gsap from 'gsap'
import timeline from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Mobile from '@/components/Mobile'
import Interest from '@/components/Interest'
import Package from '@/components/Package'
import Scroller from '@/components/Scroller'
import Container from '@/components/Container'
import Footer from '@/components/Footer'
import Link from 'next/link'

const page = () => {
  gsap.registerPlugin(ScrollTrigger);
  let t1 = gsap.timeline()
  // --------------------- THE HERO ANIMATIONS ------------------------
  useGSAP(() => {
    gsap.from(".h1", {
      opacity: 0,
      y: 200,
      ease: "easeIn",
      scrub: true,
      duration: 1,
    })
    gsap.from(".p", {
      opacity: 0,
      y: 200,
      delay:.6,
      ease: "easeIn",
      duration: 1,
    })
    gsap.from(".hero_btn", {
      opacity: 0,
      y: 200,
      delay:.7,
      ease: "easeIn",
      duration: 1,
    })

  // ------------------------- THE IMAGE ANIMATIONS -------------------
  gsap.from('.design', {
    scrollTrigger: {
      trigger: '.design',
      // markers: true, // Ensure correct property name
      pinSpacing: true, // Handle potential layout issues
      toggleActions: 'play pause resume reset',
      start: 'top 600px',
      end: 'bottom top'
      // scrub: true
    },
    y: 200,
    // x:300,
    // ease: 'easeIn',
    opacity: 0,
    duration: 2,
  });

  }, [])

  return (
    <>
      <section id='home'>
        <h1 className='two-color-text h1'>Empower Your Sales, Elevate Your Success with SalesMate</h1>
        <p className='p'>Salesmate transforms your sales tracking experience with powerful insights
          and real-time data at your fingertips. Make informed decisions, boost productivity,
          and skyrocket your sales with our web app.</p>
        <button className='hero_btn' ><Link href={'http://localhost:5173/'}>Request Accesss</Link></button>
      </section>
      <section id="img">
        <div className="design">
          {/* this is the design page */}
          <img src='/part1.png' alt='' />
          <button>See how it works</button>
        </div>
      </section>
      {/* <Scroller/> */}
      <Mobile/>
      <Interest/>
      <Package/>
      <Container/>
      <Footer/>
    </>
  )
}

export default page
