$(window).on("load",function(){
    setTimeout(function() {
        $(".load_page").fadeOut("slow");
        AOS.refresh()
    },1000)
 });

//  window.onresize = function(){
//     this.location.reload()
// };

let pic_positionX = 0;
let pic_positionY = 0;
let lastX = 0
let lastY = 0
const lasso_img = document.querySelector(".lasso_img");

const lerp = (a, b, n) => {
  return (1 - n) * a + n * b;
};

const initImage = () => {
    // add listener to track the current mouse position
    document.addEventListener("mousemove", e => {
      pic_positionX = e.clientX-lasso_img.offsetWidth/2;
      pic_positionY = e.clientY-lasso_img.offsetHeight/2;
    });
    
    // transform the innerCursor to the current mouse position
    // use requestAnimationFrame() for smooth performance
    const render = () => {
      lastX = lerp(lastX, pic_positionX, 0.3)
      lastY = lerp(lastY, pic_positionY, 0.3)
      lasso_img.style.transform = `translate(${lastX}px, ${lastY}px)`;
      // if you are already using TweenMax in your project, you might as well
      // use TweenMax.set() instead
      // TweenMax.set(innerCursor, {
      //   x: clientX,
      //   y: clientY
      // });
      
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
  };

  initImage()

  const hover2008 = () => {
    lasso_img.src = './static/lasso_old.jpg'
    lasso_img.style.display = 'block'
    setTimeout(function(){
      lasso_img.style.opacity = '1'
    }, 50)
  }

  const leavehover = () => {
    lasso_img.style.opacity = '0'
    setTimeout(function(){
      lasso_img.style.display = 'none'
    }, 50)
  }

  const hover2020 = () => {
    lasso_img.src = './static/iphone.png'
    lasso_img.style.display = 'block'
    setTimeout(function(){
      lasso_img.style.opacity = '1'
    }, 50)
  }


  //AOS init and config
  AOS.init({
    once: true,
    startEvent: 'load',
  })