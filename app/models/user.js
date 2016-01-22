var mongoose = require('mongoose'),
    UserSchemas = require('../schemas/user'),
    User = mongoose.model('User', UserSchemas);

module.exports = User;