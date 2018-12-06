/*

function sum(a){
    return function(b){
        return a + b;
    }
}
console.log(sum(10)(20));

function sum(a){
    return function(b){
        //return a + b;
        return function(c){
            return a+b+c;
        }
    }
}
console.log(sum(10)(20)(30));
*/


/*
function sum(a){
    var sum= a;
    function f(b){
        sum+=b;
        return f;
    }

    f.toString=function(){
        return sum;
    }
    return f;
}

console.log(sum(1)(2) +"");
console.log(sum(5)(-1)(2) +"");*/


function makeArmy(){
    var shooters=[];
    for(var i=0;i<10;i++){
        var shooter=(function(x){
            return function(){
                console.log(x);
            }
        })(i);
       // shooters.push(shooter(i));
        shooters.push(shooter);
    }
    return shooters;
}

var army=makeArmy();
var shooter=army[0];
shooter();

shooter=army[5];
shooter();

shooter=army[9];
shooter();
