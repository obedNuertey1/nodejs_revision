//Node.js OS Module
/**Methods
 * os.tmpdir() - Returns the operating sytem's default directory for temp files.
 * os.endiannes() - Returns the endianness of the CPU. Possible values are "BE" or "LE".
 * os.hostname() - Returns the hostname of the operating system.
 * os.type() - Returns the operating system name.
 * os.platform() - Returns the operating system platform.
 * os.arch() - Returns the operating system CPU architecture. Possible values are "x64", "arm" and "ia32".
 * os.release() - Returns the operating system release.
 * os.uptime() - Returns the system uptime in seconds.
 * os.loadavg() - Returns an array containing the 1, 5, and 15 minute load averages.
 * os.totalmem() - Returns the total amount of memory in bytes.
 * os.freemem() - Returns the amount of free system memory in bytes.
 * os.cpus() - Returns an array of objects containing information about each CPU/core installed: model. speed (in MHz), and times (an object containing the number of milliseconds the CPU/core spent in: user, nice, sys, idle, and irq);
 * os.networkInterfaces() - Get a list of network interfaces.
 */

//Properties
/**
 * os.EOL - A constant defining the appropriate End-of-line marker for the operating system.
 */
//Example
let os = require("os");
let path = require("path");

//Endianness
console.log("endianness : " + os.endianness());

//OS type
console.log(`type : ${os.type()}`);

//OS platform
console.log(`platform : ${os.platform()}`);

//Total system memory
console.log(`total memory : ${os.totalmem()} bytes.`);

//Total free memory
console.log(`Free memory : ${os.freemem()} bytes.`);
