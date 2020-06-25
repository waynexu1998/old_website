const hamburger = document.querySelector('.navDash')
const hamburger2 = document.querySelector('.navDash2')
const overlay = document.querySelector('.navigation_overlay')

let menuOpen = false
const body = document.querySelector('body')


if(hamburger) {
    hamburger.addEventListener('click', () => {
        if(!menuOpen) {
            hamburger.classList.add('open')
            overlay.classList.add('menu_open')
            menuOpen = true
            overlay.style.opacity = '1'
        }else {
            hamburger.classList.remove('open')
            overlay.classList.remove('menu_open')
            menuOpen = false
            overlay.style.opacity = '0.5'
        }
    })
}

function delayed_fadein() {
    overlay.style.opacity = '1'
}
