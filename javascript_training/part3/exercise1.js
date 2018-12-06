/*var students=["Mallu","sam","kiran"];

function addStudents(args,item){
		args.push(item);
		return args;
	}

function welcomeStudents(){
	var args=Array.prototype.slice.call(arguments);
	//console.log(args);
	//console.log(args.reverse());

	//var reversedArray=Array.prototype.reverse.call(args);
	//console.log(reversedArray);


	var lastItem=args.pop();
	console.log("welcome "+args.join(", ")+ ", and "+lastItem +".")
	return args;

}

var args=welcomeStudents.apply(null,students);
console.log(args);
//a=args.addStudents(args,"prasanna");
//console.log(a);*/

//var a={
//	var b={
//		name:"mallu golageri";
	//}
//}


function createModule(namesapce){
	//console.log(namesapce);
	var nameSpaces=namesapce.split(".");
	console.log(nameSpaces);
	var dummy=[];
	var item=this;
	for(var i=0;i<nameSpaces.length;i++){
	//var each=nameSpaces[i];
		//each={};
		//item[i]=each;		
		/*if(i>0){
			this[nameSpaces[i-1]].nameSpaces[i]={};	
			continue;
		}*/
	//	item=nameSpaces[i];

	//	this[nameSpaces[i]]={};
		//for(var j=0;j<dummy.length;j++){					
		//	dummy[j]=dummy[j-1]={};
		//}	
		//if(j==0){
		//		nameSpaces[i]={};
		//	}
		
	//console.log(nameSpaces[i]);
//	dummy.push(nameSpaces[i]);
	}
	return this;
}
var x=createModule("a.b.c");
x.showData=function(){
	console.log("showing data");
}

console.log(x);
console.log(x.showData());


