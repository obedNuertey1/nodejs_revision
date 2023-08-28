//Node.js Global Objects

//__filename
/*
The __filename represents the filename of the code being executed. This is the resolved absolute path of this code file. For a mian program, this is not necessarily the same filename used in the command line. The value inside a module is the path that module file.
*/
//Example
console.log(__filename);



//__dirname
/*
The __dirname represents the name of the directory that the currently executing script resides in.
*/
//Example
console.log(__dirname);


//setTimeout(cb, ms);
/*
The setTimeout(cb, ms) global function is used to run callback cb after at least ms milliseconds. The actual delay depends on external factors like OS timer granularity and system load. A timer cannot span more than 24.8 days.

This function returns a opaque value that represents the timre which can be used to clear the timer.
*/
//Example
//function printHello(){
//	console.log("Hello, World!");
//}
//Now call above function after 2 seconds
setTimeout(()=>{console.log("Hello, World!")}, 2000);


//clearTimeout(t)
/*
The clearTimeout(t) global function is used to stop a timer that was previously created with setTimeout(). Here t is the timer returned by the setTimeout() function
*/
//Example
function printHello(){
	console.log("Hello, World!");
};

//Now call above function after 2 seconds
let t = setTimeout(printHello, 2000);
//Now clear the timer
console.log(clearTimeout(t));


//setInterval(cb, ms)
/*
The setInterval(cb, ms) global function is used to run callback cb repeatedly after at least ms milliseconds. The actual delay depends on external factors like OS timer granularity and system load. A timer cannot span more than 24.8 days.

This function returns an opaque value that represents the timer which can be used to clear the timer using the function clearInterval(t);
*/
function printHello(){
	console.log("Hello, World!");
}

//Now call above function after 2 seconds
let myPromise = new Promise((resolve, reject)=>{
	let b = setInterval(printHello, 2000);
	if(b){
		resolve(b)
	}
	reject("Error occured")
})

const me = async ()=> {
	await myPromise.then((op)=>{
	clearInterval(op);
});
}

me();

process.on("beforeExit", ()=>{
	console.log("Connected to main stream")
});
