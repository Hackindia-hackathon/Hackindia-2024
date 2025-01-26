const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' }); // Directory to store uploaded files

app.post('/send-email', upload.single('file'), (req, res) => {
    const filePath = req.file.path;

    // Configure your email service
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email service
        auth: {
            user: 'your-email@gmail.com', // Your email
            pass: 'your-email-password' // Your email password or app password
        }
    });

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: 'target-email@example.com', // Target email address
        subject: 'File Attachment',
        text: 'Please find the attached file.',
        attachments: [
            {
                filename: req.file.originalname,
                path: filePath // Path to the uploaded file
            }
        ]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).json({ message: 'Email sent: ' + info.response });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});