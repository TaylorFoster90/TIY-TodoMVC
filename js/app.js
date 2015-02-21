(function (window) {
    'use strict';

var tasks =[{
	content: "Taste Javascript",
	finished: true
},
{
	content: 'Buy a unicorn',
	finished: false
},
{
  content: 'Hello World',
  finished: false
}]

// Your starting point. Enjoy the ride!
  new Vue({
    el: '#todoapp',
    data: {
      tasks: tasks,
    },
    methods: {
    	remove: function(task){
        this.tasks.splice(this.tasks.indexOf(task), 1);
    	},
      clear: function(){
        this.tasks = _.filter(tasks, 'finished', false);
        }
      } 
  });
})(window);


console.log()