function anim_start() {
    timeline.play()
    timeline2.play()
}

const timeline = gsap.timeline({
    paused: true
})

timeline.from('.move_title',{
    x: 200,
    ease: 'power4.out'

})


const timeline2 = gsap.timeline({
    paused: true
})

timeline.from('.move_title2',{
    x: -200,
    ease: 'power4.out'
})

window.addEventListener("load", setTimeout(anim_start, 300))