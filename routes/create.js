var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('create', {
    title: 'Create A New Poll',
    bodytext: ''
  });
});

router.post('/', function(req, res, next) {
	var db = req.db;
	var pollcollection = db.get('polls');
	//console.log(req);
	console.log(req.body);
	pollcollection.insert({
		question: req.body.question,
		answer1: req.body.answer1,
		answer2: req.body.answer2,
		answer3: req.body.answer3,
		answer4: req.body.answer4,
	});
	res.render('create', {
		title: 'Create A New Poll',
		message: 'your user was created successfully!',
		});
	//res.send('this is a simple response: your user was created!');
	console.log('We added the stuff')
});

module.exports = router;