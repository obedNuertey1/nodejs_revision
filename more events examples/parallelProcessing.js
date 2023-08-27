
const EventEmitter = require('events');
const async = require('async'); //External library for asynchronous operation

class ParallelProcessor extends EventListener{
	constructor(tasks){
		super();
		this.tasks = tasks;
	}

	processTasks(){
		this.emit('start', this.tasks);
		async.parallel(this.tasks, (err, data)=>{
			if(err){
				this.emit('error', err);
			}else{
				this.emit('data', data);
			}
		});
	}
};

const tasks = [
	function(callback){
		setTimeout(()=>{
			console.log('Task 1 completed');
			callback(null, 'Result 1');
		}, 1000);
	},
	function(callback){
		setTimeout(()=>{
			console.log('Task 2 completed');
			callback(null, 'Result 2');
		},500);
	}
];

const parallelProcessor = new ParallelProcessor(tasks);

parallelProcessor.on('start', (tasks)=>{
	console.log(`Processing ${tasks.length} tasks in parallel`);
}).on('results', (results)=>{
	console.log('Results: ', results);
}).on('error', (error)=>{
	console.error(`Error: ${error}`);
}).processTaks();