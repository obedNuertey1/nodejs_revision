//Net Module
/*
Node.js net module is used to create both servers and clients. This module provides an asynchronous network wrapper and it can be imported using the following syntax.
var net = require("net");
 *net.createServer([options][,connectionListener]) - Creates a TCP server. The connectionListener argument is automatically set as a listener for the 'connection' event.
 * net.connect(options[,connectionListener]) - A factory method, which returns a new 'net.socket' and connects to the supplied address and port.
 * net.createConnection(options[,connectionListener]) - A factory method, which returns a new 'net.Socket' and connects to the supplied address and port.
 * net.connect(port[,host][,connectListener]) - Creates a TCP connection to port on host. If host is omitted, 'localhost' will be assumed. The connectListener parameter will be added as a listener for the 'connect' event. It is a factory method which returns a new 'net.Socket'.
 * net.creatConnection(port[,host][,connectListener]) - Creates a TCP connection to port on host. If host is omitted, 'localhost' will be assumed. The connectListener parameter will be added as a listener for the 'connect' event. It is a factory method which returns a new 'net.Socket'.
 * net.connect(path[,connectListener]) - Creates Unix socket connection to path. The connectListener parameter will be added as a listener for the 'connect' event. It is a factory method which returns a new 'net.Socket'.
 * net.createConnection(path[,connectListener]) - Creates  Unix socket connection to path. The connectListner parameter will be added as a listener for the 'connect' event. It is a factory method which returns a 'new.Socket'.
 * net.isIP(input) - Tests if the input is an IP address. REturns 0 for invalid strings, 4 for IP version 4 addresses, and 6 for IP version 6 addresses.
 * net.isIPv4(input) - Returns true if the input is version 4 IP address, otherwise returns false.
 * net.isIPv6(input) - Returns true if the input is a version 6 IP address, otherwise returns false.
*/

//Class - net.Server
/*Methods
 * server.listen(port[,host][,backlog][,callback]) - Begin accepting connections on the specified port and host. If the host is omitted, the server will accept connections directed to any IPv4 address (INADDR_ANY). A port value of zero will assign a random port.
 * server.listen(path[,callback]) - Start a local socket server listening for connections on the given path.
 * server.listen(handle[, callback]) - The handle object can be set either a server or socket (anything with an underlying _handle member), or a {fd: <n>} object. It will cause the server to accept connections on the specified handle, but it is presumed that the file descriptor or handler has already been bound to a port or domain socket. Listening on a file descriptor is not supported on Windows.
 * server.listen(options[,callback]) - The port, host, and backlog properties of options, as well as the optional callback function, behave as they do on a call to server.listen(port, [host], [backlog], [callback]). Alternatively, the path option can be used to specify a UNIX socket.
 * server.close([callback]) - Finally closed when all connections are ended and the server emits a 'close' event.
 * server.address() - Returns the bound address, the address family name and port of the server as reported by the operating system.
 * server.unref() - Calling unref on a server will alllow the program to exit if this is the only active server in the event system. If the server is already unrefd, then calling unref again will have no effect.
 * server.ref() - Opposite of unref, calling ref on a previously unrefd server will not let the program exit if it's the only server left (the default behavior). If the server is refd, then calling the ref again will have no effect.
 * server.getConnections(callback) - Asynchronously get the number of concurrent connections on the server. Works when sockets were sent to forks. Callback should take two arguments err and count.
*/

//Events
/**
 * listening - Emitted when the server has been bound after calling server.listen.
 * connection - Emitted when a new connection is made. Socket object, the connection object is available to event handler. Socket is an instance of net.Socket.
 * close - Emitted when the server closes. Note that if connections exist, this event is not emitted until all the connections are ended.
 * error - Emitted when an error occurs. The 'close' event will be called directly following this event.
 */

//Class - net.Socket
//This object is an abstraction of a TCP or local socket. net.Socket instances implement a duplex Stream interface. They can be created by the user and used as a client (with connect()) or they can be created by Node and passed to the user through the 'connection' event of a server.
//Events
/**
 * lookup - Emitted after resolving the hostname but before connecting. Not applicable to UNIX sockets.
 * connect - Emitted when a socket connection is successfully established.
 * data - Emitted when data is received. The argument data will be a Buffer or String. Encoding of data is set by socket.setEncoding().
 * end - Emitted when the other end of the socket sends FIN packet.
 * timeout - Emitted if the socket times out from inactivity. This is only to notify that the socket has been idle. The user must manually close the connection.
 * drain - Emitted when the write buffer becomes empty. Can be used to throttle uploads.
 * error - Emitted when an error occurs. The 'close' event will be called directly following this event.
 * close - Emitted once the socket is fully closed. The argument had_error is a boolean which indicates if the socket has closed due to a transmission error.
 */

//Properties
/**
 * socket.bufferSize - This property shows the number of characters currently buffered to be written.
 * socket.remoteAddress - The string representation of the remote IP address. For example, '74.125.127.100' or '2001:4860:a005::68'.
 * socket.remoteFamily - The string representation of the remote IP family. 'IPv4' or 'IPv6'.
 * socket.remotePort - The numeric representation of the remote port. For example, 80 or 21.
 * socket.localAddress - The string representation of the local IP address the remote client is connecting on. For example, if you are listening on '0.0.0.0' and the client connects on '192.168.1.1', the value would be '192.168.1.1'.
 * socket.localPort - The numeric representation of the local port. For example, 80 or 21.
 * socket.bytesRead
 * The amount of received bytes.
 * socket.bytesWritten - The amount of bytes sent.
 */

//Methods
/**
 * new net.Socket([options]) - construct a new socket object.
 * socket.connect(port[,host][,connectListener]) - Opens the connection for a given socket. If port and host are given, then the socket will be opened as a TCP socket, if host is omitted, localhost will be assumed. If a path is give, the socket will be opened as a Unix socekt to that path.
 * socekt.connect(path[,connectListener]) - Opens the connection for a given socket. If port and host are given then the socket will be opened as a TCP socket, if host is omitted, localhost will be assumed. If a path is given, the socket will be opened as a Unix socket to that path.
 * socekt.setEncoding(path[,connectListener]) - Opens the connection for a given socket. If port and host are given, then the socket will be opened as TCP socket, if host is omitted, localhost will be assumed. If a path is given, the socket will be opened as a Unix socket to that path.
 * socekt.setEncoding([encoding]) - Set the encoding for the socket as a Readable Stream.
 * socket.write(data[,encoding][,callback]) - Sends data on the socket. The second parameter specifies the encoding in the case of a string--it default to UTF8 encoding.
 * soceket.end([data][,encoding]) - Half-closes the socket, i.e, it sends FIN packet. It is possible the server will still send some data.
 * socket.destroy() - Ensures that no more I/O activity happens on this socket. Necessary only in case of errors (parse error or so).
 * socket.pause() - Pauses the reading of data. That is, 'data' events will not be emitted. Useful to throttle back an upload.
 * socket.resume() - Resumes reading after a call to pause().
 * socket.setTimeout(timeout[,callback]) - Sets the socket to timeout after timeout milliseconds of inactivity on the socket. By default, net.Socket does not have a timeout.
 * socket.setNoDelay([noDelay]) - Disables the Nagle algorithm. By default, TCP connections use the Nagle algorithm, they buffer data before sending it off. Setting true for noDelay will immediately fire off data each time socket.write() is called. noDelay defaults to true.
 * socket.setKeepAlive([enable][,initialDelay]) - Enable/disable keep-alive functionality, and optionally set the initial delay before the first keepalive probe is sent on an idle socket. enable defaults to false.
 * socket.address() - Returns the bound address, the address family name, and the port of the socket as reported by the operating system. Returns an object with three properties, e.g. {port:12346, family:'IPv4', address:'127.0.0.1'}
 * socket.unref() - Calling unref on a socket will allow the program to exit if this is the only active socket in the event system. If the socket is already unrefd, then calling unref again will have no effect.
 * socket.ref() - Opposite of unref, calling ref on a previously unrefd socket will not let the program exit if it's the only socket left (the default behavior). If the socket is refd, then calling ref agian will have no effect.
 */

////server.js
//let net = require("net");
//let server = net.createServer((connection)=>{
//	console.log("client connected");

//	connection.on("end", ()=>{
//		console.log("client disconnected");
//	});

//	connection.write('Hello World!\r\n');
//	connection.pipe(connection);
//});

//server.listen(8080, ()=>{
//	console.log('server is listening');
//});


//server.js
let net = require('net');
let server = net.createServer((connection)=>{
	console.log("client connected");

	connection.on("end", ()=>{
		console.log("client disconnected");
	});

	connection.write('Hello World!\r\n');
	connection.pipe(connection);
});

server.listen(8080, ()=>{
	console.log("server is listening");
});