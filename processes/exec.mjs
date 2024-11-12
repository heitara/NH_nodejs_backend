import { exec } from 'node:child_process';

exec('ls -l | wc', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
}); 


exec('echo Hello $NAME!', { env: {
    NAME: "Albert"
}}, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
}); 

exec('echo Hello $NAME!', {env: process.env}, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
}); 

// READ more about injection - script injection in Nodejs + exec
// (my)sql injection
// be cautious 
let script = "Peter; rm -f demo.txt";
// DON'T do this!
exec('echo Hello ' + script, {env: process.env}, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
}); 

