console.log(process.argv);

function printHelp() {
    console.log("Use one of the following options:");
    console.log("version");
    console.log("-v");
    console.log("ls");
}

function handleArgument(action) {
    switch (action) {
        case "version":
            console.log("TODO: implement version");
            break;
        case "-v":
            console.log("TODO: implement version");
            break;
        case "ls":
            console.log("TODO: implement ls");
            break;
    
        default:
            printHelp();
            break;
    }
}


if(process.argv.length > 2) {
    let third = process.argv[2];
    if (third === "help") {
        printHelp();
    } else {
        handleArgument(third);
    }
} else {
    printHelp();
}