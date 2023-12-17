var express = require('express');
var router = express.Router();

//* HOME PAGE *//
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenid@ a la prueba técnica de Adalab' });
});

module.exports = router;