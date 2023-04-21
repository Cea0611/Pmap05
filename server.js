const express = require('express');
const path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'javascript')));
app.use(express.static(path.join(__dirname, 'styles')));

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname + '/views/index.html'))
});

app.get('/display_position', function(request, response) {
    response.sendFile(path.join(__dirname + '/views/display_position.html'));
});

app.get('/map02', function(request, response) {
    response.sendFile(path.join(__dirname + '/views/map02.html'));
});

app.get('/tracked_objects', function(request, response) {
    response.sendFile(path.join(__dirname + '/views/tracked_objects.html'));
});

app.listen(3000);