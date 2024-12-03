const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    const keys = Object.keys(req.query);
    const hasDuplicate = keys.some((key) => Array.isArray(req.query[key]));

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