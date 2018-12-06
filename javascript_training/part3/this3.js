
var o={
	prop:37,
	f:function(){
		return this.prop;
	}
};
var x=o.f;
console.log(x());
console.log(o.f());