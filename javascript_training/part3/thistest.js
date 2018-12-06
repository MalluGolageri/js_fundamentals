var o = {f:function(){ return this.a + this.b; }};
var p = Object.create(o);
var g=Object.create(p);
p.a = 1;
p.b = 4;
g.a=6;
console.log(g.f());