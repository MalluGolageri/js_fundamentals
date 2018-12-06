var foo={
	baz: function(){
		console.log(this);
	}
}
foo.baz();
var another=foo.baz;
another();