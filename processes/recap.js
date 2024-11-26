const print = console.log;

print(process.env["VAR1"]);

if (process.env["NODE_VERSION"] === undefined) {
    print("Missing ENV - NODE_VERSION!");
    process.exit(1);
}

if (process.env.NODE_VERSION === undefined) {
    print("Missing ENV - NODE_VERSION!");
    process.exit(1);
}

process.on('exit', (code) => {
    print(`Exiting with code ${code}!`);
});

process.on('SIGINT', () => {
    print("Interrupt signal handler!");
    process.exit();
});

setTimeout(() => {
    print("Timeout!");
    process.exit(10);
}, 3000);


print(process.argv);

print(`Current process id = ${process.pid}`);

print(`Current working directory = ${process.cwd()}`);

// print(process.versions);

print(process.platform);

print(`Architecture = ${process.arch}`);
print(`Uptime = ${process.uptime()}`);
print(`Memory =`, process.memoryUsage());



// Read input from the user
// start it using
// echo "hey, NodeJS!" | node processes/recap.js
// process.stdin.setEncoding('utf-8');
process.stdin.on('data', (data) => {
    console.log(`You entered: ${data.toString()}`);
    process.exit(); // End the process
});
  

// const readable = getReadableStreamSomehow();
// alternative implementation using readable stream
// const readable = process.stdin;

// 'readable' may be triggered multiple times as data is buffered in
// readable.on('readable', () => {
//   let chunk;
//   console.log('Stream is readable (new data received in buffer)');
//   let collect = "";
//   // Use a loop to make sure we read all currently available data
//   while (null !== (chunk = readable.read())) {
//     collect += chunk;
//     console.log(`Read ${chunk.length} bytes of data...`);
//   }

//   console.log("All = ", collect);
// });

// 'end' will be triggered once when there is no more data available
// readable.on('end', () => {
//   console.log('Reached end of stream.');
// });