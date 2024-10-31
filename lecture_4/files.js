// import fs from 'node:fs';

import fs from 'node:fs/promises'; 

const options = {encoding: 'utf-8'};
const filename = "new.app.js";
// fs.readFile(filename, options, (error, data) => {
//     if(error) {
//         console.log("Error: ", error); 
//         return;
//     }
    
//     console.log("File content:", data);
// });

// const data = fs.readFileSync(filename, options);
// console.log("Data: ", data);

// async function read() {
    
// }

// try {
//     const data = await fs.readFile(filename + ".invalid", options);
//     console.log("Data: ", data);
// } catch (error) {
//     console.log(error);
// }


const info = {
    version: "1.0.0",
    date: Date(),
    size: 1024
};

try {
    const r = await fs.writeFile("output.json", JSON.stringify(info), options);
    console.log("Result: ", r);
} catch (error) {
    console.log(error);
}


console.log("Finish!");

