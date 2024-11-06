import fs from 'node:fs';
import { Transform } from 'node:stream';
import zlib from 'node:zlib';

const readableStream = fs.createReadStream('input.json');
const writableStream = fs.createWriteStream('output.CAPS.json');

// readableStream.pipe(writableStream);

const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().toUpperCase());
    }
});

// readableStream.pipe(upperCaseTransform).pipe(writableStream);

// const w2 = fs.createWriteStream('input2.json.gz');
// readableStream.pipe(writableStream).pipe(w2); // throws an error can't pipe twice if the pipe argument is not a duples or transform sream

const z = zlib.createGzip();
const w = fs.createWriteStream('input.json.gz');
readableStream.pipe(z).pipe(w); 