var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('newuser', {
    title: 'HappyPolls',
    bodytext: ''
  });
});

router.post('/', function(req, res, next) {
	var db = req.db;
	var usercollection = db.get('users');
	//console.log(req);
	console.log(req.body);
	usercollection.insert({
		username: req.body.username,
		password: req.body.password,
		password: req.body.password
	});
	res.render('answer', {
		title: 'Answer Polls',
		message: 'your user was created successfully!'
		});
	//res.send('this is a simple response: your user was created!');
	console.log('We added the a user');
});

module.exports = router;