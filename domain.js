/**Domain Module
Node.js domain module is used to intercept unhandled error. These unhandled error can be intercepted using internal binding or external binding. If errors are not handled at all, then they will simply crash the Node application.
- Internal Binding - Error emitter is executing its code within the run method of a domain.
- External Binding - Error emitter is added explicitly to a domain using its add method.
This module can be imported using the following syntax.
```let domain = require('domain')```
The domain class of domain module is used to provide functionality of routing errors and uncaught exceptions to the active Domain object. It is a child class of EventEmitter. To handle the errors that it catches, listen to its error event. It is created using the following syntax -
```
let domain = require("domain");
let child = domain.create(); 
```
  ************* Methods **************
  * domain.run(function) - Run the supplied function in the context of the domain, implicitly binding all event emitters, timers, and low level requests that are created in that context. This is the most basic way to use a domain.
  * domain.add(emitter) - Explicitly adds an emitter to the domain. If any event handlers called by the emitter throw an error, or if the emitter emits an error event, it will be routed to the domain's error event, just like with implicit binding.
  * domain.remove(emitter) - The opposite of domain.add(emitter). Removes domain handling from the specified emitter.
  * domain.bind(callback) - The returned function will be a wrapper around the supplied callback function. When the returned function is called, any errors that are thrown will be routed to the domain's error event.
  * domain.intercept(callback) - This method is almost identical to domain.bind(callback). However, in addition to catching thrown errors, it will also intercept Error objects sent as the first argument to the function.
  * domain.enter() - The enter method is plumbing used by the run, bind, and intercept methods to set the active domain. It sets domain.active and process.domain to the domain, and implicitly pushes the domain onto the domain stack managed by the domain module (see domain.exit() for details on the domain stack). The call to enter delimits the beginning of a chain of asynchronous calls and I/O operations bound to a domain.
  * domain.exit() - The exit method exits the current domain, popping it off the domain stack. Whenever the execution switches to the context of a different chain of asynchronous calls, it's important to ensure that the current domain is exited. The call to exit delimits either the end of or an interruption to the chain of asynchronous calls and I/O operations bound to a domain.
  * domain.dispose() - Once dispose has been called, the domain will no longer be used by callbacks bound into the domain via run, bind, or intercept, and a dispose event is emit.
  * ***** Properties ********
  * domain.members - An array of timers and event emitters that have been explicitly added to the domain.
 */
let EventEmitter = require("events").EventEmitter;
let domain = require("domain");

let emitter1 = new EventEmitter();

//Create a domain
let domain1 = domain.create();

domain1.on("error", (err) => {
	console.log(`domain1 handled this error(${err.message})`);
});

//Explicit binding
domain1.add(emitter1);

emitter1.on("error", (err)=>{
	console.log(`listener handled this error (${err.message})`);
})

emitter1.emit("error", new Error("To be handled by listener"));
emitter1.removeAllListeners("error");
emitter1.emit('error', new Error("To be handled by domain1"));

let domain2 = domain.create();

domain2.on("error", (err)=>{
	console.log(`domain2 handled this error (${err.message})`);
});

//Implicit binding
let emitter2 = new EventEmitter();
domain2.run(()=>{
	emitter2.emit("error", new Error("To be handled by domain2 Emitter 2 Emitter2 Emitter2"));
});
domain1.remove(emitter1);
emitter1.emit("error", new Error("Converted to exception. System will crash!"));