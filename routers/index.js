const express = require('express');
const router = express.Router();

const userRouter = require('./user.router');
const quizRouter = require('./quiz.router');
const questionRouter = require('./question.router');

router.use('/auth', userRouter);
router.use('/quiz', quizRouter);
router.use('/question', questionRouter);

module.exports = router;
