import express from 'express';
import { ProfileTop } from './src/constant.js';
const app = express();

app.get("/jaymar/profile-top", (req, res) => {
    res.setHeader("Content-Type", "image/svg+xml");
    res.status(200).send(ProfileTop)
})

app.get("/", (req, res) => {
    res.status(200).send(`<div>server is running</div>`)
})

app.use(express.static('assets'));

const server = app.listen(80, () => {
    console.log("server running")
})

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

export default app;