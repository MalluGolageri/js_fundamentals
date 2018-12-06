function sortArguments(){	
	//var array=Array.prototype.slice.call(arguments);
	//console.log(array);	
	var stringArray=[];
	var integerArray=[];
	//console.log(array.sort());
	var data={
		stringArray:[],
		integerArray:[]
	}

	for(var i=0;i<arguments.length;i++){
		if(typeof arguments[i] == 'string'){
			data.stringArray.push(arguments[i]);
			//console.log(arguments[i]);	
		}else{
			data.integerArray.push(arguments[i]);
		}
		//console.log(arguments[i]);
	}


	//console.log("String Array is: "+stringArray);
	//console.log("Integer Array is: "+integerArray);

	//return array.sort();
	return data;

}
//sort all
var myArray=sortArguments("hi",4,"i","want","to","read",3,200,8,7,"this",5);
//console.log("sorted Array is:"+myArray);
console.log("stringArray is:"+myArray.stringArray);
console.log("Integer is:"+myArray.integerArray);

var mergedArray=myArray.stringArray.concat(myArray.integerArray);
console.log("Sorted Array is: "+mergedArray.sort());



function some(){
	console.log(a);
	var a=10;
}


function some(){
	var a;
	console.log(a);
	a=10;
}