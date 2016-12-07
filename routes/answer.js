var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.db;
  var pollcollection = db.get('polls');
  var usercollection = db.get('users');
  console.log('we did it?');

  pollcollection.find({}, function (e, polllist) {
    var list = polllist;
    for (var i = 0; i < list.length; i++) {
        if (req.answered.includes(list[i].question)) {
            list[i] = null;
        }
    }
     for (var i = 0; i < list.length; i++) {
        if (i != null) {
             res.render('answer', {
                 title: 'Answer Polls',
                bodytext: '',
                 question: polllist[i].question,
                 answer1: polllist[i].answer1,
                 answer2: polllist[i].answer2,
                 answer3: polllist[i].answer3,
                 answer4: polllist[i].answer4
            });
             t
            req.answered.push();
            req.answered[req.answered.length - 1] = i;
        }
        if (i == list.length - 1) {
            res.render('answer', {
                title: 'Answer Polls',
                bodytext: '',
                question: "There are no more polls to answer!",
                answer1: "Oh no!",
                answer2: "How disappointing...",
                answer3: "This website must be horrible",
                answer4: "When will there be more polls?"
            });
        }
    }
  });
});

router.post('/', function(req, res, next) {
  var db = req.db;
  var pollcollection = db.get('polls');
  //console.log(req);
  //pollcollection.update({'question':''}, {$set:{'question':'New MongoDB Tutorial'}},{multi:true})


  res.render('answer', {
    title: 'Create A New Poll',
    message: 'your user was created successfully!'
    });
  //res.send('this is a simple response: your user was created!');
  console.log('We added the stuff');
});

module.exports = router;