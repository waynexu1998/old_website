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
const timeline = gsap.timeline()

timeline.from('.giant_title', {
    y: '100%',
    duration: 1.5,
    opacity: 0,
    ease: 'expo.out'
})

timeline.from('.giant_title2', {
    opacity: 0,
    duration: 0.5,
},
'-=0.5')

timeline.from('.navigation', {
    opacity: 0,
    duration:0.5,
},
'-=0.5')

timeline.from('.editor', {
    duration: 1,
    opacity: 0,
    ease: 'expo.out'
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
.addIndicators()
.addTo(controller)

//section fade
const timeline3 = gsap.timeline({
    paused: true
})

timeline3.from('.image_fast', {
    opacity: 0,
    x: -500,
    ease: 'expo.out'
})

const scene2 = new ScrollMagic.Scene({
    triggerElement: '.ME',
    duration: 300,
})
.setTween(timeline3)
.addIndicators()
.addTo(controller)