

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

$('.owl-carousel').owlCarousel({    
    dots:true,
    
    responsive:{
        0:{
            items:1
        }
    }
})