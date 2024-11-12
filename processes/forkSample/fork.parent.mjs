import { fork } from 'child_process';

const names = ["chld1", "chld2", "chld3", "chld4", "chld5"];

for (let index = 0; index < names.length; index++) {
    const name = names[index];

    const worker = fork('worker.mjs');

    const countTo = index + 1;

    worker.send({name, countTo});

    worker.on('message', (message) => {
        console.log(`Worker ${name} finished counting to ${message.countTo}!`);
    });

    worker.on('exit', (code, signal) => {
        console.log(`child process exited with code ${code} and ${signal}`);
    });
    
    worker.on('close', (code, signal) => {
        console.log(`child process closed with code ${code} and ${signal}`);
    });

}