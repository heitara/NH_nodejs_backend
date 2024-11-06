import fs from 'node:fs';
import zlib from 'node:zlib';

const readableStream = fs.createReadStream('input.json.gz');
const z = zlib.createGunzip();
const w = fs.createWriteStream('uncompressed.input.json');
readableStream.pipe(z).pipe(w); 