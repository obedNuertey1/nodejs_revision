/**
 * Streams: They are objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four types of streams-
 * Readable - Stream which is used for read operation.
 * Writable - Stream which is used for write operation.
 * Duplex - Stream which can be used for both read and write operation.
 * Transform - A type of duplex stream where the output is computed based on input.
 * 
 * Each type of stream is an EventEmitter instance and throws several events at different instance of times. For example, some of the commonly used events are -
 * data - This event is fired when there iis data available to read.
 * end - This event is fired when there is no more data to read.
 * error - This event is fired when there is any error receiving or writing data.
 * finish - This even is fired when al the data has been flushed to underlying system.
 */


////Reading from a stream
//let fs = require('fs');
//let data = '';

////Create a readable stream
//let readerStream = fs.createReadStream('input.txt');

////Set the encoding to be utf8
//readerStream.setEncoding('UTF8');

////Handle stream events --> data, end, and error
//readerStream.on('data', (chunk)=>{
//	data += chunk;
//}).on('end', ()=>{
//	console.log(data);
//}).on('error', (err)=>{
//	console.log(err.stack);
//});

//console.log("Program Ended");


//Writing to a file
//let fs = require('fs');
//let data = "Simply Easy Learning";

////Create a writable stream
//let writerStream = fs.createWriteStream('output.txt');

////write the data to stream with encoding to be utf-8
//writerStream.write(data, 'UTF8');

////Mark the end of file;
//writerStream.end();

////Handle stream events --> finish, and error
//writerStream.on('finish', ()=>{
//	console.log("Write completed.");
//}).on("error", (err)=>{
//	console.log(err.stack);
//});

//console.log("Program Ended");


//Piping the Streams
/*
Pipint is a mechanism wher ewe provide the output of one stream as the input to another stream. It is normally used to get data from one stream and to pass the output of that stream to another strea. There is no limit on piping operations. Now we'll show a piping example for reading from one file and wrting it to another file.
*/
//let fs = require('fs');

////Create a readable stream
//let readerStream = fs.createReadStream('input.txt');

////Create a writable stream
//let writerStream = fs.createWriteStream('output.txt');

////Pipe the read and write operations
////read input.txt and write data to output.txt
//readerStream.pipe(writerStream);

//console.log("Program Ended");



//Chaining the Streams
/*
Chaining is a mechanism to connect the output of one stream to anothe rstream and create a chain of multiple stream operations. It is normally used with piping operations. Now we'll use piping and chaining to first compress a file and then decompress the same.
*/

//let fs = require('fs');
//let zlib = require('zlib');

////Compress the file input.txt to input.txt.gz
//fs.createReadStream('input.txt')
//.pipe(zlib.createGzip())
//.pipe(fs.createWriteStream('input.txt.gz'));

//console.log('File Compressed.');
