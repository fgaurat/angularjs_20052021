angular.module('todoList').directive('todoList',function(){

    return {
      template:`
      <table class="table ">
      <thead>
        <tr>
          <th>#</th>
          <th>title</th>
          <th>completed</th>
          <th>dueDate</th>
        </tr>
      </thead>
  
      <tbody>
        <tr ng-repeat="todo in todos">
            <td>{{todo.id}}</td>
            <td>{{todo.title}}</td>
            <td>{{todo.completed}}</td>
            <td>{{todo.dueDate | date}}</td>
        </tr>
      </tbody>
    </table>    
      `
    }
  
  })