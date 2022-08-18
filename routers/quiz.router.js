const express = require('express');
const router = express.Router();
const authMiddlewares = require('../middlewares/auth-middleware');

const QuizController = require('../controllers/quiz.controller');
const quizController = new QuizController();

//메인페이지(퀴즈 조회)
router.get('/', quizController.getQuiz);
//메인페이지(퀴즈 등록)
router.post('/', authMiddlewares, quizController.postQuiz);
//상세페이지(퀴즈 삭제)
router.delete('/:quizId', authMiddlewares, quizController.deleteQuiz);
//상세페이지 (퀴즈 상세 조회)
router.get('/:quizId', authMiddlewares, quizController.getQuizById);
//상세페이지 (퀴즈 카테고리 수정)
router.patch('/:quizId', authMiddlewares, quizController.updateCategory);


module.exports = router;


