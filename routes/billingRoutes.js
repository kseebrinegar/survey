const keys = require('../config/keys.js');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {
    app.post('/api/stripe', (res, req) => {
         var x = req.body;
        console.log(x);
    });
};