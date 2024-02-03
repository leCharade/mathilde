const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

exports.getMail = (req, res) => {

    const transporter = nodemailer.createTransport(smtpTransport({
        host: "ssl0.ovh.net",
        port: 465,
        secureConnection: true,
        auth: {
            user: process.env.MAIL_ADDRESS,
            pass: process.env.MAIL_PASSWORD
        }
    }));


    const mail = {
        objet: req.body.objet,
        seance: req.body.seance,
        motif: req.body.motif,
        nom: req.body.nom,
        prenom: req.body.prenom,
        telephone: req.body.telephone,
        email: req.body.email,
        message: req.body.message
    }

    const mailOptions = {
        from:'noreply@photographiebymathilde.fr',
        to:'tom.tournillon@gmail.com',
        subject:mail.motif,
        text:mail.message
    }

    console.log(mail)
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error)
        }
        else {
            console.log('Email envoyé ! - ' + info.response)
        }
    })

    res.status(201).json({ message: 'Mail envoyé !' })
}