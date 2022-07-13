const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});





const slider = tns({
    container: '.carousel__reboot',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    gutter: 10,
    mouseDrag: true,
    swipeAngle: false,
    speed: 400

});

document.querySelector('.slick-prev').addEventListener('click', function () {
    slider.goTo('prev');
}); 
document.querySelector('.slick-next').addEventListener('click', function () {
    slider.goTo('next');
});