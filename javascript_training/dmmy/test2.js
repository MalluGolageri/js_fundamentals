var a={
    name:"mallu"
    ,age:"24"
    ,getInfo:function() {
        console.log(this.name +"'s age is "+this.age);
    }
}

var b= a.getInfo();

c={
    name:"shree"
    ,age:"24"
}

a.getInfo.call(c);

a.getInfo.apply(c);

a.getInfo.bind(c)();