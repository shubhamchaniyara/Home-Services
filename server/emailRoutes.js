const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'your-email@gmail.com',
//     pass: 'your-email-password',
//   },
// });
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'gregorio.kulas92@ethereal.email',
        pass: 'X7H5h7kPu82tQr6aBd'
    }
});

// POST route to send email
router.post('/sendEmail', async (req, res) => {
  //const { emailAddress } = req.body;

  try {
    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: 'shubhamchaniyara309@gmail.com',
      to: 'shubhamchaniyara07@gmail.com',
      subject: 'Hello ✔',
      text: 'Sending email from your application!',
    });

    console.log('Message sent: %s', info.messageId);
    res.status(200).send('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email.');
  }
});

module.exports = router;
