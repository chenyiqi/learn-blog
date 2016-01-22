var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {
        unique: true,
        type: String
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