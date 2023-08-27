/*
//Blocking code example
let fs = require("fs");
let data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");
*/

//Non blocking code example
let fs = require('fs');

fs.readFile('input.txt', (err, data)=>{
	if(err) return console.error(err);
	console.log(data.toString());
});

console.log("Program Ended");
