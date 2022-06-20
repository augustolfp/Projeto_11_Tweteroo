import express from 'express';

const app = express();

let users = [];

app.post("/sign-up", (req, res) => {
    const user = req.body;
    users.push(user);
    res.send("OK");
});

app.get("/tweets", (req, res) => {

});

app.post("/tweets", (req, res) => {

});

app.listen(5000);