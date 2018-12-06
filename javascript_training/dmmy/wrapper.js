//"use strict";

var str="string me";
str.eat="ate";
var a={

}
a.eat="i ate food";
console.log(typeof str,str.eat);
//console.log(typeof  a, a, a.eat);



var str="string me";
str=str.toUpperCase();
console.log(typeof str,str)


var str = new String("string me");
//str=str +"Oye";
str.added ="new property";
console.log(typeof str,str.added);

var str = String("string me");
//str=str +"Oye";
str.added ="new property";
console.log(typeof str,str.added);

var x=1;
var y= new Number(1);
console.log(typeof x);
console.log(typeof y);

console.log(x==y);
console.log(x===y);

console.log(new Date().valueOf());


var x={
	num:2
	,valueOf: function(){
		return this.num * 2;
	}
};

var y= {
	num:3
	,valueOf:function(){
		return this.num * 2;
	}
};

console.log(x + y);

var myFalse =  Boolean(false);
var g = new Boolean(myFalse);
console.log(g,myFalse);




