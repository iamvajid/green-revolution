const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/user', function(req, res, next) {
   return res.send({
     userId: 1,
     name: 'Test Name',
     gitHubID: 'iamvajid'
   })
});

module.exports = router;
