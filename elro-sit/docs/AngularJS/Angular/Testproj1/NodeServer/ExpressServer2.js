/**
 * Created by wx53 on 9/25/2014.
 */

var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express


var port = process.env.PORT || 3001; 		// set our port

// ROUTES FOR OUR API
// =============================================================================
			// get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);