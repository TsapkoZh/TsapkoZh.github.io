


// block-anim-swipe
// ===============================
window.onload = function() {
    document.querySelector('.js-main__heroes-bike').classList.add('block_swipe');
    document.querySelector('.js-main__gallery').classList.add('block_swipe');
};

var lastScrollTop = 0;
window.addEventListener(
    "scroll",
    function() {
        let st = window.pageYOffset || document.documentElement.scrollTop; 
        if (st > 600) {
            document.querySelector('.js-about__about-text-btn').classList.add('block_swipe');
            document.querySelector('.js-about__about-img-scale').classList.add('block_swipe');
        } 
        if (st > 1200) {
            document.querySelector('.js-summer__summer-img-scale').classList.add('block_swipe');
            document.querySelector('.js-summer__summer-title-btn').classList.add('block_swipe');
        } 
    }
);



// hide-mobil-menu-scroll
// ===============================
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector('.js-nav-bar-mobil__btn-wrapper').classList.remove('nav-bar-mobil__btn-wrapper_hide');
        } else {
            document.querySelector('.js-nav-bar-mobil__btn-wrapper').classList.add('nav-bar-mobil__btn-wrapper_hide');
            document.querySelector('.js-nav-bar-mobil__menu-lines').classList.remove('nav-bar-mobil__menu-line_swipe');
            document.querySelector('.js-nav-bar-mobil__burger-icon').classList.remove('nav-bar-mobil__burger-icon_active');
    }
    prevScrollpos = currentScrollPos;
}



// mobil-menu-btn
// ===============================
document.querySelector('.js-nav-bar-mobil__btn').addEventListener('click', () => {
    document.querySelector('.js-nav-bar-mobil__menu-lines').classList.toggle('nav-bar-mobil__menu-line_swipe');
    document.querySelector('.js-nav-bar-mobil__burger-icon').classList.toggle('nav-bar-mobil__burger-icon_active');
});

document.querySelector('.js-nav-bar-mobil__menu-line_4').addEventListener('click', () => {
    document.querySelector('.js-nav-bar-mobil__menu-lines').classList.remove('nav-bar-mobil__menu-line_swipe');
    document.querySelector('.js-nav-bar-mobil__burger-icon').classList.remove('nav-bar-mobil__burger-icon_active');
});
