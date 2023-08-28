const EventEmitter = require('events');

class DataBuffer extends EventEmitter{
	constructor(bufferSize){
		super();
		this.buffer = new Buffer.alloc(bufferSize);
	}

	addData(data){
		let newData = new Buffer.from(data);

		this.buffer = Buffer.concat([this.buffer, newData]);
		this.emit('dataAdded', data);
	}

	processBuffer(){
		setInterval(()=>{
			if(this.buffer.byteLength > 0){
				this.buffer[this.buffer.byteLength - 1]
				this.emit('dataProcessed', this.buffer);
			}
		}, 1000);
	}
};

const buffer = new DataBuffer(256);

buffer.on('dataAdded', (data)=>{
	console.log(`Data added to buffer: ${data}`);
}).on('dataProcessed', (data)=>{
	console.log(`Data processed from buffer: ${data.toString()}`);
}).addData("Hello this is it");
buffer.addData(" yes this is it");
buffer.processBuffer();
