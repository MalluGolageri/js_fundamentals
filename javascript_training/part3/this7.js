var user={
	tournament: "The Masters"
	,data : [
		{name : "T. Woods",age:37},
		{name : "P.Michelson",age:43}
	]
	,clickHandler:function(){
		var that=this;
		this.data.forEach(function(person){
			console.log("what is this referring to?"+that);
			console.log(person.name + " is playing at "+that.tournament);
		});
	}
}
user.clickHandler();