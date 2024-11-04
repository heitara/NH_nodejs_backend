// import fs from 'node:fs';

import fs from 'node:fs/promises'; 
import { describe } from 'node:test';

const options = {encoding: 'utf-8'};
// const filename = "new.app.js";
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
//     const data = await fs.readFile(filename, options);
//     console.log("Data: ", data);
// } catch (error) {
//     console.log(error);
// }

// let d = new Date();
// const info = {
//     version: "1.0.0",
//     date: d.getTime(),
//     size: 1024
// };

// try {
//     const r = await fs.writeFile("output.json", JSON.stringify(info), options);
//     console.log("Result: ", r);
// } catch (error) {
//     console.log(error);
// }

// fs.writeFileSync("output.sync.json", JSON.stringify(info), options);

const filename = "input.txt";
const processData = (data) => {
    let records = [];

   let rows = data.split('\n');

   rows.forEach(row => {
        const date = row.substring(0,10);
        const [title, details] = row.split(";");

        records.push({
            date,
            title: title.substring(11),
            details
        })
   });

    return records;
}

try {
    const data = await fs.readFile(filename, options);
    const jsonData = processData(data);
    await fs.writeFile("output.from.input.json", JSON.stringify(jsonData), options);
    // console.log(r);
} catch (error) {
    console.log(error);
}
// console.log("Finish!");

