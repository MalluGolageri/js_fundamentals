
a={
    name:"mallu"
    ,age:23
    ,getInfo:function(){
        return this.name + "'s age is "+this.age ;
    }
}

console.log(a.getInfo());

b={
    name:"kk"
    ,age:24
}

console.log(a.getInfo.bind(b)());