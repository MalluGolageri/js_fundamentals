var a=['a','b','c','x','y','z'];
var result='\n';
for (var i in a){
	result+='index: '+i+', value: '+a[i] +'\n';
}

console.log(result);


var animals=['dog','cat','hen'];
animals.forEach(function(currentValue,index,array){

console.log(currentValue,index,array);
})();