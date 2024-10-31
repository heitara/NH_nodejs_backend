import fs from 'node:fs';

// import fsPromises from 'node:fs/promises'; 

const options = {encoding: 'utf-8'};
const filename = "new.app.js";
fs.readFile(filename, options, (error, data) => {
    if(error) {
        console.log("Error: ", error); 
        return;
    }
    
    console.log("File content:", data);
});

const data = fs.readFileSync(filename, options);
console.log("Data: ", data);


console.log("Finish!");

