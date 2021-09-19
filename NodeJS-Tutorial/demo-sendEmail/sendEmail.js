// aşağıdaki işlem gerçekleşmiyor. google güvenlik uyarısı veriyor fakat kodlar tamamen doğru.
let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mehmetazizalgullu@gmail.com',
        pass: '336321743328663774700'
    }
});

let mailOptions = {
    from: 'mehmetazizalgullu@gmail.com',
    to: 'mehmetazizalgullu@hotmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});