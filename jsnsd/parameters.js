const express = require('express');
const app = express();
const qs = require('qs');
const port = process.env.PORT || 3000;

var url = require('node:url');

// app.use((req, res, next) => {
//     const keys = Object.keys(req.query);
//     const hasDuplicate = keys.some((key) => Array.isArray(req.query[key]));

//     if (hasDuplicate) {
//         return res.status(400).send('Duplicate query parameter');
//     }

//     next();
// });

app.use((req, res, next) => {
    //http://localhost:3001/?id=123&id=1234
    // const query = req.query; // this is an object!!!
    
    const urlParts = url.parse(req.url, false);
    const query = urlParts.query; // id=123&id=1234
    console.log('query:', query);
    console.log('query:', typeof query);
    const parsedQuery = qs.parse(query, { duplicates: 'last' });
    console.log('parsedQuery:', parsedQuery);
    
    const keys = Object.keys(parsedQuery);
    const hasDuplicate = keys.some((key) => Array.isArray(parsedQuery[key]));

    if (hasDuplicate) {
        return res.status(400).send('Duplicate query parameter');
    }

    next();
});



app.get('/', (req, res) => {
    // const keys = Object.keys(req.query);
    console.log("Type of 'id'", typeof req.query["id"]);
    console.log("id=", req.query["id"]);
    res.send('HPP prevented!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});