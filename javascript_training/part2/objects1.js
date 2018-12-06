
var vehicle=Object.create({},{
	make: {
		//writable:false
		configurable:false
		,enumerable:true
		//,value:"new"
		,get : function(){ return this.value.toUpperCase()}
		,set : function(value) { this.value=value} 
	},
	model:{
		//writable:false, //comment
		configurable:false
		//,value:"something"
		,enumerable:true
		,get : function(){ return this.value.toUpperCase()}
		,set : function(value) { this.value=value} 
	},
	modelDetails:{
			value:function(){
				return "dsd";
			}
	}
});


vehicle.model="maruthi";
vehicle.make="some take";

console.log(vehicle.model);
console.log(vehicle.make);

console.log(vehicle.modelDetails());
console.log()
for(var i in vehicle){
	console.log(i,vehicle[i]);
}
console.log(vehicle);
//Object.freeze(vehicle);
vehicle.brand="BMW";
console.log(vehicle.brand);

console.log(delete vehicle.model);
Object.seal(vehicle);
if((Object.isFrozen(vehicle) === true)){
	console.log("frozen");
}

//vehicle.model.name="testing";
console.log(vehicle.modelDetails());
//console.log(vehicle.toString());