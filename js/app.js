(function (window) {
	'use strict';



    
    
 new Vue ({
        el:'#todo-list',
        data: {
            contents: [
                {name: "Taste Javascript", checked:false, editing: false}, 
                {name:"Buy a Unicorn", checked:false, editing:false}],
        },
     
        methods:{ 
             edit: function(content) {
              content.editing = true; 
            
          },
        }
});   



})(window);


