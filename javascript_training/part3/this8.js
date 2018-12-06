var Button=function(content){
	this.content=content;

}
Button.prototype.click=function(){
	console.log(this.content + " clicked");
}

var myButton=new Button("OK");
myButton.click();

var looseClick=myButton.click;
looseClick();

var boundClick=myButton.click.bind(myButton);
boundClick();

