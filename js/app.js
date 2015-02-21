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
      activeFilter: 'all',
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
    	remove: function(task){
        this.tasks.splice(this.tasks.indexOf(task), 1);
    	},
    
      addTask: function(tasks){
        var value  = this.newTask;
        if (!value) {
          return;
        }
        this.tasks.push({ content: value, finished: false })
        this.newTask = '';
      }
    },

    filters: {
      filterTasks: function (tasks) {

        return tasks.filter(this.filters[this.activeFilter]);
            }
        }
  
  });

})(window);