const express = require('express');
var router = express.Router();

const bcrypt = require('bcryptjs');

var { Song } = require('../models/song');
var { User } = require('../models/user');
const { registerValidation } = require('../validation');

router.get('/', (req, res) => {
    res.json({
        message: 'Homepage Here'
    });
});

router.get('/song', (req, res) => {
    res.json({
        message: 'List of Songs (Non Authenticated)'
    });
});

router.get('/search', (req, res) => {
    res.json({
        message: 'Search results here'
    });
});

router.post('/register', async (req, res) => {

    //VALIDATE USER DATA
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //CHECK IF USER ALREADY IN DATABASE
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists');

    const usernameExist = await User.findOne({username: req.body.username});
    if(usernameExist) return res.status(400).send('Username is taken');

    //HASH THE PASSWORDS
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //CREATE A NEW USER
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword
    });
    try{
        const savedUser = await user.save();
        res.send({user: user._id});
    }catch(err) {
        res.status(400).send(err);
    }
});


module.exports = router;