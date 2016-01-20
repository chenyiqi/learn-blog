var router = require('express').Router();
var username;
router.get('/', function(req, res) {
    console.log(req.body);
    res.render('blog/index', {
        title: '首页index信息',
        username: username
    });
});

router.get('/login', function(req, res) {
    res.render('blog/index', {
        username: username
    });
});

router.post('/login', function(req, res) {
    username = req.body.username;
    res.redirect('/');
});

module.exports = router;