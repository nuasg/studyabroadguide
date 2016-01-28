// app/routes.js

module.exports = function(app) {

  var fs = require('fs');

//// VIEWS ---------------------------------------------------------------------
	// home page
	app.get('/', function(req, res) {
		res.render('index.html', {
			// user : req.user
		});
	});

  app.get('/:country', function(req, res){
    var file = __dirname + "/../public/views/" + req.params.country + ".html";

    fs.access(file, fs.F_OK, function(err) {
        if (!err) {
            // Do something
            res.render(file, {

            });
        } else {
            // It isn't accessible
            res.send('Country not found.', 404);
            //console.log(err);
        }
    });
  });
};
