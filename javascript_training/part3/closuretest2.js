function inc(){
    var i=0;
    return function(){
        return ++i;//1
    }
}
//counter1=function(){
//    return ++i;//1
//}
var counter1=inc();
//console.log(a);
//console.log(counter1());
//console.log(counter1());




for(var i=0;i<5;i++){
    console.log(counter1());
}

