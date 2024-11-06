import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.once('newListener', (event, listener) => {
    // when a new listener is added then trigger this callback
    if (event === 'event') {
        listener();
        // Insert a new listener in front
        myEmitter.on('event', () => {
            console.log('B');
        });
    }
});
const eventListener = () => {
    console.log("Standard event listener.");
}
myEmitter.addListener('event', eventListener);

myEmitter.once('event', () => {
    console.log('A');
});

console.log(`Count listeners: ${myEmitter.listenerCount('event')}`); //3
myEmitter.emit('event');


myEmitter.emit('event');
myEmitter.removeListener('event', eventListener);

setTimeout(() => {
    console.log(`Count listeners: ${myEmitter.listenerCount('event')}`);
    myEmitter.emit('event');
}, 2000);

const MESSAGE_EVENT = 'message';

myEmitter.on(MESSAGE_EVENT, (message) => {
    console.log(`Message: ${message.rawBuffer}`);
});

myEmitter.emit(MESSAGE_EVENT, {encoding: "utf8", rawBuffer: Buffer.alloc(11,"hello world")});