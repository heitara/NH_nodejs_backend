import express from 'express';
import { router } from './src/user/endpoints.js';

const app = express();
const port = 3000;

// TODO HTTP requests use https://hoppscotch.io/

// express middleware
// process the data that's sent as json
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/hello', (req, res) => {
    res.send('Hello Express!');
});

app.post('/blog/publish', (req, res) => {
    console.log("A post request was executed!");

    console.log("Data: ", req.body);

    const result = {
        success: true,
        data: {
            id: 1,
            title: "New blog post",
            text: "Some text goes here"
        }
    };
    res.send(result);
});

app.use('/user', router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});