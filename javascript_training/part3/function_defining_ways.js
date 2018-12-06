//1
function func(){
	console.log("func declaration");
}
func();

//2
var func=function(){
	console.log("func expression")
}
func();

//3
var func=function namedFunc(){
	console.log("named function expression");
}
func();

//4
(function(){
	console.log("iife");
})();

//5
var func=new Function('arg1','arg2','console.log("object constructor")');
func('a','b');

//6
var func= Function('arg1','arg2','arg3','console.log("object constructor")');
func('a','b');

//7
var func=new function(){console.log("Oye");};
func.somename="myname";
console.log(func);
//func();

// grouping 1
(function(){
	console.log("iife");
})();

//2
!function(){}();

//3
var o={
	bar:function(){
		return "barz";
	}()
};

//4
function me(){
	me={};	
}
