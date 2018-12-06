var anum=0;
var foo={
	anum:10,
	baz:{
		anum:20,
		bar:function(){
			console.log(this.anum);
		}
	}
}
foo.baz.bar();
var hello=foo.baz.bar;
hello();

//scope chanin
//execution context
//this examples
