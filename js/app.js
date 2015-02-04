(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	

	var toggleAll = $('#toggle-all');
	toggleAll.on('click', function(){
		$('.toggle').attr('checked', true);
		$('li').toggleClass('completed');
	});



	// 	$(document).ready(function(){
	// 	$('.toggle').on('click', function(){
	// 		$(this).attr('checked');
	// 	})
	// }); 

})(window);
