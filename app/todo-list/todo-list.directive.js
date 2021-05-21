angular.module("todoList").directive("todoList", function () {
  return {
    restrict: "E",
    templateUrl: "app/todo-list/todo-list.directive.html",
  };
});
