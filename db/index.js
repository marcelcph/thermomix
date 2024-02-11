require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  connectionTimeout: 10000,
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("SMTP connection error:", error);
  } else {
    console.log("SMTP server is ready to take our messages");
  }
});

// Endpoint to send an email
app.post("/send-email", async (req, res) => {
  const { name, company, phone, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Ny besked fra ${company}`,
      html: `
      <h3> Navn: </h3>  <p> ${name} </p> 
      <h3> Virksomhed: </h3>  <p> ${company} </p>
      <h3> Telefon: </h3>  <p> ${phone} </p>
      <h3> E-mail: </h3> <p> ${email} </p>
      <br>
      
      <p> Besked:<br> ${message} </p>

      
      `,
    });
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
