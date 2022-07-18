

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new bootstrap.Dropdown(dropdownToggleEl));

dropdownList.forEach(d => {

    // if (d._element.classList.contains('huseyin-drop')) {
    //    
    // }
    d._element.addEventListener('hide.bs.dropdown', event => {
        event.preventDefault();
        const menu = d._menu;
        menu.addEventListener('transitionend', te);

        function te() {
            d._element.classList.remove('show')
            menu.classList.remove('show')
            menu.classList.remove('drop-out');
            menu.removeAttribute('style');
            menu.removeEventListener('transitionend', te);
        }
        menu.classList.add('drop-out')
    })
})

$(document).ready(function () {
    var owl_slider = $('.owl-carousel');

    $('.bir_bir').addClass('animate__animated animate__fadeIn');
    $('.bir_iki').addClass('animate__animated animate__fadeIn');
    $('.bir_uc').addClass('animate__animated animate__fadeIn');
    $('.bir_dort').addClass('animate__animated animate__fadeIn');
    $('.bir_bes').addClass('animate__animated animate__fadeIn');
    $('.owl_img_main').addClass('my_anim_img_main');
    $('.owl_img').addClass('my_anim_img');
    setTimeout(function () {
        $(".item_field").css("visibility", "visible");
    }, 799);


    owl_slider.owlCarousel({
        loop: true,
        dots: false,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout :10000,        
        responsive: {
            0: {
                items: 1
            },
            1200: {
                items: 1,
                dots:true
            }
        }
    })

    owl_slider.on("changed.owl.carousel", function (event) {
        var itemNumber = event.page.index;

        // $('.item_field').css("visibility", "hidden");


        $('.bir_bir').removeClass('animate__animated animate__fadeIn');
        $('.bir_iki').removeClass('animate__animated animate__fadeIn');
        $('.bir_uc').removeClass('animate__animated animate__fadeIn');
        $('.bir_dort').removeClass('animate__animated animate__fadeIn');
        $('.bir_bes').removeClass('animate__animated animate__fadeIn');
        $('.bir_img_main').removeClass('my_anim_img_main');
        $('.bir_img').removeClass('my_anim_img');

        $('.iki_img_main').removeClass('my_slideInLeft');
        $('.iki_bir').removeClass('my_slideInRight')
        $('.iki_iki').removeClass('my_slideInUp');
        $('.iki_uc').removeClass('my_fadeIn');

        $('.uc_img_main').removeClass('my_anim_img_main');
        $('.uc_img').removeClass('my_anim_img');
        $('.uc_bir').removeClass('my_slideInRight')
        $('.uc_iki').removeClass('my_slideInUp');
        $('.uc_uc').removeClass('my_fadeIn');

        switch (itemNumber) {
            case 0:

                $('.bir_bir').addClass('animate__animated animate__fadeIn');
                $('.bir_iki').addClass('animate__animated animate__fadeIn');
                $('.bir_uc').addClass('animate__animated animate__fadeIn');
                $('.bir_dort').addClass('animate__animated animate__fadeIn');
                $('.bir_bes').addClass('animate__animated animate__fadeIn');

                $('.bir_img_main').addClass('my_anim_img_main');
                $('.bir_img').addClass('my_anim_img');

                // setTimeout(function () {
                //     $(".item_field").css("visibility", "visible");
                // }, 799);

                break;
            case 1:

                $('.iki_img_main').addClass('my_slideInLeft');

                $('.iki_bir').addClass('my_slideInRight');
                $('.iki_iki').addClass('my_slideInUp');
                $('.iki_uc').addClass('my_fadeIn');


                // setTimeout(function () {
                //     $(".item_field").css("visibility", "visible");
                // }, 799);

                break;
            case 2:
                $('.uc_img_main').addClass('my_anim_img_main');
                $('.uc_img').addClass('my_anim_img');

                $('.uc_bir').addClass('my_slideInRight');
                $('.uc_iki').addClass('my_slideInUp');
                $('.uc_uc').addClass('my_fadeIn');

                // setTimeout(function () {
                //     $(".item_field").css("visibility", "visible");
                // }, 799);

                break;
            default:
                // setTimeout(function () {
                //     $(".item_field").css("visibility", "visible");
                // }, 799);
                break;
        }

    })
})
