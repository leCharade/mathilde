const express = require('express');
const dotenv = require('dotenv');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit')

dotenv.config();

const contactRoutes = require('./routes/contact');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Limiteur de requêtes : ici, pas plus de 100 requêtes par minute 
const limiter = rateLimit({
    windowMs: 60000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
})

app.use(helmet({
    crossOriginResourcePolicy: false,
  }));
app.use(limiter);
app.use(express.json());

app.use('/api/contact', contactRoutes);
// app.use((req, res) => {
//    res.json({ message: 'Votre requête a bien été reçue !' }); 
// });

module.exports = app;