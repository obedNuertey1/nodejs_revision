//Node.js - File Sytem

////Synchronous vs Asunchronous
////Example
//let fs = require("fs");

////Asynchronous read
//fs.readFile('input.txt', (err, data)=>{
//	if(err){
//		return console.error(err);
//	}
//	console.log("Asynchronous read: " + data.toString());
//});

////Synchronous read
//let data = fs.readFileSync('input.txt');
//console.log("Synchronous read: " + data.toString());

//console.log("Program Ended");


////Open a File
////Example
//let fs = require("fs");

////Asynchronous - Openning File
//console.log("Going to open file!");
//fs.open("input.txt", "r+", (err, fd)=>{
//	if(err){
//		return console.error(err);
//	}
//	console.log("File opened successfully!");
//	//console.log("File data: " + fd)
//});



////Get File Information with fs.stat(path, callback)
////Example
//let fs = require("fs");

//console.log("Going to get file info!");
//fs.stat("input.txt", (err, stats)=>{
//	if(err){
//		return console.error(err);
//	}
//	console.log(stats);
//	console.log("Got file info successfully!");

//	//Check file type
//	console.log("isFile ? "+ stats.isFile());
//	console.log("isDirectory ? "+ stats.isDirectory());
//});


//Writing a file with fs.writeFile(filename, data[, options], callback);
/*
Path - This is the string having the file name including path.
data - This is the String of Buffer to be written into the file.
options - The third parameter is an object which will hold {encoding, mode, flag}. By default, encoding is utf8, mode is octal value 0666. and flag is 'w'
callback - This is the callback function which gets a single parameter err that returns an error in case of any writing error.
*/
////Example
//let fs = require("fs");

//console.log("Going to write into existing file");
//fs.writeFile("input.txt", "Simply Easy Learning!", (err)=>{
//	if(err){
//		return console.error(err);
//	}
//	console.log("Data written successfully!");
//	console.log("Let's read newly written data");
//	fs.readFile('input.txt', (err, data)=>{
//		if(err){
//			return console.error(err);
//		}
//		console.log(`Asynchronous read: ` + data.toString());
//	});
//});




//Reading a file with fs.read(fd, buffer, offset, length, position, callback)
/*
fd - This is the file descriptor returned by fs.open().
buffer - This is the buffer that the data will be written to.
offset - This is the offset in the buffer to start writing at.
length - This is an integer specifying the number of bytes to read.
position - This is an integer specifying where to begin reading from in the file. If position is nu,, data will be read from teh current file position.
callback - This is the callback function which gets the three arguments, (err, bytesRead, buffer).
*/
////Example
//let fs = require("fs");
//let buf = new Buffer.alloc(1024, "base64");

//console.log("Going to open an existing file");
//fs.open("input.txt", "r+", (err, fd)=>{
//	if(err){
//		return console.error(err);
//	}
//	console.log("File opened successfully!");
//	console.log("Going to read the file");

//	fs.read(fd, buf, 0, buf.byteLength, 0, (err, byteData)=>{
//		if(err){
//			console.log(err);
//		}
//		console.log(byteData + " bytes read");

//		//Print only read bytes to avoid junk.
//		if(byteData > 0){
//			console.log(buf.slice(0, byteData).toString());
//		}
//	});
//});






////Closing a File with fs.close(fd, callback)
////Example
//let fs = require("fs");
//let buf = new Buffer.alloc(1024);

//console.log("Going to open an existing file");
//fs.open("input.txt", "r+", (err, fd)=>{
//	if(err){
//		return console.error(err);
//	}
//	console.log("File opened successfully!");
//	console.log("Going to read the file");

//	fs.read(fd, buf, 0, buf.byteLength, 0, (err, byteData)=>{
//		if(err){
//			console.error(err);
//		}

//		//Print only read bytes to avoid junk.
//		if(byteData > 0){
//			console.log(buf.slice(0, byteData).toString());
//		}

//		//Close the opened file.
//		fs.close(fd, (err)=>{
//			if(err){
//				console.log(err);
//			}
//			console.log("File closed successfully.");
//		});
//	});
//});



//Truncate a File with fs.ftruncate(fd, len, callback)
/*
fd - This is the file descriptor returned by fs.open()
len - This is length of the file after which the file will be truncated.
callback - This is the callback function No orguments other than a possible exception are gien to the cmpletion callback.
*/

////Example
//let fs = require("fs");
//let buf = new Buffer.alloc(1024);

//console.log("Going to open an existing file");
//fs.open('input.txt', 'r+', (err, fd)=>{
//	if(err){
//		return console.error(err);
//	}
//	console.log("File opened successfully!");
//	console.log("Going to truncate the file after 10 bytes");

//	//Truncate the opened file.
//	fs.ftruncate(fd, 10, (err)=>{
//		if(err){
//			console.log(err);
//		}
//		console.log("File truncated successfully.");
//		console.log("Going to read the same file");

//		fs.read(fd, buf, 0, buf.byteLength, 0, (err, bytes)=>{
//			if(err){
//				console.log(err);
//			}
//			//Print only read bytes to avoid junk
//			if(bytes > 0){
//				console.log(buf.slice(0, bytes).toString());
//			}

//			fs.close(fd, (err)=>{
//				if(err){
//					console.log(err);
//				}
//				console.log("File closed successfully.");
//			});
//		});
//	});
//});




//Delete a File fs.unlink(path, callback)
/*
path - This is the file name including path.
callback - This is the callback function No arguments other than a possible exception are given to the completion callback.
*/
////Example
//let fs = require("fs");

//console.log("Going to delete an existing file");
//fs.unlink('input.txt', (err)=>{
//	if(err){
//		return console.error(err);
//	}
//	console.log("File deleted successfully!");
//});




//Creating a Directory with fs.mkdir(path[, mode], callback)
/*
path - This is the directory name including path.
mode - This is the directory permission to be set. Defaults to 0777.
callback - This is the callback function No arguments other than a possible exception are given to the completion callback.
*/
////Example
//let fs = require("fs");

//console.log("Going to create directory /test/temp");
//fs.mkdir("./test", (err)=>{
//	if(err) return console.error(err.stack);
	
//	fs.mkdir("./test/tmp", (err)=>{
//		if(err) return console.error(err.stack);
	
//		console.log("Directory created successfully!");
//	});
//});



//Read a Directory with fs.readdir(path, callback)
/*
path - This is the directory name including path.
callback - This is the callback function which gets two arguments (err, files) where files is an array of the names of the fiels in the deirectory exclutind '.' and '..'.
*/
////Example
//let fs = require("fs");

//console.log("Going to read directory /tmp");
//fs.readdir("./test/tmp", (err, files)=>{
//	if(err){
//		return console.error(err);
//	}
//	files.forEach((file)=>{
//		console.log(file);
//	});
//});




//Remove Directory with fs.rm(path, {recursive: boolean} ,callback)
/*
path - This is the directory name including path.
callback - This is the callback function No argument other than a possible exception are given to the completion callback.
*/
//let fs = require('fs');
//let path = require("path");

//let directoryPath = path.join(__dirname, "test", "tmp");

//console.log("Going to delete directory /tmp/test");
//fs.rm("./test/tmp", {recursive: true}, (err)=>{
//	if(err){
//		return console.error(err);
//	}
//	console.log("Going to read directory /tmp");

//	fs.readdir("./test/tmp", (err, files)=>{
//		if(err){
//			return console.error(err);
//		}
//		files.forEach((file)=>{
//			console.log(file);
//		});
//	})
//});
