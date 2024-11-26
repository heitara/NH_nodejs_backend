const print = console.log;

print(process.env["VAR1"]);

if (process.env["NODE_VERSION"] === undefined) {
    print("Missing ENV - NODE_VERSION!");
    process.exit(1);
}

process.on('exit', (code) => {
    print(`Exiting with code ${code}!`);
});

process.on('SIGINT', () => {
    print("Interrupt signal handler!");
    // process.exit();
});

setTimeout(() => {
    print("Timeout!");
    process.exit(10);
}, 3000);
