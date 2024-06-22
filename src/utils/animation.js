import gsap from '@gsap/react'

let t1 = gsap.timeline()

t1.from("h1", {
    y:900,
    duration: 1,
    opactity: 0,
    delay: .3
})