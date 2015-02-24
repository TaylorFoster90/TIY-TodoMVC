(function (window) {
	'use strict';


var tasks = [ 
    {content: "Taste Javascript",
     finished:false,
     editing: false
    }, 
    
    {content:"Buy a Unicorn", 
     finished:false, 
     editing:false
    }
]
    
    
    
 new Vue ({
        el:'#todo-list',
        data: {
           tasks: tasks    
        },
        methods: { 
             edit: function(content) {
              content.editing = true; 
        },
             save: function(content) {
                content.editing=false;
                content.editing == this.content; 
                //Storing(this.tasks);
            }
    }
});   

//    function Storing(tasks) {
//    localStorage.setItem('tasks', JSON.stringify('tasks').content)};
  

})(window);


