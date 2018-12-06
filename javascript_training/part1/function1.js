var a=1;
function b(){
	a=10;
	function a(){}
	return;
}

console.log(a);


var i=10;
i=i-'ta';
console.log(i);
if(typeof(i)==='number'){
	console.log("number");
}else{
	console.log('some thing ');
}

console.log(typeof(NaN));