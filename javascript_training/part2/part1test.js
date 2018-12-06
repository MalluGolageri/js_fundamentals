
"use strict";
var string="js is really interesting and at the same time it is really";
var array=string.split(" ");
var words=[],commonWords=[];
var wordCount=0;
for(var word in array){
	if(words.indexOf(array[word]) > -1 ){
		commonWords.push(array[word]);
	}
	words.push(array[word]);
	wordCount++;
}
console.log("Number Of Words:" + words.length);
console.log("Repeated Words Are: " + commonWords);
console.log("No spaces: "+ string.replace(/ /g,""));