var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var app = express();
var port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'dest')));
app.use(bodyParser.urlencoded({extended: false}));

var transporter = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: "postmaster@sandbox38f38f1a8503430abcb483bedb87c289.mailgun.org",
    pass: process.env.MAILGUN_PASS
  }
});

app.post('/email', function(req, res) {
    console.log(req.body);

    var message = {
      from: 'YourServer',
      to: 'ara.e.lawrence@gmail.com',
      subject: 'Message from portfolio site',
      text: req.body.text
    };

    transporter.sendMail(message, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Sent: ' + info.response);
      }
    });

    res.send("nothing to see here");
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dest/index.html'));
});

app.listen(port);
