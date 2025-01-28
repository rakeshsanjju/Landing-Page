(function ($) {
    var defaults = {
        sm: 540,
        md: 720,
        lg: 960,
        xl: 1140,
        navbar_expand: 'lg'
    };
    $.fn.bootnavbar = function () {

        var screen_width = $(document).width();

        if (screen_width >= defaults.lg) {

            $(this).find('.dropdown').hover(function () {

                $(this).css({
                    'margin-top': '0px', 'opacity': '1',
                    'visibility': 'visible'
                });


                $(this).find('.dropdown-menu')
                    .first()
                    .css({
                        'margin-top': '0px', 'opacity': '1',
                        'visibility': 'visible', 'display': 'block'
                    })
                    .one('animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd', function () {
                        css({
                            'margin-top': '0px', 'opacity': '1',
                            'visibility': 'visible', 'display': 'block'
                        })
                    });
            }, function () {

                $(this).find('.dropdown-menu').first().css({
                    'margin-top': '50px', 'opacity': '0',
                    'visibility': 'hidden', 'display': 'block'
                });
            });
            $(this).find('.dropdown a').on('click', function (e) {
                // on click visit href if hred is not #
                if ($(this).attr('href') !== '#') {
                    window.location = $(this).attr('href');
                }
                console.log('click');
            });
        }

        $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
            if (!$(this).next().hasClass('show')) {
                $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
                // on click visit href if hred is not #
                if ($(this).attr('href') !== '#') {
                    window.location = $(this).attr('href');
                }
                console.log();
            }
            var $subMenu = $(this).next(".dropdown-menu");
            $subMenu.toggleClass('show');

            $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
                $('.dropdown-submenu .show').removeClass("show");
            });

            return false;
        });
    };
})(jQuery);