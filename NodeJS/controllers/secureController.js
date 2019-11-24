const express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const verify = require('./verifyToken');

var { Song } = require('../models/song');
var { User } = require('../models/user');
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
    res.header('auth-token', token).send(token);

    // res.send('Logged In!');
});

router.get('/song', verify, (req, res) => {
    res.send(req.user);
    //User.findOne({_id: req.user});
});

module.exports = router;