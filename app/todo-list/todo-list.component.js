angular.module("todoList").component("todoList",{ 
    restrict: "E",
    templateUrl: "app/todo-list/todo-list.component.html",
    controller: function TodosController($http) {
      $http.get('http://localhost:3001/todos').then(
          response=>this.todos = response.data,
          err=>console.log(err)
          )
    }
  });
