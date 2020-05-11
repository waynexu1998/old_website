// hero section animtion
function anim_start() {
    timeline.play()
}
const timeline = gsap.timeline({
    paused: true
})

timeline.from('.giant_title', {
    y: '100%',
    duration: 2,
    opacity: 0,
    ease: 'expo.out'
})

timeline.from('.giant_title2', {
    opacity: 0,
    duration: 1,
},
'-=1')

timeline.from('.editor', {
    duration: 0.8,
    opacity: 0,
    ease: 'power1.in'
},
'-=1')

// hero fade out
const timeline2 = gsap.timeline({
    paused: true
})

timeline2.to('.HERO', {
    opacity:0,
    duration: 1.6,
    ease: 'power4.out'
})

const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.HERO',
    duration: 1600,
    triggerHook: 0
})
.setTween(timeline2)
// .addIndicators()
.addTo(controller)

//section fade
const timeline3 = gsap.timeline({
    paused: true
})

timeline3.from('.image_fast', {
    opacity: 0,
    x: -200,
    y: 200,
    duration: 1,
    ease: 'power2.out'
})

timeline3.from('.perf_t1', {
    opacity: 0,
    y: '200%',
    duration: 1,
    ease: 'power2.out'

},
'-=1')

timeline3.from('.perf_t2', {
    opacity: 0,
    y: '200%',
    duration: 1,
    ease: 'power2.out'

},
'-=1')

timeline3.from('.perf_p', {
    opacity: 0,
    y: '200%',
    duration: 1,
    ease: 'power2.out'

},
'-=1')

timeline3.from('.move', {
    opacity: 0,
    y: '200%',
    duration: 1,
    ease: 'power2.out'

},
'-=0.7')

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.perf_wrapper',
    duration: 450,
    triggerHook: 0.6,
})
.setTween(timeline3)
// .addIndicators()
.addTo(controller)

const timeline4 = gsap.timeline({
    paused: true
})

timeline4.from('.icons', {
    opacity: 0,
    y: '200%',
    duration: 1,
    ease: 'power2.out'
})

timeline4.from('.icon_wrapper', {
    opacity: 0,
    x: 200,
    duration: 1,
    ease: 'power2.out'
},
'-=1')

timeline4.from('.tool_t1', {
    opacity: 0,
    y: '200%',
    duration: 1,
    ease: 'power2.out'
},
'-=1')

timeline4.from('.tool_t2', {
    opacity: 0,
    y: '200%',
    duration: 1,
    ease: 'power2.out'
},
'-=1')

timeline4.from('.tool_p', {
    opacity: 0,
    y: '200%',
    duration: 1,
    ease: 'power2.out'
},
'-=1')

timeline4.from('.move2', {
    opacity: 0,
    y: '200%',
    duration: 1,
    ease: 'power2.out'
},
'-=1')

const scene3 = new ScrollMagic.Scene({
    triggerElement: '.perf_link',
    duration: 450,
    triggerHook: 0.4,
})
.setTween(timeline4)
// .addIndicators()
.addTo(controller)