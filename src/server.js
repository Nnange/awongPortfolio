
let express = require('express');
let app = express();
let nodemailer = require('nodemailer');

const path = require('path');

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

nodemailer.createTransport({
  host: "smtp.gmail.com", 
    port: 587,
    secure: false,
  auth: {
    user: "nnangea@gmail.com",
    pass: "Akwehan5" 
  }
});

// serve PORT running here
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.info(`server has started on ${PORT}`))
