var router = require('express').Router(),
    User = require('../app/models/user');

router.get('/', function(req, res) {    
    res.render('blog/index', {
        title: '首页index信息',
        username: ''
    });
});
router.get('/register', function(req, res) {
    res.render('blog/register', {
        username: ''
    });
});

router.post('/register', function(req, res) {
    var name = req.body.username,
        password = req.body.password;

    User.findOne({name: name}, function(err, user) {
        if(err) {
            console.log(err);
        }

        if(user) {
            return res.redirect('/login');
        } else {
            var user = new User({
                name: name,
                password: password
            });

            user.save(function(err, user) {
                if(err) {
                    console.log(err);
                }

                res.redirect('/');
            });
        }
    });
});

router.get('/login', function(req, res) {
    res.render('blog/login');
});

router.post('/login', function(req, res) {
    var name = req.body.username,
        password = req.body.password;

    User.findOne({name: name}, function(err, user) {
        if(err) console.log(err);

        if(!user) {
            return res.redirect('/register');
        }
        console.log(user);
        user.comparepassword(password, function(err, isMatch) {
            if(err) {
                console.log(err);
            }

            if(isMatch) {
                res.redirect('/');
            } else {
                return res.redirect('back');
            }
        });

    })

    

});

module.exports = router;