function func(){
	console.log("func declaration");
}
func();

var func=function(){
	console.log("func expression")
}
func();

var func=function namedFunc(){
	console.log("named function expression");
}
func();

(function(){
	console.log("iife");
})();

var func=new Function('arg1','arg2','console.log("object constructor")');
func('a','b');

var func= Function('arg1','arg2','arg3','console.log("object constructor")');
func('a','b');

var func=new function(){};
func.somename="myname";
console.log(func);
//func();