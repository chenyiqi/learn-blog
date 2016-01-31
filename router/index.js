var router = require('express').Router();

router.get('/', function(req, res) {
    res.render('blog/index', {
        title: '首页index信息'
    });
});

router.get('/register', function(req, res) {
    res.render('blog/register', {
        username: ''
    });
});

router.get('/login', function(req, res) {
    res.render('blog/index', {
        username: ''
    });
});

router.post('/login', function(req, res) {
    //username = req.body.username;
    res.redirect('/');
});

module.exports = router;