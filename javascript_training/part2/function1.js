meterial=new Object();
var bookArray=['Great Exp','some other book','another one'];
var myBox={height:6
	,width:8
	,length:10
	,volume:480
	,meterial:"cardboard"
	,contents:bookArray
	//,length:myBox.length
};

	console.log(myBox.contents);
	myBox.bookArray=bookArray.push("old book");
	console.log(myBox.contents);
	console.log(myBox.meterial);

