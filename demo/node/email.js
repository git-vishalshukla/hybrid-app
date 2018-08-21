var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vishal.shukla@viitorcloud.com',
    pass: ''
  }
});

module.exports = {
    		a: transporter,
			c: function (mailOptions) { 
					transporter.sendMail(mailOptions, function(error, info){
					if (error) {
						console.log(error);
					} else {
						console.log('Email sent: ' + info.response);
					}
					})
			}	
};