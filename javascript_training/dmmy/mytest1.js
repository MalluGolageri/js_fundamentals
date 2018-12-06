/*
var a={
    firstName:"veeru"
    ,lastname:"NK"
    ,age:"27"
    ,town:"shimoga"
    ,company:"L&T"
    ,address:{
        houseNo:"20"
        ,street:"vidyanagar"
    }
}


for(var prop in a){
    if(typeof a[prop]=='object'){
        console.log(prop+":");
        for(var i in a[prop]){
            console.log(i+":"+a[prop][i]);
        }
    }
    else{
        console.log(prop +":"+a[prop]);
    }
}

var b=['mallu','satish','shree'];


b.forEach(function(element,index,a){
    console.log(index,element,a);

});

c=[];
c.push("hello");
c.push("hi");
c.push("okay");
c.forEach(function(e,inde,c){
   //console.log(e);
});
c['name']='mallu';
c.forEach(function(e,inde,c){
    console.log(e);
});
console.log(c);
console.log(a.hasOwnProperty("age1"));
console.log(Object.keys(a));

b.forEach(function(el,index,array){
   console.log(el);
});

var a=Array();
a.push(2);
a.push(3);
a.push(4);

console.log(a);
a.forEach(function(el,index,arr){
   console.log(el,index,arr);
});

 */

/*

var a=Array();
a.push(2);
a.push(3);
a.push(4);

var b=Array();
b.push(2);
b.push(3);
b.push(4);
b.push(215);

console.log(a.concat(b).sort());*/

function some(){
    console.log(a);
    var a=10;
}


function some(){
    var a;
    console.log(a);
    a=10;
}
