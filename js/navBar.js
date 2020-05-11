const hamburger = document.querySelector('.navDash')
const hamburger2 = document.querySelector('.navDash2')
const overlay = document.querySelector('.navigation_overlay')

let menuOpen = false
const body = document.querySelector('body')


if(hamburger) {
    hamburger.addEventListener('click', () => {
        if(!menuOpen) {
            hamburger.classList.add('open')
            hamburger2.classList.add('open')
            menuOpen = true
            overlay.style.display = 'block'
            overlay.style.opacity = '1'
        } else {
            hamburger.classList.remove('open')
            menuOpen = false
        }
    })
}

if(hamburger2) {
    hamburger2.addEventListener('click', () => {
        if(!menuOpen) {
            menuOpen = true
        } else {
            hamburger2.classList.remove('open')
            hamburger.classList.remove('open')
            overlay.style.display = 'none'
            overlay.style.opacity = '0'
            menuOpen = false
        }
    })
}