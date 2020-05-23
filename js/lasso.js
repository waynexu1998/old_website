$(window).on("load",function(){
    setTimeout(function() {
        $(".load_page").fadeOut("slow");
        load_timeout()
    },1000)
 });

 window.onresize = function(){
    this.location.reload()
};