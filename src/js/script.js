const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});


//modal

$('[data-modal="consultation"]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
});
$('.modal__close').on('click', function() {
    $('.overlay, #consultation, #thanks').fadeOut('slow');
});







$('#consultation').validate();
$('#consultation_cont').validate();  


function validateForms(form){
    $(form).validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
        },
        messages: {
            name: {
                required: "Пожалуйста, введите свое имя",
                minlength: jQuery.validator.format("Введите более {0} символов!")
              },
            phone: "Пожалуйста, введите свой номер телефона",
        }
    });
};

validateForms('#consultation-form');
validateForms('#consultation form');


$('input[name=phone]').mask("+375 (99) 999-99-99");

$('form').submit(function(e) {
    e.preventDefault();
    
    if (!$(this).valid()) {
        return;
    }

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
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
    speed: 400,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 1500,
    swipeAngle: false

});

document.querySelector('.slick-prev').addEventListener('click', function () {
    slider.goTo('prev');
}); 
document.querySelector('.slick-next').addEventListener('click', function () {
    slider.goTo('next');

});




