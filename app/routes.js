// app/routes.js

module.exports = function(app) {

  var validator = require('validator');
  var fs = require('fs');
  var nodemailer = require('nodemailer');

	/*
   * HOME PAGE
   */
	app.get('/', function(req, res) {
		res.render('index.html');
	});

  /*
   * FEEDBACK FORM POST->EMAIL ENDPOINT
   */
  app.post('/feedback', function(req,res){
    console.log(req.body);

      // for sneaky bastards who think it's fun to send bogus POST requests
      if (!req.body.email || !req.body.text || !validator.isEmail(req.body.email)) {
        res.status(418).send();
      }

      // create reusable transporter object using the default SMTP transport
      var transporter = nodemailer.createTransport('direct', {
        debug: true,
      });

      var mailOptions = {
          to: 'asg-services@u.northwestern.edu',
          subject: '[studyabroadguide] FEEDBACK',
          text: req.body.text,      // plaintext body
          html: req.body.text       // html body
      };

      // NAME is optional so change FROM depending on whether or not user filled it out
      if (req.body.name) {
        mailOptions.from = req.body.name + " <" + req.body.email + ">";
      } else {
        mailOptions.from = "<" + req.body.email + ">";
      }

      // PROGRAM is also optional so append to email text only if it's there
      if (req.body.program) {
        mailOptions.text = mailOptions.text.concat(" (" + req.body.program + ")");
        mailOptions.html = mailOptions.html.concat(" (" + req.body.program + ")");
      }

      // send mail with defined transport object
      transporter.sendMail(mailOptions, function(error, info){
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: ' + info.response);
          res.send({result: "success"});
      });
  });

  /*
   * COUNTRY PAGES
   * Dynamically load country pages by searching in /views; prevents from having to create a new route for each new country
   */
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
