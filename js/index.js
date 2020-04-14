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

const timeline = gsap.timeline({
    pasuded: true
})

timeline.from('.giant_title', {
    y: '100%',
    duration: 1,
    opacity: 0,
    ease: 'power4.in'
})

timeline.from('.giant_title2', {
    opacity: 0,
    duration: 0.5
})

timeline.from('.navigation', {
    opacity: 0,
    duration:0.5
},
'-=0.5')

timeline.from('.editor', {
    duration: 0.5,
    opacity: 0,
    ease: 'power4.in'
},
'-=0.2')