const express = require('express');
const router = express.Router();
const authMiddlewares = require('../middlewares/auth-middleware');

const quizRouter = express.Router();
router.use(authMiddlewares)

const QuizController = require('../controllers/quiz.controller');
const quizController = new QuizController();


quizRouter
    .route('')
    .get(quizController.getQuiz)    
    .post(quizController.postQuiz);

quizRouter
    .route('/:quizId')
    .get(quizController.getQuizById)    
    .delete(quizController.deleteQuiz);


module.exports = router;


