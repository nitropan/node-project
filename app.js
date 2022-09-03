const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the homepage");
})

app.listen(80, () => {
    console.log('listening to port: 3000');
});