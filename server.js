var express = require('express');

var app = express();

app.get('/', function (req, resp) {
    resp.render('index.jade');
});

port = process.env.PORT || 8080;
app.listen(port);

console.log('listening at http://localhost:' + port);