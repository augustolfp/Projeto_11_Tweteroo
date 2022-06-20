import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let users = [];
let tweets = [];

app.post("/sign-up", (req, res) => {
    const user = req.body;
    users.push(user);
    res.send("OK");
});

app.get("/tweets", (req, res) => {
    const userTweets = tweets.map(tweet => {
        const tweetAuthor = users.find(user => user.username === tweet.username);
        return {...tweet, avatar: tweetAuthor.avatar};
    })
    console.log(userTweets);
    res.send(userTweets);
});

app.post("/tweets", (req, res) => {
    const tweet = req.body;
    tweets.push(tweet);
    res.send("OK");
});

app.listen(5000);