
var global="hello";
(
function printWorld(){
	 global="world";
	console.log(root.global,global);
}
)()
//console.log(global +" "+so);