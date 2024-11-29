const http = require("node:http");
const https = require("node:https");

// http.get('http://localhost:3001', (response) => {
//     response.setEncoding('utf8');
//     let responseData = '';
//     response.on('data', (data) => {
//         responseData += data;
//     });

//     response.on('end', () => {
//         console.log("Finished! \n", responseData);
//     });

//     response.on('error', console.log);
// }).on('error', console.log);

//localhost -> 127.0.0.1 IP4
//
// hosts
//127.0.0.1 myserver 

//8.8.8.8 > google.com

// http.get('http://www.google.com/', (response) => {
//     response.setEncoding('utf8');
//     let responseData = '';
//     response.on('data', (data) => {
//         responseData += data;
//     });

//     response.on('end', () => {
//         console.log("Finished! \n", responseData);
//     });

//     response.on('error', console.log);
// }).on('error', console.log);

// https.get('https://www.google.com/', (response) => {
//     response.setEncoding('utf8');
//     let responseData = '';
//     response.on('data', (data) => {
//         responseData += data;
//     });

//     response.on('end', () => {
//         console.log("Finished! \n", responseData);
//     });

//     response.on('error', console.log);
// }).on('error', console.log);

// const tId = setTimeout(() => {
    
// }, 2000);

// clearTimeout(tId);

if(process.argv.length > 2) {
    let third = process.argv[2];
    const LOADING_TIME = "LOADING_TIME";
    console.time(LOADING_TIME);
    http.get(third, (response) => {

        let responseData = [];
        response.on('data', (data) => {
            responseData.push(data);
        });
    
        response.on('end', () => {
            console.timeEnd(LOADING_TIME);
            console.log("Finished! \n", Buffer.concat(responseData).toString('utf8'));
        });
    
        response.on('error', console.log);
    }).on('error', console.log);
} else {
    console.log("Please explore the source code of the script for more information.")
}
