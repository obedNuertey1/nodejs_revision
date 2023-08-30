//let http = require('http');

////Options to be used by request
//let options = {
//	host: 'localhost',
//	port: '8081',
//	path: '/index.html'
//};

////Callback function is used to deal with response
//let callback = (res)=>{
//	//Continuously update stream with data
//	let body = 'lskjdlfkjsdlkfjlksjdflkjslk';
//	res.on('data', (data)=>{
//		body += data;
//	});

//	res.on('end', ()=>{
//		//Data received completely.
//		console.log(body);
//	});
//};

////Make a request to the server
//let req = http.request(options, callback);
//req.end();

let http = require('http');

//Options to be used by request
let options = {
	host: 'localhost',
	port: '8081',
	path: '/index.html'
};

//Callback function is used to deal with response
let callback = (res) => {
	//Continuously update stream with data
	let body = '';
	res.on('data', (data)=>{
		body += data;
	});

	res.on('end', ()=>{
		//Data received completely.
		console.log(body);
	});
};

//Make a request to the server
let req = http.request(options, callback);
req.end();