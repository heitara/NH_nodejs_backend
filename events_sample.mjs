import EventEmitter from 'events';

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Create an event listener function, using arrow syntax
const greetListener = (name) => {
  console.log(`Hello, ${name}!`);
};

// Bind the 'greet' event to the listener function
eventEmitter.on('greet', greetListener);
// Here the code starts listening for the event

// Trigger (emit) the 'greet' event with an argument
eventEmitter.emit('greet', 'Emil');