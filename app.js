// get the section
let bgImg = document.querySelector('.circle');
console.log(bgImg)

gsap.registerPlugin(ScrollTrigger);
gsap.to(bgImg, {
    clipPath: 'circle(75% at 50% 50%)',
    ease: 'none',
    scrollTrigger: {
        trigger: bgImg,
        pin: bgImg,
        scrub: 2,
        start: '45% center',
        end: '20% center',
        markers: true,
    }
})