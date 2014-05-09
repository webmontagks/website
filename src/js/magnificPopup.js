/**
 * Init for magnific popup.
 */
$(function() {
	'use strict';
	$('.popup').magnificPopup({
		type: 'ajax',
		enableEscapeKey: false,
		callbacks: {
			close: function() {
				$('#validate, #locale').remove();
			}
		}
	});
});
