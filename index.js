import express from 'express';
import { ProfileBody, ProfileTop } from './src/constant.js';
const app = express();

app.get("/jaymar/profile-top", (req, res) => {
    res.setHeader("Content-Type", "image/svg+xml");
    res.status(200).send(ProfileTop)
})

app.get("/jaymar/profile-body", async (req, res) => {
    const resp = await fetch("https://api.github.com/users/jaymar921/repos?per_page=100");
    const data = await resp.json();

    const followerResp = await fetch("https://api.github.com/users/jaymar921/followers?per_page=1000");
    const followers = await followerResp.json();

    const orgsResp = await fetch("https://api.github.com/users/jaymar921/orgs?per_page=1000");
    const orgs = await orgsResp.json();
    
    const information = { stars: 0, repositories: data.length, followers: followers.length, organizations: orgs.length}

    for(let repo of data){
        information.stars += repo.stargazers_count;
    }
    
    res.setHeader("Content-Type", "image/svg+xml");
    res.status(200).send(ProfileBody(information.stars, information.repositories, information.followers, information.organizations))
})


app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.status(200).send(ProfileTop)
})

app.get("/test", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.status(200).send("hello world!")
})

app.use(express.static('assets'));

const server = app.listen(80, () => {
    console.log("server running")
})

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

export default app;