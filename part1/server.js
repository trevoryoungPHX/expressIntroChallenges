var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var path = require('path');

app.get('/hello', function(req, res) {
  res.send("Hello!");
});

app.post('/create/:name', function(req, res) {
  let object = {"id":1, "name":req.params.name}
  res.json(object);
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});


//Create a GET route for "/verify/:age" that checks if the age is greater than 13. If it is then it sends a 200 status response (for all good). If it is not greater than 13 then send a 403 status code.

app.get('/verify/:age', function(req, res) {
  if (req.params.age > 13) {
    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
  });


app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
