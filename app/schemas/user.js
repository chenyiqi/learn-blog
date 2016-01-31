var mongoose = require('mongoose');
<<<<<<< HEAD
	
var UserSchemas = new mongoose.Schemas({
	name: {
		type: String,
		unique: true
	},
	password: {
		type: String
	},
	meta: {
=======

var UserSchema = new mongoose.Schema({
    name: {
        unique: true,
        type: String
    },
    password: {
        type: String
    },
    meta: {
>>>>>>> cfef62887dfc219688c847d8e79fea86d09e54c8
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

<<<<<<< HEAD
UserSchemas.pre('save', function(next) {
	next();
});

module.exports = UserSchemas;
=======
UserSchema.pre('save', function(next) {
    if(this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }

    next();
});

UserSchema.methods = {
    comparepassword: function(password, callback) {
        if(password == this.password) {
            callback(null, true);
        } else {
            callback(Error("Illegal callback:" + "密码错误"));
        }
    }
}

module.exports = UserSchema;
>>>>>>> cfef62887dfc219688c847d8e79fea86d09e54c8
