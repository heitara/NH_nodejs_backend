import { fork } from 'child_process';

const child = fork('child.mjs');

child.on('message', (message) => {
  console.log('Received from child:', message);
  // use to close the connection with a child
  child.disconnect();
});

child.send({ message: 'Hello world!', user: 'demo' });
