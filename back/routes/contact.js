const express = require('express');
const router = express.Router();

const contactCtrl = require('../controllers/contact');

router.post('/', contactCtrl.getMail);

module.exports = router;