const PJ1_image_wrapper = document.querySelector('.PJ1_image_wrapper')
const PJ2_image_wrapper = document.querySelector('.PJ2_image_wrapper')
const move_title = document.querySelector('.move_title')

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

timeline2.from('.move_title2',{
    x: -200,
    ease: 'power4.out'
})

const timeline3 = gsap.timeline({
    paused: true
})

timeline3.to('.move_title',{
    x: 150,
})

const timeline4 = gsap.timeline({
    paused: true
})

timeline4.to('.move_title2',{
    x: -150,
})


window.addEventListener("load", setTimeout(anim_start, 300))

function PJ1_hover() {
    PJ1_image_wrapper.style.transform = "rotateY(30deg)"
    timeline3.play()
}

function PJ2_hover() {
    PJ2_image_wrapper.style.transform = "rotateY(-30deg)"
    timeline4.play()
}

function PJ1_hover_out() {
    PJ1_image_wrapper.style.transform = "initial"
    timeline3.reverse()
}

function PJ2_hover_out() {
    PJ2_image_wrapper.style.transform = "initial"
    timeline4.reverse()
}