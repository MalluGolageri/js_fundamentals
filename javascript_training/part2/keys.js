"use strict"
var person={name:"abc"
	,age:25
	,sex:"Male"
	,address:{street:"some street"
		,houseNo:"20"
		,cellNo:"81237465746"
	}
}

for (var prop in person){
	if(typeof(person[prop]) == 'object'){
		
		for(var key in person[prop]){
			console.log(key,":",person[prop][key]);	
		}
	}else{
		console.log(prop,person[prop]);		
	}
	//console.log(prop +":"+person[prop]);
	//console.log(prop +":"+person[prop]);
}

/*
for (var propVale in person){
	console.log(person[propVale])
}
*/

