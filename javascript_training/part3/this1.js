"use strict";
var x=(function(){
	return function(){
		console.log(this);
	}
})();

x();

