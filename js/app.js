(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!

	

	var toggleAll = $('#toggle-all');
	toggleAll.on('click', function(){
		$('.toggle').attr('checked', true);
		$('li').toggleClass('completed');
	});

	// var lists = $('li')

	// $('#clear-completed').on('click', function(){
	// 	$('#todo-list').remove(lists);
	// })

	$('#new-todo').keypress(function (e){
		if(e.keyCode==13){
		 
		}
		$(this).val().remove();
	});


	// 	$(document).ready(function(){
	// 	$('.toggle').on('click', function(){
	// 		$(this).attr('checked');
	// 	})
	// }); 

})(window);
