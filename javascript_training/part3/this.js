
function f1(){
	var a=1;
	f2();
}

function f2(){
	return this.a;
}

console.log(f1());