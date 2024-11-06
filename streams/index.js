const fs = require('node:fs');

// const options = {encoding: "utf8", highWaterMark: 1024};
// const readableStream = fs.createReadStream('input.json', options);
const readableStream = fs.createReadStream('input.json');

const writableStream = fs.createWriteStream('output.json');
let counter = 0;
readableStream.on('data', (chunk) => {

    if (counter == 0) {
        // console.log(Buffer.alloc(chunk));
        console.log(`Received chunk: ${chunk}`);
    }
    counter += 1;
    console.log(`counter = ${counter}`);
    writableStream.write(chunk);
});

readableStream.on('end', () => {
    console.log('Finished reading file.');
    console.log(`counter = ${counter}`);
    writableStream.close((error) => {
        console.log('Copy of the file is ready!');
    });
});




