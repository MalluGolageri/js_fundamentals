var a=[1,2,3];
a[6]=4;
console.log(a);

var a=new Array(2);
a.push('1');
a.push('2');

a[0]=12;
console.log(a);

var b=[];
b['one']='one';
b['two']='two';
b['three']='three';
//b[4]=6;
b['four']='four';
b[5]=8;
console.log(b,b.length,b['three']);

var a=[1,2,3,4,5,6,7,8,9];
a.length=5;
console.log(a);

a.length=10;
console.log(a);