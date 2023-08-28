////Creating Buffers

//1. Creating Buffer using alloc
//let buf = new Buffer.alloc(10);
//let myArray = new Uint32Array(buf);
//console.log(myArray);
//console.log(buf);


////2. Creating Buffer using array
//let buf = new Buffer.from([10, 20, 30, 40, 50], "base64");
//console.log(buf);


////3. Creating Buffer using string
//let buf = new Buffer.from("Simply Easy Learning", "utf-8");
//console.log(buf);


////Writing to Buffers
////Example
//let buf = new Buffer.alloc(256);
//let len = buf.write("Simply Easy Learning", "utf-8");
//console.log(`Octets written : ${len}`);


////Reading from Buffers
////Example
//let buf = new Buffer.alloc(26);
//for(let i = 0; i < buf.byteLength; i++){
//	buf[i] = i+97;
//}

//console.log(buf.toString("ascii"));
//console.log(buf.toString("ascii", 0, 5));
//console.log(buf.toString('utf8', 0, 5));
//console.log(buf.toString(undefined, 0, 5));


////Convert Buffer to JSON
////Example
//let buf = new Buffer.from("Simply Easy Learning", "utf-8");
//let json = buf.toJSON();
//console.log(json);


////Concatenate Buffers
////Example
//let buffer1 = new Buffer.from("TotorialsPoint ");
//let buffer2 = new Buffer.from("Simply Easy Learning");
//let buffer3 = Buffer.concat([buffer1, buffer2]);

//console.log("buffer3 concat: " + buffer3.toString());


////Compare Buffers
////Example
//let buffer1 = new Buffer.from("ABC");
//let buffer2 = new Buffer.from("ABCDE");
//let result = buffer1.compare(buffer2);

//if(result < 0){
//	console.log(`${buffer1} comes before ${buffer2}`);
//}else if(result === 0){
//	console.log(`${buffer1} is same as ${buffer2}`);
//}else{
//	console.log(`${buffer1} comes after ${buffer2}`);
//}


////Copy Buffer
//let buffer1 = new Buffer.from("ABC");
//let buffer2 = new Buffer.alloc(3);
//buffer1.copy(buffer2);
//console.log(`buffer2 content: ${buffer2.toString()}`);


////Slice Buffer
//let buffer1 = new Buffer.from("TutorialsPoint");

////slicing a buffer
//let buffer2 = buffer1.slice(0, 9);
//console.log("buffer2 content: " + buffer2.toString());



//Buffer Length
//Example
let buffer = new Buffer.from("[123, 4242435235, 23423, 1424]");

//length of the buffer
console.log("buffer length: " + buffer.byteLength);
console.log(Buffer.isEncoding("base64")); //Returns true if the encoding is a valid encoding
console.log(Buffer.isBuffer(buffer)); //Returns true if an object is a buffer.
console.log(Buffer.byteLength("I am Obed Nuertey", "utf-8"))

console.log(Buffer.compare("I am groot", buffer));