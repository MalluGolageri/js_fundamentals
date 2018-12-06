var students=["mallu","prasanna","arun"];
function welcomeStudents(){
	var args=Array.prototype.slice.call (arguments);

	var slice=Function.prototype.call.bind(Array.prototype.slice);
	var myargs=slice(arguments);

	var lastItem=args.pop();
	//console.log("welcome "+ args.join(",")+", and "+lastItem + ",");

	var array=Array.prototype.slice.call (arguments);
	array=array.slice(0,3);
	console.log(array);
}

welcomeStudents.apply(null,students);
//welcomeStudents(students);

