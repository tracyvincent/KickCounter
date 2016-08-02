var router = require('express').Router();
// var path = require('path');

var User = require('../models/user');

// router.get('/', function(request, response) {
//   response.sendFile(path.join(__dirname, '../public/views/register.html'));
// });

router.post('/', function(request, response) {
  console.log(request.body);
  User.create(request.body, function(err) {
    if (err) {
      console.log(err);
      response.sendStatus(500);
    } else {
      response.redirect('/');
    }
  });
});

module.exports = router;
