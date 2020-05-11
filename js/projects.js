const hamburger = document.querySelector('.navDash')
let menuOpen = false
const body = document.querySelector('body')


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
