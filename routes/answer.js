var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var db = req.db;
	var pollcollection = db.get('polls');
	console.log('we did it?')
	pollcollection.find({}, function (e, polllist) {
  	res.render('answer', {
   		title: 'Answer Polls',
    	bodytext: '',
    	question: polllist[0].question,
    	answer1: polllist[0].answer1,
    	answer2: polllist[0].answer2,
    	answer3: polllist[0].answer3,
    	answer4: polllist[0].answer4,
 	});
  });
});

module.exports = router;