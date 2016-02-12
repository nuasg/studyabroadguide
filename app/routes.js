// app/routes.js

module.exports = function(app) {

  var validator = require('validator');
  var nodemailer = require('nodemailer');

  /*
  * HOME PAGE
  * Exactly what you think it is
  */
  app.get('/', function(req, res) {
    res.render('index.html');
  });

  /*
  * COUNTRY PAGES
  * Dynamically load country pages by searching in /views; prevents us from having to create a new route for each new country
  */
  app.get('/:country', function(req, res) {
    res.render(req.params.country + ".html");
  });

  /*
  * FEEDBACK FORM POST->EMAIL ENDPOINT
  * Post here to send an email to asg-services
  */
  app.post('/feedback', function(req,res) {
    console.log(req.body);

    // for sneaky bastards who think it's fun to send bogus POST requests
    if (!req.body.email || !req.body.text || !validator.isEmail(req.body.email)) {
      res.status(418).send();
    }

    // different SMTP protocols for localhost vs vazzak2
    var transporter;
    if (process.env.TEST == '1') {
      // create reusable transporter object using the default SMTP transport
      transporter = nodemailer.createTransport('direct', {
        debug: true
      });

    } else if (process.env.HOSTNAME == 'vazzak2') {
      transporter = nodemailer.createTransport('SMTP', {
        host: 'hostsmtp.northwestern.edu',
        port: 25
      });

    } else {
      console.log("WARNING: Check your environment variables!");
    }

    var mailOptions = {
      to: 'asg-services@u.northwestern.edu',
      subject: '[studyabroadguide] FEEDBACK FORM',
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


};
