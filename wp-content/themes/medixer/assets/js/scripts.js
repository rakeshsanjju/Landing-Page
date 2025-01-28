// ==================================================
// Project Name  :  Medixer
// File          :  JS Base
// Version       :  2.0
// Last change   :  1 April 2020
// Author        :  Codeixer (https://themeforest.net/user/codeixer)
// Developer:    :  Codeixer
// ==================================================


(function ($) {
    "use strict";

    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $(".sticky-menu").addClass('stick-me');
            setTimeout(() => {
                $(".stick-me").css('top', '0');
            }, 500);
        } else {
            $(".sticky-menu").removeClass('stick-me').removeAttr("style");;


        }
    }); // Sticky Menu

    $(document).ready(function () {

        setTimeout(() => {
            // masoney grid layout - start
            // --------------------------------------------------
            var $grid = $('.content-area.layout-grid').imagesLoaded(function () {
                $grid.masonry({
                    itemSelector: '.grid',
                    percentPosition: true,
                    columnWidth: '.grid-sizer'
                });
            });
            // masoney grid layout - end
            // --------------------------------------------------


        }, 300);

        $("li.cix-sidemenu-submenu > a").replaceWith(function () {
            return $('<button/>', {
                html: $(this).html()
            });
        });
        $(".ci-header-menu").bootnavbar();






    });

    var slicktInit = function ($scope, $) {
        $('.cix-slick-slider').slick({
            nextArrow: '<div class="ci-slider-next"><i class="ti-arrow-right"></i></div>',
            prevArrow: '<div class="ci-slider-prev"><i class="ti-arrow-left"></i></div>',
        });
    }

    var testimonalslicktInit = function ($scope, $) {
        $('.ci-testimonial-carousel').slick({

            nextArrow: '<div class="ci-slider-next"><i class="ti-arrow-right"></i></div>',
            prevArrow: '<div class="ci-slider-prev"><i class="ti-arrow-left"></i></div>',
        });
    }

    var logoslicktInit = function ($scope, $) {
        $('.ci-logo-carousel').slick({

            nextArrow: '<div class="ci-slider-next"><i class="ti-arrow-right"></i></div>',
            prevArrow: '<div class="ci-slider-prev"><i class="ti-arrow-left"></i></div>',
        });
    }

    var ci_cf7Init = function ($scope, $) {

        if ($scope.find('.wpcf7-select')) {
            $scope.find('.wpcf7-select').niceSelect();
        }
    }
    var CiHeroSlider = function ($scope, $) {
        let selector = `.elementor-element-${$scope[0].dataset.id}`;
        console.log(selector);
        // Make sure our widget is ready
        const mainSelector = window.document.querySelector(`${selector} .ci-hero-slider`);
        const iconHoverAnimation = 'elementor-animation-' + mainSelector.dataset.iconHoverAnimation

        $('.ci-hero-slider').on('init', function (event, slick) {
            $(this).find('.container').removeClass('no-opcity');
            $(this).find('.ci-heading').addClass('activate fadeIn');
            $(this).find('.lead').addClass('activate fadeIn');
            $(this).find('.btn').addClass('activate fadeInUp');
            $(this).find('.ci-sub-heading').addClass('activate fadeInDown');


        });
        $('.ci-hero-slider').slick({
            nextArrow: '<div class="ci-slider-next ' + iconHoverAnimation + ' "><i class="ti-angle-right"></i></div>',
            prevArrow: '<div class="ci-slider-prev ' + iconHoverAnimation + '"><i class="ti-angle-left"></i></div>',
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        arrows: false,
                    }
                }
            ]
            
        });

        $('.ci-hero-slider').on('afterChange', function (event, slick, currentSlide) {
            $(this).find('.container').removeClass('no-opcity');

            $(this).find('.ci-heading').addClass('activate fadeIn');
            $(this).find('.lead').addClass('activate fadeIn');
            $(this).find('.btn').addClass('activate fadeInUp');
            $(this).find('.ci-sub-heading').addClass('activate fadeInDown');


        });

        $('.ci-hero-slider').on('beforeChange', function (event, slick, currentSlide) {
            $(this).find('.container').addClass('no-opcity');
            $(this).find('.ci-heading').removeClass('activate fadeIn');
            $(this).find('.lead').removeClass('activate fadeIn');
            $(this).find('.btn').removeClass('activate fadeInUp');
            $(this).find('.ci-sub-heading').removeClass('activate fadeInDown');

        });

    };








    // Make sure you run this code under Elementor.
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ci_hero_slider.default', CiHeroSlider);
    });
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/medixer_course.default', slicktInit);
    });
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ci_testimonal.default', testimonalslicktInit);
    });
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ci_logo_carousel.default', logoslicktInit);
    });
    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/ci_cf7.default', ci_cf7Init);
    });




})(jQuery);


!function (e) { function n(e, n) { var t = e.findIndex(function (e) { return "addNew" === e.name }); return e[t].actions.push({ name: "euis-add-nested-section", title: "Add Nested Section", icon: "eicon-clone", callback: function () { !function (e) { var n = e.getContainer().view; "column" === n.getElementType() && n.addElement({ elType: "section", isInner: !0, settings: {}, elements: [{ id: elementor.helpers.getUniqueID(), elType: "column", isInner: !0, settings: { _column_size: 100 }, elements: [] }] }) }(n) }, isEnabled: function () { return !0 } }), e } jQuery(document).ready(function () { window.elementor && (elementor.hooks.addFilter("element/view", function (e, n) { return "column" === n.get("elType") ? e.extend({ getContextMenuGroups: function () { return e.prototype.getContextMenuGroups.apply(this, arguments) } }) : e }), elementor.hooks.addFilter("elements/column/contextMenuGroups", n)) }) }();