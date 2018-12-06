
//program to display the repeated words

var myString="veeru is a kind of psycho guy but he a kind of is too good from the heart kind of of";
var words=myString.split(" ");
var extraArray=[];
for(var i in words){
	if(extraArray[words[i]] >= 1 ){		
			extraArray[words[i]]=extraArray[words[i]] + 1;					
	}else{
		extraArray[words[i]]=1;
	}	
}
for(var j in extraArray){
	console.log(j,extraArray[j]);	
}

