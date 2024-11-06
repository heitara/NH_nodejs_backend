import { Buffer } from 'node:buffer';

const buf = Buffer.alloc(5);
const buf1 = Buffer.alloc(5, 0x6A); // ASCII
const buf2 = Buffer.alloc(5, 'j');

console.log(buf);
// Prints: <Buffer 00 00 00 00 00>
console.log(buf1);
console.log(buf2);
// FF = 255 

// 1 bit => 0 or 1

// 1 byte is 8 bits => 2 ^ 8 = 256  0 - 255

const bufBase64 = Buffer.alloc(11, 'aGVsbG8gd29ybGQ=', 'base64');// hello world
const bufPlain = Buffer.alloc(12, 'hello world');
console.log(bufBase64);
console.log(bufPlain);

//a - 10
//b - 11
//c - 12
//d - 13
//e - 14
//f - 15

//62 (hex) = 6 * 16 + 2 (dec)  //98 == 96 + 2

const totalLength = bufBase64.length + bufPlain.length;

const sum = Buffer.concat([bufPlain, bufBase64], totalLength);

console.log(`Sum=${sum}`);
const arrayOfHexValues = [0x62, 0x75, 0x66, 0x66, 0x65, 0x72];
const bufUtf8 = Buffer.from(arrayOfHexValues); //buffer , here we know that 0x61 is a
console.log(`arrayOfHexValues.length = ${arrayOfHexValues.length}`);
console.log(`bufUtf8.length = ${bufUtf8.length}`);
console.log(`${bufUtf8}`);

const arrA = Uint8Array.from([0x63, 0x64, 0x65, 0x66]); // 4 elements
const arrB = new Uint8Array(arrA.buffer, 1, 2); // 2 elements
console.log(arrA.buffer === arrB.buffer); // true

const bufB = Buffer.from(arrB.buffer);
const bufOnlyB = Buffer.from(arrB);
console.log(`${arrA}`);
// console.log(`${arrA.buffer}`);
console.log(`${arrB}`);
console.log(`bufB = ${bufB}`);
console.log(`bufOnlyB = ${bufOnlyB}`);

const stringAsHex = Buffer.from('7468697320697320612074c3a97374', 'hex');

console.log(stringAsHex);
console.log(`${stringAsHex}`);
console.log("Buffer= " + stringAsHex);