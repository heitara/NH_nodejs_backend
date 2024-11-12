import {spawn} from 'node:child_process';

const ls = spawn('ls');

ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});
  
ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});
  
ls.on('close', (code, signal) => {
    console.log(`child process exited with code ${code} and ${signal}`);
});

console.log("Parent process has reached the end of the script.");