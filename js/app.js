(function (window) {
    'use strict';

var tasks =[{
    content: "Taste Javascript",
    finished: true
},
{
    content: 'Buy a unicorn',
    finished: false
}]

// Your starting point. Enjoy the ride!
  new Vue({
    el: '#todoapp',
    data: {
      todos: tasks,
    },
    methods: {
        remove: function(task){
            task.splice(this)
        }
    }
  });
})(window);
