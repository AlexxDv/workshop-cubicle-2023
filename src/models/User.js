const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 5,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9]+$/.test(v);
            },
            message: "Username must contain only letters and numbers",
        },
    },
    password: {
        type: String,
        required: true,
        minLength: [8, "Password is too short!"],
        validate: /^[a-zA-Z0-9]+$/,
    },
});

userSchema.pre("save", function (next) {
    bcrypt.hash(this.password, 10).then((hash) => {
        this.password = hash;
        next();
    });
});

userSchema.method("validatePassword", function (password) {
    return bcrypt.compare(password, this.password);
});

const User = model("User", userSchema);

module.exports = User;
