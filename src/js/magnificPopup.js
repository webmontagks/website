/**
 * Init for magnific popup.
 */
$(function() {
	'use strict';
	console.log('domready');
	$('.popup').magnificPopup({
		type: 'ajax',
		callbacks: {
			close: function() {
				$('#validate, #locale').remove();
			}
		}
	});
});
