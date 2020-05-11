const timeline = gsap.timeline({
    paused: true
})

timeline.from('.move_title',{
    x: 30,
    ease: 'power4.in'

})

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.navBar',
    duration: 500,
    triggerHook: 0
})
.setTween(timeline)
// .addIndicators()
.addTo(controller)


const timeline2 = gsap.timeline({
    paused: true
})

timeline.from('.move_title2',{
    x: -30,
    ease: 'power4.in'
})

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.PJ2',
    duration: 500,
})
.setTween(timeline2)
// .addIndicators()
.addTo(controller)