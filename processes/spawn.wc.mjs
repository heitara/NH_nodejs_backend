import {spawn} from 'node:child_process';

const cw = spawn('wc');

cw.stdout.on('data', (data) => {
    console.log(`[CW] stdout: ${data}`);
});
  
cw.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

cw.on('error', (error) => {
    console.log(`child process emits an error ${error}`);
});

cw.on('close', (code, signal) => {
    console.log(`[CW] child process exited with code ${code} and ${signal}`);
});

console.log("Parent process has reached the end of the script.");