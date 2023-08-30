'use strict';
let http = require('http');
let fs = require('fs');
let url = require('url');

//Create a server
http.createServer((req, res)=>{
	//Parse the request containing file name
	let pathname = url.parse(req.url).pathname;

	//Print the name of the file which request is made.
	console.log(`Request for ${pathname} received.`);

	//Read the requested file content from file system
	fs.readFile(`${pathname.substr(1)}index.html`, (err, data)=>{
		if(err){
			console.error(err.stack);

			//HTTP Status: 404 : NOT FOUND
			//Content Type: text/plain
			res.writeHead(404, {'Content-Type': 'text/html'});
		}else{
			//Page found
			//HTTP Status: 200 : OK
			//Content Type: text/plain
			res.writeHead(200, {'Content-Type': 'text/html'});

			//Write the content of the file to response body
			res.write(data.toString());
		}

		//Send the response body
		res.end();
	});
}).listen(8081);

//Console will print the message
console.log('Server running at http://127.0.0.1:8081/');