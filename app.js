const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the Express Application");
})

var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    console.log('Application running on port:' + port + '/');
});
