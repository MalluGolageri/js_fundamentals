//"use strict"
/*var item=[];
function foo(){
	for(var i=0;i<10;i++){
		item[i]=function(){
		return i*i;
		}()
	}
	return item;
}

var x=foo();
var i=5;
for(var i in x){
//		console.log(x[i]);	
}

(function(){
	//var a=b=c=5;
}());

(function() {
   //'use strict';
   var a =b = 6;
})();
//console.log(b);
*/



var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
      //	console.log(this.fullname);
         return this.fullname;         
      }      
   },
   another:{
   		myname:'abc',
   		getMyName: function(){
   			return this.myname;
   		}
   }
   
};
 
 console.log(obj.prop.getFullname());

 console.log(obj.another.getMyName());
var test = obj.prop.getFullname;
console.log(test.call(obj.prop));
 /*
console.log(obj.prop.getFullname());
var test = obj.prop.getFullname;
console.log(obj.fullname);
console.log(obj.prop.fullname);
console.log(this.fullname);
console.log(test());
*/