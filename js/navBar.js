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
            setTimeout(delayed_fadein, 100)
        }
    })
}

if(hamburger2) {
    hamburger2.addEventListener('click', () => {
        if(menuOpen) {
            hamburger.classList.remove('open')
            overlay.style.opacity = '0'
            menuOpen = false
            setTimeout(delayed_fadeout, 600)
        }
    })
}

function delayed_fadein() {
    overlay.style.opacity = '1'
}

function delayed_fadeout() {
    overlay.style.display = 'none'
}