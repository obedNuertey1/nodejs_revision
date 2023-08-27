//'use strict';

////More examples on events
//let events = require('events');
//let eventEmitter = new events.EventEmitter();

////listener #1
//const listner1 = ()=>{
//	console.log('listner1 executed.');
//};

////listner #3
//const listner2 = ()=>{
//	console.log('listner2 executed.');
//};

////Bind the connection event with the listner1 function
//eventEmitter.addListener('connection', listner1);

////Bind the connection event with the listner2 function
//eventEmitter.on('connection', listner2);

//let eventListners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

//console.log(`${eventListners} Listner(s) listening to connection event`);

////Fire the connection event
//eventEmitter.emit('connection');

////Remove the binding of listner1 function
//eventEmitter.removeListener('connection', listner1);
//console.log("Listner1 will not listen now.");

////Fire the connection event
//eventEmitter.emit('connection');

//eventListners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection')

'use strict';

//More examples on events
let events = require('events');
let eventEmitter = new events.EventEmitter();

//listener #1
const listener1 = ()=>{
	console.log('listener1 executed.');
};

//listener #2
const listener2 = () => {
	console.log('listener2 executed.');
};

//Bind the connection event with listener1 function
eventEmitter.addListener('connection', listener1);

//Bind the connection event with the listener2 function
eventEmitter.on('connection', listener2);

let eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(`${eventListeners} Listener(s) listening to connection event`);

//Fire the connection event
eventEmitter.emit('connection');

//Remove the binding of listener1 function
eventEmitter.removeListener('connection', listener1);
console.log("Listener1 will not listen now.");

//Fire the connection event
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(eventListeners);
