const User = require('../models/User')

exports.getUserByUserName = (username) => {
    return User.findOne({ username })
}

exports.register = (username, password) => {
    return User.create({ username, password })
}

exports.login = async (username, password) => {
    const user = await this.getUserByUserName(username)

    const isValid = await user.validatePassword(password)

    if (!user || !isValid) {
        throw "Invalid username or password";
    }

    return user;

}