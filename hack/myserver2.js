// load required modules
var express = require("express");           // web framework external module
var path = require('path');
var router = express.Router();


// setup and configure Express http ukerver. Expect a subfolder called "static" to be the web root.
var app = express();

//Default page
router.get("/", function(req, res) {
    res.sendfile(path.join(__dirname + "/index.html"));
});

//annoymous.html accessed through /annoymous
router.get("/annoymous", function(req, res) {
    res.sendfile(path.join(__dirname + "/annoymous.html"));
});
//
//annoymous.html accessed through /annoymous
router.get("/webcam", function(req, res) {
    res.sendfile(path.join(__dirname + "/webcam.html"));
});

app.use('/', router);
// start Express http server
app.listen(process.env.PORT || 5000);
console.log('Running at port 5000');
