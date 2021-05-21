angular.module("todoList").directive('todoItem',function(){
    return{
        restrict:'A',
        scope:{
            todoItem:"=todo"
        },
        templateUrl: "app/todo-list/todo-item.directive.html",
    }

})