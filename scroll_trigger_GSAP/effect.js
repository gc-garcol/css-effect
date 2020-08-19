/**
 *
 * @author thai-van
 *
 **/
gsap
    .timeline({
        scrollTrigger: {
            trigger: 'section',
            start: 'center center',
            end: 'bottom top',
            scrub: true,
            markers: false,
            pin: true
        }
    })
    .to(".text", {scale: 0})
    .from(".box1", {x: innerWidth * -1})
    .from(".box2", {opacity: 0})
    .from(".box3", {x: innerWidth * -1})
    .from(".box4", {x: innerWidth * -1})
    .from(".box5", {x: innerWidth * -1})
    .from(".box6", {x: innerWidth * -1})

;