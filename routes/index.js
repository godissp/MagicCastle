var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/MagicCastle', function(req, res, next) {
  res.render('MagicCastle/index', { title: 'Express' });
});

module.exports = router;
