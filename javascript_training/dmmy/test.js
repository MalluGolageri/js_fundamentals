
person = {firstName:"abc"
		,lastName:"xyz"
		,cellNo:"8892749043"
		,sex:"Male"
		,address:{
			street:"TR Nagar"
			,housNo:20
		}		
}
function giveMeAddress(){
			console.log("Oye");	
		}
//console.log(person);

for (var prop in person){
		if(typeof(person[prop])=='object'){
			for(var key in person[prop]){
				console.log(key ,":", person[prop][key]);				
			}
			break;
		}
		console.log(prop ,":",person[prop]);
}

var a={};
a.name="some name";
a.age=28;
console.log(a["name"]);
console.log(a);

var b=[];
b["firstName"]="firstName";
b["lastName"]="lastName";

//console.log(b);

//giveMeAddress();

(function some(){
	var a=10;
	console.log(a);

})();


(function some(){
	var a;
	console.log(a);
	a=10;
})();

