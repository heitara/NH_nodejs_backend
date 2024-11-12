import {spawnSync} from 'node:child_process';

const ls = spawnSync('dir', ["-l"]);

console.log(`Output: ${ls.output}`);
console.log(`Child Process Status: ${ls.status}`);
console.log(`Error: ${ls.error}`);

// ls.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
// });
  
// ls.stderr.on('data', (data) => {
//     console.error(`stderr: ${data}`);
// });
  
// ls.on('close', (code, signal) => {
//     console.log(`child process exited with code ${code} and ${signal}`);
// });

console.log("Parent process has reached the end of the script.");