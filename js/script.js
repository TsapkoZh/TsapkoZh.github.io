// blockAnimSwipe
// ===============================
window.onload = function() {
    document.querySelector('.js-main__heroes-bike').classList.add('block_swipe');
    document.querySelector('.js-main__gallery').classList.add('block_swipe');
};

// mobilMenuScroll
// ===============================
window.addEventListener('scroll', throttle(handleScroll, 100), false);

function throttle(fn, wait) {
    let time = Date.now();
    return function() {
      if ((time + wait - Date.now()) < 0) {
        fn();
        time = Date.now();
      }
    }
  }

let prevScrollPos = window.pageYOffset;

function handleScrollAnimation(currentScrollPos) {
     if (currentScrollPos > 600) {
        document.querySelector('.js-about__about-text-btn').classList.add('block_swipe');
        document.querySelector('.js-about__about-img-scale').classList.add('block_swipe');
    }
    if (currentScrollPos > 1200) {
        document.querySelector('.js-summer__summer-img-scale').classList.add('block_swipe');
        document.querySelector('.js-summer__summer-title-btn').classList.add('block_swipe');
    }
}

function handleHiddenMenu(currentScrollPos) {
    if (prevScrollPos > currentScrollPos) {
        document.querySelector('.js-nav-bar-mobil__btn-wrapper').classList.remove('nav-bar-mobil__btn-wrapper_hide');
    } else {
        document.querySelector('.js-nav-bar-mobil__btn-wrapper').classList.add('nav-bar-mobil__btn-wrapper_hide');
        document.querySelector('.js-nav-bar-mobil__menu-lines').classList.remove('nav-bar-mobil__menu-line_swipe');
        document.querySelector('.js-nav-bar-mobil__burger-icon').classList.remove('nav-bar-mobil__burger-icon_active');
    }
}

function handleScroll() {
    const currentScrollPos = window.pageYOffset;

    handleHiddenMenu(currentScrollPos);
    handleScrollAnimation(currentScrollPos);

    prevScrollPos = currentScrollPos;
};

// mobilMenuBtn
// ===============================
document.querySelector('.js-nav-bar-mobil__btn').addEventListener('click', function() {
    document.querySelector('.js-nav-bar-mobil__menu-lines').classList.toggle('nav-bar-mobil__menu-line_swipe');
    document.querySelector('.js-nav-bar-mobil__burger-icon').classList.toggle('nav-bar-mobil__burger-icon_active');
});

document.querySelector('.js-nav-bar-mobil__menu-line_4').addEventListener('click', function() {
    document.querySelector('.js-nav-bar-mobil__menu-lines').classList.remove('nav-bar-mobil__menu-line_swipe');
    document.querySelector('.js-nav-bar-mobil__burger-icon').classList.remove('nav-bar-mobil__burger-icon_active');
})
