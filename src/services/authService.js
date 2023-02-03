const User = require('../models/User')

exports.getUserByUserName =  (username) => {
    return User.findOne({ username })
}

exports.register =  (username, password) => {
    return User.create({ username, password })
}

exports.login = (username, password) => {
    const  user = this.getUserByUserName(username)

    if(!user) {
        throw "Invalid username or password"
    }

    
}