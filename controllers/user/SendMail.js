const nodemailer = require('nodemailer');
const jwt = require('jwt-simple');
const config = require('../../config');
const moment = require('moment');

module.exports = function(user){
    const expires = moment().add(15, 'm').valueOf();
    const token = jwt.encode({
        iss: user.id,
        exp: expires
    }, config.env.token.secret);
    
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'recup.nodeprojet@gmail.com',
            pass: 'Timetsylvain'
        }
    });
    
    let mailOptions = {
        from: '"BmyBank"', 
        to: user.email, 
        subject: 'Récupération mot de passe',
        text: 'token : ' + token
    };
    return new Promise((resolve, reject) => {
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				return reject("couldn't send mail");
			}
			return resolve({message:"mail sent"});
		})
	});
}
