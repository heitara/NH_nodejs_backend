const express = require('express');
const app = express();
const qs = require('qs');
const port = process.env.PORT || 3000;
const z = require('zod');
const url = require('node:url');

// localhost 127.0.0.1 and ::1 are blocked
const blockedIps = ['192.168.1.1', '127.0.0.1', '::1'];

const userSchema = z.object({
    username: z.string().min(3).max(25),
    email: z.string().email(),
    age: z.number().int().positive().gte(12)
});

app.use((req, res, next) => {
    const clientIP = req.ip;
    if (blockedIps.includes(clientIP)) {
        return res.status(403).send('You IP is blocked!');
    }

    next();
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

const responseSchema = z.object({
    success: z.boolean(),
    data: z.object({
        id: z.number().int(),
        username: z.string(),
        jwt: z.string()
    })
});

app.get('/user/:id', (req, res) => {
    // TODO: validate id parameter to be a valid int using zod
    const id = req.params.id;
    // TODO: fetch user from database
    const user = { id: parseInt(id),
        username: 'Batman',
        jwt: 'a.valid.jwt.token.goes.here' };
    const fullResponse = { success: true, data: user };
    const validationResult = responseSchema.safeParse(fullResponse);

    if (!validationResult.success) {
        return res.status(500).send({success:false, errors: validationResult.error.errors});
    }

    res.send(fullResponse);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});