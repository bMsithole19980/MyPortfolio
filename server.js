const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Replace with your email service provider (e.g., 'Gmail')
  auth: {
    user: 'bmsithole1998@gmail.com', // Replace with your email address
    pass: 'bM19980@', // Replace with your email password
  },
});

app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const mailOptions = {
      from: 'bongin@wirespeed.co.za', // Replace with your email address
      to: 'bmsithole19980@gmail.com', // Replace with the recipient's email address
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Email sending failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
