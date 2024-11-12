import {spawn} from 'node:child_process';

const ls = spawn('ls');
const wc = spawn('wc');

//spawn - DONE
//exec
//execFile
//fork

// LS -> pass the data to ls.stdout
// WC -> the data from ls.stdout -> wc.stdin
// stdin -  
// stdout - 
// stderr - 

// ls.stdout.on('data', (data) => {
//     console.log(`[LS] stdout: ${data}`);
//     wc.stdin.write(data);
//     // do more actions
//     wc.stdin.write(data);
//     // do even more actions
//     wc.stdin.end();
// });

ls.stdout.pipe(wc.stdin);
  
ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

ls.on('error', (error) => {
    console.log(`child process emits an error ${error}`);
});

ls.on('close', (code, signal) => {
    console.log(`[LS] child process exited with code ${code} and ${signal}`);
});

wc.stdout.on('data', (data) => {
    console.log(`[CW] stdout: ${data}`);
});
wc.on('close', (code, signal) => {
    console.log(`[CW] child process exited with code ${code} and ${signal}`);
});
wc.on('error', (error) => {
    console.log(`[CW] child process emits an error ${error}`);
});

console.log("Parent process has reached the end of the script.");