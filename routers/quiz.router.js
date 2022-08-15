const express = require('express');
const router = express.Router();
const authMiddlewares = require('../middlewares/auth-middleware');

router.use(authMiddlewares)

const QuizController = require('../controllers/quiz.controller');
const quizController = new QuizController();

//상세페이지(질문조회)
router.get('/', quizController.getQuiz);
//상세페이지(질문등록)
router.post('/', quizController.postQuiz);
//상세페이지(질문체크)
router.delete('/:quizId', quizController.deleteQuiz);
//
router.get('/:quizId', quizController.getQuizById);



module.exports = router;


