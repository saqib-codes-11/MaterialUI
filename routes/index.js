var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Material-UI Theme Generator' });
});

router.use(function(req,res){
  res.render('index', { title: 'Material-UI Theme Generator' });
})

module.exports = router;
