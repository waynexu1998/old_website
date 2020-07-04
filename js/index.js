const video = document.querySelector(".video")
const title = document.querySelector(".HERO_title")

$(window).on("load",function(){
    setTimeout(function() {
        $(".load_page").fadeOut("slow");
        video.play()
        timeline.play()
        AOS.refresh()
    },1000)
});


  //AOS init and config
AOS.init({
    once: true,
    easing: 'ease-out-quad',
    startEvent: 'load',
})

const timeline = gsap.timeline({
    paused:true,
})

timeline.from(title, {
    y: '100%',
    ease: 'power.out',
    duration: 2,
})