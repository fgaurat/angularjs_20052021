// code legacy
const add = function(a,b){
    console.log('add',a,b)
    return a+b
}
//constructeur d'une class abstraite
var baseLogger = function(){
    this.count = 0
    this.log = function(msg){
        console.log(this.msgType+": "+this.count+" "+msg)
    }
}

var debugLogger = function(){};
debugLogger.prototype = new baseLogger()
debugLogger.prototype.msgType  ="Debug"

var errorLogger = function(){};
errorLogger.prototype = new baseLogger()
errorLogger.prototype.msgType  ="Error"

//code angularjs

angular.module('todoList').factory('addFactory',function(){
    console.log("factory")
    const inc = 2
    return add
})


angular.module('todoList').service('debugService',debugLogger)
angular.module('todoList').service('errorService',errorLogger)