const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Welcome to the Express Application");
})

app.get('/healthcheck', (req, res) => {
    res.send("healthly");
})

app.listen(port, () => {});