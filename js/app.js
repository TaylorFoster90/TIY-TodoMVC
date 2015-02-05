(function (window) {
    'use strict';

    // Your starting point. Enjoy the ride!
    $(document).ready(function(){
        $('#new-todo').on('keypress', function (e) {
            if(e.which == 13) {
                var newTask = $('#new-todo').val();
                console.log(newTask);
                var newItem = '<li><div class="view"><input class="toggle" type="checkbox"><label>' + newTask + '</label><button class="destroy"></button></div><input class="edit" value="'+ newTask +'"></li>';
                        $('#todo-list').append(newItem);
                    $('#new-todo').val('');

            }
   
        });
    });

//function delete_task() {
//  $('button.destroy').on ('click',function(){
//    var current_element = $(this);
//    var id = $(this).attr('id');
//  });

//function remover(){
//$("button.destroy").on('click',function(){
//        $(this).remove();
//}
//});
//var toggleAll = $('#toggle-all');
//    toggleAll.on('click', function(){
//        $('.toggle').attr('checked', true);
//        $('li').toggleClass('completed');
//
//    });

})(window);






    //     $(document).ready(function(){
    //     $('.toggle').on('click', function(){
    //         $(this).attr('checked');
    //     })
    // });

