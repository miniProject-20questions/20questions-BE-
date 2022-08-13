const express = require('express');
const quizRouter = express.Router();
const quizController = require('../controllers/quiz.controller')



// quizRouter
//     .route('/api/quiz')
//     .get(quizController.getQuiz)    
//     .delete(quizController.deleteQuiz)

// quizRouter
//     .route('/:quizId')
//     .get(quizController.getQuiz)    
//     .post(quizController.postQuiz);


module.exports = quizRouter;


