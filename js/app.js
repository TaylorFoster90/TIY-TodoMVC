(function (window) {
    'use strict';

var tasks =[{
	content: "Taste Javascript",
	finished: true
},
{
	content: 'Buy a unicorn',
	finished: false,
  edit: false
},
{
  content: 'Hello World',
  finished: false,
  edit: false
}]

// Your starting point. Enjoy the ride!
  new Vue({
    el: '#todoapp',
    data: {
      tasks: tasks,
      //initially set to view all items
      activeFilter: 'all',
      //filter the items by completion status
      filters: {
        all: function () {
          return true;
        },
        active: function (tasks) {
          return !tasks.finished;
        },
        completed: function (tasks) {
          return tasks.finished;
        }    
     }   
    },
    methods: {
      //remove tasks
    	remove: function(task){
        this.tasks.splice(this.tasks.indexOf(task), 1);
    	},

      //add some tasks
      addTask: function(tasks){
        var value  = this.newTask;
        //prevent user from adding empty items to list
        if (!value) {
          return;
        }
        this.tasks.push({ content: value, finished: false })
        this.newTask = '';
      },
      clearDone: function () {
                this.tasks = this.tasks.filter(this.filters.active);
            }
      
]
    
	// var lists = $('li')

	// $('#clear-completed').on('click', function(){
	// 	$('#todo-list').remove(lists);
	// })

	$('#new-todo').keypress(function (e){
		if(e.keyCode==13){
		 
		}
		$(this).val().remove();
    
    
    },
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
    
    filters: {
      //filter the items on the list by completion
      filterTasks: function (tasks) {
        return tasks.filter(this.filters[this.activeFilter]);
            }
        },
    
    computed: {
      //calculate the number of active items left to do
      itemsLeft: function () {
      return this.tasks.filter(this.filters.active).length;
      }
      
    }    
  
  });

})(window);

