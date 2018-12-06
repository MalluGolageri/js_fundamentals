var a=[1,2,16,3];
var b=[4,9,6];
var c=[1];

/*for (var i in a){
	c.push(a[i]);
}

for (var j in b){
	c.push(b[j]);
}
*/
c.forEach(function (current,index,array){
	c.push(current);
});

console.log(c);


var d=a.concat(b);
d.sort();
console.log(d);