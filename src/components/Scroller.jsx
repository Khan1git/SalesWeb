'use client'
import './css/scroller.css'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from 'gsap'


const Scroller = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(()=>{
        gsap.from('.move', {
            scrollTrigger: {
              trigger: '.move',
              // markers: true, // Ensure correct property name
              pinSpacing: true, // Handle potential layout issues
              toggleActions: 'play pause resume reset',
              start: 'top 500px',
              end: 'bottom top',
            //   scrub: true,
              animate: 1, 
            },
            x: 800,
            // x:300,
            ease: 'easeIn',
            opacity: 0,
            duration: 2,
          });

    },[])
    return (
        <div id='scroller'>
            <div className='going'>
                <div className='move'>FAST</div>
                <div className='move'>RELAIBLE</div>
                <div className='move'>EFFICIENT</div>
                <div className='move'>FLEXABLE</div>
                <div className='move'>FLEXABLE</div>
            </div>
            {/* <div className='coming'> */}
            {/* <div className='move'>FAST</div>
                <div className='move'>RELAIBLE</div>
                <div className='move'>EFFICIENT</div>
                <div className='move'>FLEXABLE</div>
                <div className='move'>FLEXABLE</div>
            </div> */}
           
        </div>
    )
}
export default Scroller