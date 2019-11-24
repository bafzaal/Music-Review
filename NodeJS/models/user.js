var mongoose = require('mongoose');

var User = mongoose.model('User', 
{
    username: {type: String, require:true, unique:true, min:6, max:255},
    email: {type: String, require:true, unique:true, min:6, max:255},
    password: {type: String, require:true, min:6, max: 1024}
});

module.exports = { User };