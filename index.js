const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: false }));

const transporter = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: 'postmaster@mg.aralawrence.com',
    pass: process.env.MAILGUN_PASS,
  },
});

app.post('/email', (req, res) => {
  const message = {
    from: 'YourServer',
    to: 'ara.e.lawrence@gmail.com',
    subject: 'Message from portfolio site',
    text: req.body.text,
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Send: ${info.response}`);
    }
  });

  res.send('nothing to see here');
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(port);
