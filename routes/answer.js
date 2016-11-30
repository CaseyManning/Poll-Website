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

  pollcollection.update({'question':''}, {$set:{'title':'New MongoDB Tutorial'}},{multi:true})


  res.render('answer', {
    title: 'Create A New Poll',
    message: 'your user was created successfully!',
    });
  //res.send('this is a simple response: your user was created!');
  console.log('We added the stuff')
});


module.exports = router;