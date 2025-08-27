const router = require('express').Router();
const Tweet = require('../database/models/tweet.model');

router.post('/', (req, res) => {
    const body = req.body;              //body ontient toutes les informations envoyées 
    const newTweet = new Tweet(body);   // par le client lors de l’appel à l’API /tweets en POST
    newTweet.save().then( newTweet => res.redirect('/'))
                    .catch( err => {
                        const errors = Object.keys(err.errors).map(key => err.errors[key].message);
                        res.status(400).render('tweets/tweet-form', {errors});
                    })
})

module.exports = router;