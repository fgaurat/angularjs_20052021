angular.module("todoList").component("todoList",{ 
    restrict: "E",
    templateUrl: "app/todo-list/todo-list.component.html",
    controller: ['$http','addFactory','$log',function(a,b,c) {
      b(5,7)
      c.log("un message")
      a.get('http://localhost:3001/todos').then(
          response=>this.todos = response.data,
          err=>console.log(err)
          )
    }]
  });
