import EventEmitter from 'events';
// const EventEmitter = require('events');

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Bind the 'greet' event to the listener function
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
  });
// Here the code starts listening for the event

eventEmitter.on('greet', (name) => {
    console.log(`Wait, ${name}!`);
  });

  eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
  });



// Trigger (emit) the 'greet' event with an argument
eventEmitter.emit('greet', 'NodeJS');

// let image = readDataFromSocket();
// diskManager.weHaveReceived(image)
// resizerTool.weHaveReceived(image)
// dbManager.weHaveReceived(image)
// newPartN.weHaveReceived(image)

// let image = readDataFromSocket();
// eventEmitter.emit('imageWasReceived', image);