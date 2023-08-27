//Create a file processor class that extends the event emitter class
const fs = require('fs');
const EventEmitter = require('events');

//Create a file processor class that extends the event emitter class
class FileProcessor extends EventEmitter{
	constructor(filePath){
		super();
		this.filePath = filePath;
	}

	processFile(){
		this.emit('start', this.filePath);
		fs.readFile(this.filePath, (err, data)=>{
			if(err){
				this.emit('error', err);
			}else{
				this.emit('data', data);
			}
		});
	}
};

let myPath = "../input.txt";
const fileProcessor = new FileProcessor(myPath);
fileProcessor.on('start', (path1)=>{
	console.log("Processing for file " + path1);
}).on('data', (data)=>{
	console.log(data.toString());
}).processFile();
