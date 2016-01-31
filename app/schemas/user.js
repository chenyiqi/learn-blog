var mongoose = require('mongoose');
	
var UserSchemas = new mongoose.Schemas({
	name: {
		type: String,
		unique: true
	},
	password: {
		type: String
	},
	meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
});

UserSchemas.pre('save', function(next) {
	next();
});

module.exports = UserSchemas;