const fs = require('fs');
const child_process = require('child_process');

for(let i = 0; i < 3; i++){
	let workerProcess = child_process.exec(`node support.js ${i}`, {encoding:'utf8'}, (error, stdout, stderr)=>{
		if(error){
			console.log(error.stack);
			console.log(`Error code: ${error.code}`);
			console.log(`Signal received: ${error.signal}`);
		}
		fs.writeFile(`${__dirname}/testExecWritability.txt`, stdout, (err)=>{
			if(err) return console.error(err.stack);
			console.log("done");
		});
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
	});

	workerProcess.on('exit', (code)=>{
		console.log(`Child process exited with exit code ${code}`);
	});
}