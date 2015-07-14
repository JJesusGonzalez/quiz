exports.question = function(req,res){
    res.render('quizes/question',{pregunta:"Capital De España",title:"Quiz Juego"});
};
exports.answer = function(req,res){
    if(req.query.respuesta === 'Madrid'){
        res.render('quizes/answer',{respuesta:'Correcto',title:"Acertaste"});
    }else{
        res.render('quizes/answer',{respuesta:'Incorrecto',title:"Lo siento, deberias de probar otra vez."});
    }
};
