/**
 * Created by wx53 on 9/25/2014.
 */

//var express = require('express');
var express = require ('express');
var app = express();
var router = express.Router ();

router.get('/', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");

    res.json({ "message": "hooray! welcome to our api!" });

});

app.use ('/api',router);
app.listen(3000);
console.log('Listening on port 3000...');
