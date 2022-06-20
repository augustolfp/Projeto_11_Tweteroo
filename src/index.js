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
    res.status(201).send("OK");
});

app.get("/tweets/:userName", (req, res) => {
    const userName = req.params.userName;
    const tweetAuthor = users.find(user => user.username === userName);
    const selectedTweets = tweets.filter(tweet => {
        return tweet.username === userName;
    });

    const formattedTweets = selectedTweets.map(tweet => {
        return {...tweet, avatar: tweetAuthor.avatar};
    });

    res.send(formattedTweets);
})

app.get("/tweets", (req, res) => {
    const userTweets = tweets.map(tweet => {
        const tweetAuthor = users.find(user => user.username === tweet.username);
        return {...tweet, avatar: tweetAuthor.avatar};
    })

    res.send(userTweets.slice(-10));
});

app.post("/tweets", (req, res) => {
    const tweet = req.body;
    tweets.push(tweet);
    res.status(201).send("OK");
});

app.listen(5000);