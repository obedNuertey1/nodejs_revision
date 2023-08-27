const EventEmitter = require('events');
const db = require('./database'); //Your database module

class DataFetcher extends EventEmitter{
	constructor(query){
		super();
		this.query = query;
	}
	fetchData(){
		this.emit('query', this.query);
		db.query(this.query, (err, data)=>{
			if(err){
				this.emit('error', err);
			}else{
				this.emit('data', data);
			}
		});
	}
};

const dataFetcher = new DataFetcher(`SELECT * FROM students`);

dataFetcher.on('query', (query)=>{
	console.log(`Executing query: ${query}`);
}).on('data', (data)=>{
	console.log(`Fetch data: ${data}`);
}).on('error', (err)=>{
	console.log(`DataBase Error: ${err}`)
}).fetchData();