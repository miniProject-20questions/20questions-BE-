const express = require('express');
const router = express.Router();
const authMiddlewares = require('../middlewares/auth-middleware');

const QuestionsController = require('../controllers/question.controller');
const questionsController = new QuestionsController();

router.use(authMiddlewares)

//상세페이지(질문조회)
router.get('/:quizId', questionsController.getQuestions);
//상세페이지(질문등록)
router.post('/:quizId/', questionsController.createQuestion);
//상세페이지(질문체크)
router.patch('/:quizId/:questionId', questionsController.checkQuestion);

module.exports = router;