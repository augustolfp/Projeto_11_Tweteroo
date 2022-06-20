import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let users = [];

app.post("/sign-up", (req, res) => {
    const user = req.body;
    users.push(user);
    console.log(user);
    res.send("OK");
});

app.get("/tweets", (req, res) => {

});

app.post("/tweets", (req, res) => {

});

app.listen(5000);