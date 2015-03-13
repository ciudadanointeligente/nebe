(function ($) {
    "use strict";

    ///////////////////////////////////////////////////// Your
    var venueAddress = "Liber Bernardo O'Higgins 227, Santiago"; // Venue
    var placeName = "Centro Gabriela Mistral";
    /////////////////////////////////////////////////// Adress

    var fn = {

                // Launch Functions
            Launch: function () {
                    fn.MenuSticky();
                    fn.MainSliderAlign();
                    fn.MainSlider();
                    fn.Slider();
                },

                // Sticky Menu
            MenuSticky: function () {
                var menu = document.querySelector('#menu'),
                    origOffsetY = menu.offsetTop + 100;
                function scroll() {
                    if ($(window).scrollTop() >= origOffsetY) {
                        $('#menu').addClass('sticky');
                        $('#menu').removeClass('fixed');
                    } else {
                        $('#menu').removeClass('sticky');
                        $('#menu').addClass('fixed');
                    }
                }
                document.onscroll = scroll;
            },

                // One Page Navigation
            Navigation: function () {
                $('#menu').onePageNav({
                    currentClass: 'current',
                    scrollSpeed: 500,
                    scrollOffset: 60,
                    scrollThreshold: 0.2,
                    easing: 'swing'
                });
            },

        // Align Slider Horizontally
        MainSliderAlign: function () {
            var imageWidth, widthFix, container = $('.header-bg');
            function centerImage() {
                imageWidth = container.find('img').width();
                widthFix = imageWidth / 2;
                container.find('img').css('margin-left', -widthFix);
            }
            $(window).on("load resize", centerImage);
        },



        // Main FlexSlider
        MainSlider: function () {
            $(window).load(function () {
                $('.main-slider').flexslider({
                    noCSS: true,
                    touch: false,
                    controlNav: false,
                    directionNav: false,
                    animation: "fade",
                    start: function () {
                        $('#preloader').addClass('ready');
                    }
                });
            });
        },

        // FlexSlider
        Slider: function () {
            $('.flexslider').flexslider({
                noCSS: true,
                touch: false,
                directionNav: false,
                animation: "fade"
            });
        },


            };

        $(document).ready(function () {
            fn.Launch();
        });

    })(jQuery);