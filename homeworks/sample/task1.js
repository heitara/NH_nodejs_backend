const fs = require('fs');

function readFileContent(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
}

readFileContent('nonexistent.txt');
