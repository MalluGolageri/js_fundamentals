var name="global";
function outer(){
	this.name="outer var";

	return function(){
		return this.name;
	};
}

var o=new outer();
console.log(o());

function C(){
	this.name="constructor";
}
var a=new C();
console.log(a.name);