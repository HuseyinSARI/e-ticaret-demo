

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


    owl_slider.owlCarousel({
        loop: false,
        dots: false,
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 1
            },
            1200: {
                items: 1,
                dots: true
            }
        }
    })

    owl_slider.on("changed.owl.carousel", function (event) {
        var itemNumber = event.item.index;
        // console.log("slider index :" + itemNumber);

        // owl_slider, dots ile geçiş yapıldığını algılayıp autoplayTimeout'ı sıfırlamıyor. Bu bug'ı çözmek için böyle bir yol buldum.
        owl_slider.trigger('stop.owl.autoplay');
        owl_slider.trigger('play.owl.autoplay');

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

                break;
            case 1:
                $('.iki_img_main').addClass('my_slideInLeft');

                $('.iki_bir').addClass('my_slideInRight');
                $('.iki_iki').addClass('my_slideInUp');
                $('.iki_uc').addClass('my_fadeIn');

                break;
            case 2:
                $('.uc_img_main').addClass('my_anim_img_main');
                $('.uc_img').addClass('my_anim_img');

                $('.uc_bir').addClass('my_slideInRight');
                $('.uc_iki').addClass('my_slideInUp');
                $('.uc_uc').addClass('my_fadeIn');

                break;
            default:

                break;
        }

    })
})

// mobile menu search bar açma-kapama ve icon değiştirme
var search_icon = $('.mobile_search>i');
search_icon.click(function (event) {
    $('.mobile_searchBar').fadeToggle(function () {
        if ($('.mobile_searchBar').is(':visible')) {
            search_icon.removeClass('ec ec-search ');
            search_icon.addClass('ec ec-close-remove');
        } else {
            search_icon.removeClass('ec ec-close-remove');
            search_icon.addClass('ec ec-search');
        }
    });
});

// Countdown timer
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = seconds;


    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
