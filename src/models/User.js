const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 3,
    },
    password: {
        type: String,
         required: true,
    }
})



const User = model("User", userSchema);

module.exports = User;