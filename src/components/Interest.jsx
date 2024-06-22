'use client'

import './css/interest.css'
import Image from 'next/image'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Interest = () => {
    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        
        gsap.from('.card', {
            scrollTrigger: {
                trigger: '.card',
                // markers: true, // Ensure correct property name
                pinSpacing: true, // Handle potential layout issues
                toggleActions: 'play pause resume reset',
                start: 'top 500px',
                // scrub: true,
            },
            y: 100,
            ease: 'easeIn',
            opacity: 0,
            delay: .3,
            duration: 3,
        });

        gsap.from('.cards', {
            scrollTrigger: {
                trigger: '.card',
                // markers: true, // Ensure correct property name
                pinSpacing: true, // Handle potential layout issues
                toggleActions: 'play pause resume reset',
                start: 'top 500px',
                // scrub: true,
            },
            // y: 100,
            ease: 'easeIn',
            opacity: 0,
            delay: .3,
            // duration: 1,
        });

        gsap.from('.fade', {
            scrollTrigger: {
                trigger: '.fade',
                // markers: true, // Ensure correct property name
                pinSpacing: true, // Handle potential layout issues
                toggleActions: 'play pause resume reset',
                start: 'top 500px',
                // scrub: true,
            },
            y: 60,
            ease: 'fadeIn',
            opacity: 0,
            delay: .3,
            duration: 3,
        });
        gsap.from('.text-left', {
            scrollTrigger: {
                trigger: '.text-left',
                // markers: true, // Ensure correct property name
                pinSpacing: true, // Handle potential layout issues
                toggleActions: 'play pause resume reset',
                start: 'top 500px',
                // scrub: true,
            },
            x: -100,
            ease: 'easeIn',
            opacity: 0,
            delay: .3,
            duration: 2,
        });
        gsap.from('.text-left2', {
            scrollTrigger: {
                trigger: '.text-left2',
                // markers: true, // Ensure correct property name
                pinSpacing: true, // Handle potential layout issues
                toggleActions: 'play pause resume reset',
                start: 'top 500px',
                // scrub: true,
            },
            x: -100,
            ease: 'easeIn',
            opacity: 0,
            delay: .4,
            duration: 1,
        });
        gsap.from('.text-left3', {
            scrollTrigger: {
                trigger: '.text-left3',
                // markers: true, // Ensure correct property name
                pinSpacing: true, // Handle potential layout issues
                toggleActions: 'play pause resume reset',
                start: 'top 500px',
                // scrub: true,
            },
            x: -100,
            ease: 'easeIn',
            opacity: 0,
            delay: .5,
            duration: 1,
        });

        // -------------------------- the interest animation ------------
        gsap.from('.show', {
            scrollTrigger: {
                trigger: '.show',
                // markers: true, // Ensure correct property name
                pinSpacing: true, // Handle potential layout issues
                toggleActions: 'play pause resume reset',
                start: 'top 500px',
                // scrub: true,
            },
            x: -100,
            ease: 'easeIn',
            opacity: 0,
            delay: .5,
            duration: 1,
        });

        gsap.from('.track_details', {
            scrollTrigger: {
                trigger: '.track_details',
                // markers: true, // Ensure correct property name
                pinSpacing: true, // Handle potential layout issues
                toggleActions: 'play pause resume reset',
                start: 'top 500px',
                // scrub: true,
            },
            x: -100,
            ease: 'easeIn',
            opacity: 0,
            delay: .3,
            duration: 1,
        });
    })

    return (
        <>
        <section id='interest'>
            <div className="intro">
                <h1 className='fade'>Discover who's interested in your products with real-time visitor analytics</h1>
                <p className='fade'>Potter ipsum wand elf parchment wingardium. It fire-whisky plums large seek. Hermione venom firs’ hall hat.
                    Newt you’ve owl peg-leg mewing candles cup. Thieves it wizard of a his pumpkin.</p>
            </div>
            <div className="area">
                <div className="data">
                    <h1 className='text-left'>Discover who's interested in your products.</h1>
                    <p  className='text-left2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas massa massa id arcu blandit dignissim contum volutpat dolor fermentum, justo tempor.</p>
                    <p  className='text-left3'>Vulputate enim ante egestas commodo in.</p>
                    <div className='tags'>
                        <div className='text-left3 tag'>Supply Chain</div>
                        <div className='text-left3 tag'> Tracking</div>
                        <div className='text-left3 tag'>Secure</div>
                        <div className='text-left3 tag'>Mobile Phone Ready</div>
                        <div className='text-left3 tag'>Fast</div>
                    </div>
                    <div>
                        <button>Request Access</button>
                    </div>
                </div>
                <div className="cards">
                    <div className="card">
                        <Image src={'/part2.png'} width={900} height={30}></Image>
                    </div>
                </div>
            </div>
        </section>
        <section id='track'>
            <div className='track_card'>
                <div className="card1">
                    <div className="show">
                        <h1>Earning</h1>
                        <p>Total Expense</p>
                        <span>$98999</span>
                        <p>Profit is 50% More Than The Last Month</p>
                    </div>
                </div>
            </div>
            <div className='track_details'>
            <h1>Keep track of your earnings with detailed breakdowns and growth insights.</h1>
                <p>The Earnings feature provides a comprehensive overview of your financial performance. Track your revenue streams, analyze profit margins, and understand your financial health. With detailed earnings reports, you can strategize for sustained growth and profitability.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus laboriosam corporis velit libero fuga doloremque, molestias, debitis dignissimos facere eaque quae commodi!</p>
                <button>Request Access</button>
            </div>
        </section>
        </>
    )
}

export default Interest
