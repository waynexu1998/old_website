const video = document.querySelector(".video")

$(window).on("load",function(){
    setTimeout(function() {
        $(".load_page").fadeOut("slow");
        video.play()
    },1000)
});