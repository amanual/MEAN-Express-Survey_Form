var express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({ extended: true }));

// This sets the location where express will look for the ejs views
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {    
    response.render('index');
})
app.post('/display', function (request, response) {
    submited_info ={
    name: request.body.name,
    location: request.body.location,
    languages: request.body.languages,
    comment: request.body.comment
    };
    response.render('display', { user_info: submited_info });
    console.log(name,location,language,comment)

})
app.listen(8000, function () {
    console.log("listening on port 8000");
})