var express = require('express');
var router = express.Router();

//controladores
var quizController = require('../controllers/quiz_controller');

/* GET home pagina. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Proyecto Quiz' });
});
/*
rutas pregunta y respuesta
*/
router.get('/quizes/question',quizController.question);
router.get('/quizes/answer',quizController.answer);
router.get('/author',function(req,res){
    res.render('author',{title:'Creditos'})
});
module.exports = router;
