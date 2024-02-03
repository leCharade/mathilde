exports.getMail = (req, res) => {

    // L'intérêt de définir ainsi le post est de s'assurer que toutes les données sont contrôlées et qu'aucune ne peut être modifiée via des outils tels que Postman.
    // const mail = new Post({
    //     userId: authorId,
    //     message: req.body.message,
    //     time: Date.now(),
    //     imageUrl: image,
    //     tag: req.body.tag,
    //     replies: 0,
    //     postReplies: [],
    //     likes: 0,
    //     usersLiked: [],
    //     replyTo: 'ORIGINAL'
    // });

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

    console.log(mail)
    res.status(201).json({ message: 'Mail envoyé !' })
}