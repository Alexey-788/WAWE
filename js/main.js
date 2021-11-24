'use strict';

$(function() {

    $('.header__menu-icon').click(function() {
        // $('.header__menu-icon').toggleClass('header__menu-icon--active');
        $('.header__menu').toggleClass('header__menu--active');
    });


    document.getElementsByClassName("gallery__filter-button")[0].classList.add('gallery__filter-button--active');
    Array.from(document.getElementsByClassName("gallery__filter-button")).forEach(function(clickedItem) {
        clickedItem.onclick = function() {

            Array.from(document.getElementsByClassName("gallery__filter-button")).forEach(function(item) {
                item.classList.remove("gallery__filter-button--active");
            });

            clickedItem.classList.add("gallery__filter-button--active");

            let filterClass = Array.from(clickedItem.classList).filter(className => className.startsWith("filter--"))[0];
            
            Array.from(document.querySelectorAll(".gallery__photos-link")).forEach(function(link) {
                
                if (filterClass === 'filter--all') {
                    link.classList.remove('gallery__photos-link--disable');
                    link.setAttribute('data-fancybox', 'gallery');
                    link.classList.remove('disabled-link');
                } else {
                    if (!Array.from(link.classList)
                    .some(linkClass => linkClass === filterClass)) {
                        link.classList.add('gallery__photos-link--disable');
                        link.removeAttribute('data-fancybox');
                        link.classList.add('disabled-link');
                    } else {
                        link.classList.remove('gallery__photos-link--disable');
                        link.setAttribute('data-fancybox', 'gallery');
                        link.classList.remove('disabled-link');
                    }
                }
            });
        };
     });

     $('.blog__slider-inner').slick({
         arrows: false,
         dots: true,
     });

});