
import express from 'express';
export const router = express.Router();
router.post('/create', (req, res) => {
    console.log("Data: ", req.body);

    const result = {
        success: true,
        data: {
            id: 1,
            name: "Demo",
            email: "demo@gmail.com"
        }
    };
    res.send(result);
});
//CRUD
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    console.log("userId: ", userId);
    console.log("Data: ", req.body);
    console.log("Type: ", typeof userId);

    const parsedId = parseInt(userId);
    if(isNaN(parsedId)) {
        res.send({succes: false, error: "Invalid user id!"});
        return;
    }
    const result = {
        success: true,
        data: {
            id: parsedId,
            name: "Demo",
            email: "demo@gmail.com"
        }
    };
    res.send(result);
});