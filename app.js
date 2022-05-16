// gsap.registerPlugin(ScrollTrigger);

// get the section
let bgImg = document.querySelector('.circle');
console.log(bgImg)

gsap.registerPlugin(ScrollTrigger);
gsap.to(bgImg, {
    clipPath: 'circle(75% at 50% 50%)',
    ease: 'none',
    scrollTrigger: {
        trigger: bgImg,
        scrub: .5,
        start: '30% center -=200',
        end: '100% center',
        markers: true,
    }
})