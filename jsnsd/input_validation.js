const express = require('express');
const app = express();
const qs = require('qs');
const port = process.env.PORT || 3000;
const z = require('zod');
const url = require('node:url');


const userSchema = z.object({
    username: z.string().min(3).max(25),
    email: z.string().email(),
    age: z.number().int().positive().gte(12)
});
app.use(express.json());
app.use((req, res, next) => {
    const urlParts = url.parse(req.url, false);
    const query = urlParts.query; // id=123&id=1234
    const parsedQuery = qs.parse(query, { duplicates: 'last' });    
    const keys = Object.keys(parsedQuery);
    const hasDuplicate = keys.some((key) => Array.isArray(parsedQuery[key]));

    if (hasDuplicate) {
        return res.status(400).send('Duplicate query parameter');
    }

    next();
});

app.post('/register', (req, res) => {
    const validationResult = userSchema.safeParse(req.body);

    if (!validationResult.success) {
        return res.status(400).send({success:false, errors: validationResult.error.errors});
    }
    // TODO: do an actual registration ...
    res.send('User registered!');
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});