var express = require('express');
var app = express();
var path = require('path');
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('Home.ejs');
});

app.get('/cv', function(req, res){
    var file = __dirname + "/public/files/CV english (2).pdf";
    res.sendFile(file);
});

app.listen(PORT, () => console.log("Server running!"));
