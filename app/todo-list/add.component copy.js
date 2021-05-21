angular.module('todoList').component('oneTime',{

    template:`
        <h1>TodoAdd</h1>
        result : {{$ctrl.result}}
        result1 : {{$ctrl.result1}}
        `,
    controller:function(addFactory,debugService,errorService){
        let a = 1
        this.result = addFactory(a,1)        
        this.result1 = addFactory(a,2)        
        debugService.log(this.result)
        errorService.log(this.result)
    }

})