const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true}, 
    email: {type: String, required: true}, 
    userImage: {type: String, required: false}, 
    highscore: [{
        strongMan:  {type: Number, default: 0}, 
        skeeball:  {type: Number, default: 0}, 
        justDance:  {type: Number, default: 0}
    }],
});

const User = mongoose.model("user", UserSchema); 
module.exports = User