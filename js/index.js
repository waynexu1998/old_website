const hamburger = document.querySelector('.navDash')
let menuOpen = false


if(hamburger) {
    hamburger.addEventListener('click', () => {
        if(!menuOpen) {
            hamburger.classList.add('open')
            menuOpen = true
        } else {
            hamburger.classList.remove('open')
            menuOpen = false
        }
    })
}

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

timeline.from('.navigation', {
    opacity: 0,
    duration: 2,
},
'-=1')

timeline.from('.editor', {
    duration: 2,
    opacity: 0,
    ease: 'expo.out'
},
'-=2')

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
.addIndicators()
.addTo(controller)

//section fade
const timeline3 = gsap.timeline({
    paused: true
})

timeline3.from('.image_fast', {
    opacity: 0,
    x: -200,
    duration: 1,
})

timeline3.from('.perf_t1', {
    opacity: 0,
    y: '100%',
    duration: 1,
},
'-=1')

timeline3.from('.perf_t2', {
    opacity: 0,
    y: '100%',
    duration: 1,
},
'-=1')

timeline3.from('.perf_p', {
    opacity: 0,
    y: '100%',
    duration: 1,
},
'-=1')

timeline3.from('.move', {
    opacity: 0,
    y: '100%',
    duration: 1,
})

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.perf_wrapper',
    duration: 350,
})
.setTween(timeline3)
.addIndicators()
.addTo(controller)