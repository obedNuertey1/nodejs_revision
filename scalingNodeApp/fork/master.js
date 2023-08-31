const fs = require('fs');
const child_process = require('child_process');

for(let i = 0; i < 3; i++){
	let worker_process = child_process.fork("support.js", [i]);

	worker_process.send(i);



	//worker_process.on('close', (code)=>{
	//	console.log(`child process exited with code ${code}`);
	//	worker_process.kill();
	//});
	worker_process.on('message', (message)=>{
		console.log(`child process ${message} finished working`);
		worker_process.kill();
	});
}