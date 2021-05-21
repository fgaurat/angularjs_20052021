angular.module('todoList').component('theDate',{

    template:`
        <h1>TheDate</h1>
        {{data.time}}
        <button id="update1">update1</button>
        <button id="update2">update2</button>
        <button ng-click="updateDate()">update3</button>
        `,
    controller:function($scope,$interval){

        $scope.data = {time:new Date()}
        $scope.updateDate = function(){

            $scope.data.time = new Date()
        }
        document.getElementById('update1').addEventListener('click',function(){
            console.log("update1")
            $scope.$apply(function(){
                $scope.data.time = new Date()
            })
        })

        document.getElementById('update2').addEventListener('click',function(){
            console.log("update2")
            $scope.data.time = new Date()
            $scope.$digest()
        })


        $interval(function(){
            $scope.data.time = new Date()
        },1000)
        // setInterval(function(){
        //     $scope.$apply(function(){
        //         $scope.data.time = new Date()
        //         console.log($scope.data.time)
        //     })
        // },1000)
    }

})