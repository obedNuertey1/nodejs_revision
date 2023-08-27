//const http = require('http');
//const EventEmitter = require('events');

//class RequestHandler extends EventEmitter{
//	constructor(req, res){
//		super();
//		this.req = req;
//		this.res = res;
//	}

//	handleRequest(){
//		this.emit('request', this.req);

//		//Process the request and send the response
//		this.res.end(`Hello This is great ${this.res}`);
//	}
//};

//const server = http.createServer();

//server.on('request', (req, res)=>{
//	const requestHandler = new RequestHandler(req, res);
//	requestHandler.on('request', (req)=>{
//		console.log(`Received request: ${req.url}`);
//	}).handleRequest();
//});

//server.listen(3000, ()=>{
//	console.log('Server is listening on port 3000');
//});


const http = require('http');
const EventEmitter = require('events');

class RequestHandler extends EventEmitter{
	constructor(req, res){
		super();
		this.req = req;
		this.res = res;
	}

	handleRequest(){
		this.emit('request', this.req);

		//Process the request and send the response
		this.res.end(`Hello This is great ${this.req}`);
	}
};

const server = http.createServer();

server.on('request', (req, res)=>{
	const requestHandler = new RequestHandler(req, res);
	requestHandler.on('request', (req)=>{
		console.log(`Received request: ${req.url}`);
	}).handleRequest();
});

server.listen(3000, ()=>{
	console.log("Server is listening on port 3000");
});