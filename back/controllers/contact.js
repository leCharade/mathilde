const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');
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

    console.log(process.env.MAIL_ADDRESS, process.env.MAIL_PASSWORD)
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

    let mailSubject = "";
    switch (mail.objet) {
        case "reserver":
            mailSubject = "[Réserver une séance] "
            switch (mail.seance) {
                case "grossesse":
                    mailSubject += "Séance grossesse"
                    break;
                case "nouveau-nes":
                    mailSubject += "Séance nouveau-nés"
                    break;
                case "forfait": 
                    mailSubject += "Forfait grossesse + nouveau-nés"
                    break;
                case "enfants-bebes": 
                    mailSubject += "Séance enfants / bébés"
                    break;
                case "1er-anniversaire":
                    mailSubject += "Séance 1er anniversaire"
                    break;
                case "famille":
                    mailSubject += "Séance famille"
                    break;
                default:
                    res.status(401).json({ message: "Veuillez renseigner une séance !" })
            }
            break;
        case "info":
            mailSubject = "[Demande d'informations] "
            switch (mail.seance) {
                case "grossesse":
                    mailSubject += "Séance grossesse"
                    break;
                case "nouveau-nes":
                    mailSubject += "Séance nouveau-nés"
                    break;
                case "forfait": 
                    mailSubject += "Forfait grossesse + nouveau-nés"
                    break;
                case "enfants-bebes": 
                    mailSubject += "Séance enfants / bébés"
                    break;
                case "1er-anniversaire":
                    mailSubject += "Séance 1er anniversaire"
                    break;
                case "famille":
                    mailSubject += "Séance famille"
                    break;
                case "autre":
                    mailSubject += "Autre"
                    break;
                default:
                    res.status(401).json({ message: "Veuillez renseigner une séance !" })
            }
            break;
        case "partenariat":
            mailSubject = "[Partenariat commercial] " + mail.motif
            break;
        case "autre":
            mailSubject = "[Autre] " + mail.motif
            break;
        default:
            res.status(401).json({ message: "Veuillez renseigner un motif de demande !" })  
    }
    if (mail.nom === "") {
        res.status(401).json({ message: "Veuillez renseigner un nom de famille !" })  
    }
    if (mail.prenom === "") {
        res.status(401).json({ message: "Veuillez renseigner un prénom !" })  
    }
    if (mail.telephone === "" && mail.email === "") {
        res.status(401).json({ message: "Veuillez renseigner une méthode de contact !" })  
    }
    if (mail.message === "") {
        res.status(401).json({ message: "Veuillez écrire un message !" })  
    }

    const mailMessage = `<p><strong>Nom :</strong> ` + mail.nom + `</p>` +
    `<p><strong>Prénom :</strong> ` + mail.prenom + `</p>` +
    `<p><strong>Téléphone :</strong> ` + mail.telephone + `</p>` +
    `<p><strong>Adresse email :</strong> ` + mail.email + `</p>` +
    `<p><strong>Motif de la demande : ` + mailSubject + `</strong></p><br />` +
    `<p><strong>Message :</strong></p><p>` + mail.nom + `</p>`

    const mailOptions = {
        from:'noreply@photographiebymathilde.fr',
        to:'tom.tournillon@gmail.com',
        subject:mailSubject,
        text:mailMessage
    }

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