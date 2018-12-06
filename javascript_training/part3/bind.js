//when function declaration
function Menu(elem){
	var privateMethod=function(){
		console.log(this);
	}.bind(this);
}
Menu();
new Menu();

//when invoking function late binding

function Menu(elem){
	var privateMethod=function(){
		console.log(this);
	}
	var pm=privateMethod.bind(this);
	pm();
}
var m=new Menu();

//currying
var sum=function(a,b){
	return a+b;
}
var add5=sum.bind(null,5);
console.log(add5(10));