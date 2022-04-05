var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/pikachu', function(req, res, next) {
  res.send("<h1>Страница Пикачу</h1>")
});
router.get('/bulbasaur', function(req, res, next) {
  res.send("<h1>Страница Бульбазавра</h1>")
});
router.get('/charmander', function(req, res, next) {
  res.send("<h1>Страница Чармандера</h1>")
});
router.get('/squirtle', function(req, res, next) {
  res.send("<h1>Страница Сквиртла</h1>")
});
module.exports = router;
