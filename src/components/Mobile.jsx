'use client'
import './css/mobile.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';



const Mobile = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=>{
        gsap.from('.sides', {
            scrollTrigger: {
              trigger: '.sides',
            //   markers: true, // Ensure correct property name
              pinSpacing: true, // Handle potential layout issues
              toggleActions: 'play pause resume reset',
              start: 'top 500px',
            },
            y: 100,
            ease: 'easeIn',
            opacity: 0,
            delay: .3,
            duration: 2,
          });

          gsap.from('#box1', {
            scrollTrigger: {
              trigger: '#box1',
            //   markers: true, // Ensure correct property name
              pinSpacing: true, // Handle potential layout issues
              toggleActions: 'play pause resume reset',
              start: 'top 600px',
            },
            y: 100,
            // ease: 'easeOut',
            opacity: 0,
            delay: .1,
            duration: 2,
          });

          gsap.from('#box2', {
            scrollTrigger: {
              trigger: '#box2',
            //   markers: true, // Ensure correct property name
              pinSpacing: true, // Handle potential layout issues
              toggleActions: 'play pause resume reset',
              start: 'top 600px',
            },
            y: 100,
            ease: 'easeIn',
            opacity: 0,
            delay: .3,
            duration: 2,
          });
          gsap.from('#box3', {
            scrollTrigger: {
              trigger: '#box3',
            //   markers: true, // Ensure correct property name
              pinSpacing: true, // Handle potential layout issues
              toggleActions: 'play pause resume reset',
              start: 'top 600px',
            },
            y: 100,
            ease: 'easeIn',
            opacity: 0,
            // delay: .3,
            duration: 2,
          });
          gsap.from('#box4', {
            scrollTrigger: {
              trigger: '#box4',
            //   markers: true, // Ensure correct property name
              pinSpacing: true, // Handle potential layout issues
              toggleActions: 'play pause resume reset',
              start: 'top 600px',
            },
            y: 100,
            ease: 'easeIn',
            opacity: 0,
            delay: .4,
            duration: 2,
          });

    },[])
    return (
        <>
            <div className='headers'>
                <h1>Simplify Your Sales Process</h1>
                <p>Streamline your order to cash with efficient tracking of orders and product management.</p>
            </div>
            <section id="mobile">
                <div className="sides">
                    <div className="info">
                        <div id='box1' className='box'>
                            <h1>Invoice</h1>
                            <p>Real time pdf invoice generation</p>
                        </div>
                        <div id='box2' className='box'>
                            <h1>Product</h1>
                            <p>Product with detailed Informations</p>
                        </div>
                        <div id='box3' className='box'>
                            <h1>Customer</h1>
                            <p>High level customer Mangament</p>
                        </div>
                        <div id='box4' className='box'>
                            <h1>Order</h1>
                            <p>Controlled orders with full access over crud</p>
                        </div>
                    </div>
                    <div className="tab">
                        <div className="device">
                        <img src="/ipad.png" alt="" />
                        <div>
                            <p style={{textAlign: "center"}}>Oww! We Have Mobile Too</p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Mobile
