


// block-anim-swipe
// ===============================
window.onload = function() {
    document.querySelector('.main__block-one').classList.add('block_swipe');
    document.querySelector('.gallery').classList.add('block_swipe');
};

var lastScrollTop = 0;
window.addEventListener(
    "scroll",
    function() {
        let st = window.pageYOffset || document.documentElement.scrollTop; 
        if (st > 600) {
            document.querySelector('.about-text-btn').classList.add('block_swipe');
            document.querySelector('.about__about-img-scale').classList.add('block_swipe');
        } 
        if (st > 1200) {
            document.querySelector('.summer__summer-img-scale').classList.add('block_swipe');
            document.querySelector('.summer-title-btn').classList.add('block_swipe');
        } 
  }
);



// hide-mobil-menu-scroll
// ===============================
var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector('.nav-bar-mobil__btn').classList.remove('nav-bar-mobil__btn_hide');
            } else {
                document.querySelector('.nav-bar-mobil__btn').classList.add('nav-bar-mobil__btn_hide');
                document.querySelector('.nav-bar-mobil__menu-line_1').classList.remove('nav-bar-mobil__menu-line-swipe_0');
                document.querySelector('.nav-bar-mobil__menu-line_2').classList.remove('nav-bar-mobil__menu-line-swipe_0');
                document.querySelector('.nav-bar-mobil__menu-line_3').classList.remove('nav-bar-mobil__menu-line-swipe_0');
                document.querySelector('.nav-bar-mobil__menu-line_4').classList.remove('nav-bar-mobil__menu-line-swipe_0');

                document.querySelector('.btn__burger-line_first').classList.remove('btn__burger-line_first-rotate');
                document.querySelector('.btn__burger-line_third').classList.remove('btn__burger-line_third-rotate');
                document.querySelector('.btn__burger-line_second').classList.remove('btn__burger-line_second-opacity');
        }
        prevScrollpos = currentScrollPos;
    }



// mobil-menu-btn
// ===============================
document.querySelector('.nav-bar-mobil__btn').addEventListener('click', () => {
    document.querySelector('.nav-bar-mobil__menu-line_1').classList.toggle('nav-bar-mobil__menu-line-swipe_0');
    document.querySelector('.nav-bar-mobil__menu-line_2').classList.toggle('nav-bar-mobil__menu-line-swipe_0');
    document.querySelector('.nav-bar-mobil__menu-line_3').classList.toggle('nav-bar-mobil__menu-line-swipe_0');
    document.querySelector('.nav-bar-mobil__menu-line_4').classList.toggle('nav-bar-mobil__menu-line-swipe_0');

    document.querySelector('.btn__burger-line_first').classList.toggle('btn__burger-line_first-rotate');
    document.querySelector('.btn__burger-line_third').classList.toggle('btn__burger-line_third-rotate');
    document.querySelector('.btn__burger-line_second').classList.toggle('btn__burger-line_second-opacity');
});

document.querySelector('.nav-bar-mobil__menu-line_4').addEventListener('click', () => {
    document.querySelector('.nav-bar-mobil__menu-line_1').classList.remove('nav-bar-mobil__menu-line-swipe_0');
    document.querySelector('.nav-bar-mobil__menu-line_2').classList.remove('nav-bar-mobil__menu-line-swipe_0');
    document.querySelector('.nav-bar-mobil__menu-line_3').classList.remove('nav-bar-mobil__menu-line-swipe_0');
    document.querySelector('.nav-bar-mobil__menu-line_4').classList.remove('nav-bar-mobil__menu-line-swipe_0');

    document.querySelector('.btn__burger-line_first').classList.remove('btn__burger-line_first-rotate');
    document.querySelector('.btn__burger-line_third').classList.remove('btn__burger-line_third-rotate');
    document.querySelector('.btn__burger-line_second').classList.remove('btn__burger-line_second-opacity');
});




