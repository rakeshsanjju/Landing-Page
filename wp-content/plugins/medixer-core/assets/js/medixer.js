(function ($) {
	"use strict";

	var MedixerNav = function ($scope, $) {

		$scope.find( '.medixer-main-header' ).each(
			function () {

				var settings = $( this ).data( 'medixer' );

				$( '.medixer-open_mobile_menu' ).on(
					"click",
					function () {
						$( '.medixer-mobile_menu_wrap' ).toggleClass( "mobile_menu_on" );
					}
				);
				$( '.medixer-open_mobile_menu' ).on(
					'click',
					function () {
						$( 'body' ).toggleClass( 'mobile_menu_overlay_on' );
					}
				);
				if ($( '.medixer-mobile_menu li.dropdown ul' ).length) {
					$( '.medixer-mobile_menu li.dropdown' ).append( '<div class="dropdown-btn"><span class="ti-angle-down"></span></div>' );
					$( '.medixer-mobile_menu li.dropdown .dropdown-btn' ).on(
						'click',
						function () {
							$( this ).prev( 'ul' ).slideToggle( 500 );
						}
					);
				}

			}
		);

	};

	$( window ).on(
		'elementor/frontend/init',
		function () {

			if (elementorFrontend.isEditMode()) {

				elementorFrontend.hooks.addAction( 'frontend/element_ready/medixer-nav.default', MedixerNav );

			} else {
				elementorFrontend.hooks.addAction( 'frontend/element_ready/medixer-nav.default', MedixerNav );

			}
		}
	);
	console.log( 'Medixer Elements JS' )
})( jQuery );
