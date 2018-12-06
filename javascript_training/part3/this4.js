var o={
	prop:37,
};
function independent(){
	return this.prop;
}
o.b={
	g:independent
	,prop:42
};
console.log(o.b.g());