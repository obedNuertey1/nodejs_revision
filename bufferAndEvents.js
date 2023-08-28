const EventEmitter = require('events');

class DataBuffer extends EventEmitter {
    constructor() {
        super();
        this.buffer = [];
    }

    addData(data) {
        this.buffer.push(data);
        this.emit('dataAdded', data);
    }

    processBuffer() {
        setInterval(() => {
            if (this.buffer.length > 0) {
                const data = this.buffer.shift();
                this.emit('dataProcessed', data);
            }
        }, 1000);
    }
}

const buffer = new DataBuffer();

buffer.on('dataAdded', (data) => {
    console.log(`Data added to buffer: ${data}`);
});

buffer.on('dataProcessed', (data) => {
    console.log(`Data processed from buffer: ${data}`);
});

buffer.addData('Hello');
buffer.addData('World');
buffer.processBuffer();
