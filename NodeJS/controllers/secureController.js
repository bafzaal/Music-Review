const express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const verify = require('./verifyToken');

var { Song } = require('../models/song');
var { User } = require('../models/user');
var { Review } = require('../models/review');

const { registerValidation, loginValidation } = require('../validation');


//LOGIN
router.post('/', async (req,res) => {
    const { error } = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //CHECK IF EMAIL EXISTS IN DB
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email not found!');

    //CHECK IF PASSWORD IS CORRECT IN DB
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Incorrect Password!')

    //CREATE AND ASSIGN A TOKEN
    const token = jwt.sign({_id: user._id}, 'qwerty');
    res.header('auth-token', token).send({token});

    //res.send(req.body);
});

router.post('/get-user', async (req,res) => {
    const user = await User.findOne({email: req.body.email});
    res.send(user);
})

router.post('/song/', verify, (req, res) => {
    var newSong = new Song
    ({
        objectID: req.body.objectID,
        songTitle: req.body.songTitle,
        artist: req.body.artist,
        album: req.body.album,
        year: req.body.year,
        comment: req.body.comment,
        genre: req.body.genre
    });
    newSong.save((err, doc) => {
        if (err)
        {
            console.log('Error: ' + JSON.stringify(err, undefined, 2));
        }
        else
        {
            res.send(doc);
        }
    });
});

router.post('/add-review-rating/', verify, (req, res) => {
    var newReview = new Review
    ({
        objectID: req.body.objectID,
        submittedBy: req.body.submittedBy,
        ratingForObject: req.body.ratingForObject,
        description: req.body.description
    });
    newReview.save((err, doc) => {
        if (err)
        {
            console.log('Error: ' + JSON.stringify(err, undefined, 2));
        }
        else
        {
            res.send(doc);
        }
    });
});


router.get('/song', verify, (req, res) => {
    console.log("before sendings")
    res.send(req.user);
    //User.findOne({_id: req.user});
});

module.exports = router;