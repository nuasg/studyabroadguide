// app/routes.js

module.exports = function(app) {

  var fs = require('fs');
  var nodemailer = require('nodemailer');

//// VIEWS ---------------------------------------------------------------------
	// home page
	app.get('/', function(req, res) {
		res.render('index.html', {
			// user : req.user
		});
	});

  app.post('/feedback', function(req,res){
      console.log(req.body);
      // create reusable transporter object using the default SMTP transport
      var transporter = nodemailer.createTransport('direct', {
        debug: true, //this!!!
      });

      // setup e-mail data with unicode symbols
      var mailOptions = {
          from: 'Fred Foo 👥 <foo@blurdybloop.com>', // sender address
          to: 'asg-services@u.northwestern.edu', // list of receivers
          subject: 'Study Abroad Feedback', // Subject line
          text: 'wow', // plaintext body
          html: '<b>wow</b>' // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, function(error, info){
          if(error){
              return console.log(error);
          }
          console.log('Message sent: ' + info.response);
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
            res.status(404).send('Country not found.');
            //console.log(err);
        }
    });
  });
};
