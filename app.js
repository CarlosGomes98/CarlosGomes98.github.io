var express = require('express');
var app = express();
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('Home.ejs');
});

app.get('/cv', function(req, res){
    var file = __dirname + "/public/files/cv.pdf";
    res.sendFile(file);
});

app.listen(3000, 'localhost', () => console.log("Server running!"));