const express = require('express');

const quizRouter = express.Router();

quizRouter
    .route('/api/quiz')
    .get(quizController.getQuiz)    
    .delete(quizController.deleteQuiz)

quizRouter
    .route('/:quizId')
    .get(quizController.getQuiz)    
    .post(quizController.postQuiz);


module.exports = quizRouter;


