var a=[];
a.push(1);
a.push(2);
a.push(3);

for  (var i in a){
//	console.log(a[i]);	
}

var b=[];
a.forEach(function (current,index,array){
	b.push(array);
});

//b.prop=[1,2,3];
console.log(b);

var c={prop:[3,4,5]}

console.log(a);

a.forEach(function(cur,ind,arr){
	console.log(ind+":"+cur)
});

var colors=['red','pink','blue'];
colors.forEach(function(c){
	console.log(c);
});

//console.log(a);