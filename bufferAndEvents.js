const EventEmitter = require('events');

class DataBuffer extends EventEmitter{
	constructor(bufferSize, charset){
		super();
		this.bufferSize = 0;
		this.buffer = new Buffer.alloc(bufferSize); //This is bad
		this.charset = charset;
		this.newData
	}

	addData(data){
		this.newData = new Buffer.from(data, this.charset);

		this.buffer = Buffer.concat([this.buffer, this.newData]);
		this.bufferSize = this.bufferSize + this.buffer.byteLength;
		this.emit('dataAdded', data);
	}

	processBuffer(){
		let i = this.bufferSize;
		setInterval(()=>{
			if(i > 0){
				this.buffer = this.buffer.slice(0, this.buffer.byteLength - 2);
				this.emit('dataProcessed', this.buffer);
				i--;
			}
		}, 1000);
	}
};

const buffer = new DataBuffer(8, "utf-8");

buffer.on('dataAdded', (data)=>{
	console.log(`Data added to buffer: ${data}`);
}).on('dataProcessed', (data)=>{
	console.log(`Data processed from buffer: ${data.toString()}`);
}).addData("Hello this is it");
buffer.addData(" yes this is it");
buffer.addData(" Okay let's go");
buffer.addData(" let's do this");
buffer.processBuffer();