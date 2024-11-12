process.on('message', ({name, countTo}) => {
    console.log(`Worker ${name} started counting to ${countTo}`);
    count(name, countTo);
});


function count(name, to) {
    let current = 0;
    const again = () => {
        if(current >= to) {
            process.send({countTo: to});
            process.exit();
        }

        current += 1;
        console.log(`[${name}] Tick!`);
        setTimeout(again, 1000);

    };

    setTimeout(again, 1000);
}

// count("demo", 5);