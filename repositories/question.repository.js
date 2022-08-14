const { Questions, Quizes } = require('../models');

class QuestionRepository {

    //해당 퀴즈의 userId 가져오기
    compareQuizer = async (quizId) => {
        const user = await Quizes.findOne({
            attributes: ['userId'],
            where: {quizId},
            raw: true,
        })

        return user;
    }

    // 해당 퀴즈의 전체 질문 조회(count 오름차순)
    findAllQuestions = async (quizId) => {
        const questions = await Questions.findAll({
            where: {quizId},
            order: [['count', 'ASC']],
        })

        return questions;
    }

    //이전 질문의 solved 값 가져오기
    checkSolved = async (quizId) => {
        const exSolved = await Questions.findOne({
            attributes: ['solved'],
            where: { quizId },
            order: [['count', 'DESC']],
            raw: true,
        })

        return exSolved;
    }

    //이전 질문의 count 값 가져오기
    findMaxCount = async (quizId) => {
        const maxCount = await Questions.findOne({
            attributes: ['count'],
            where: { quizId },
            order: [['count', 'DESC']],
            raw: true,
        })

        return maxCount;
    }

    //퀴즈에 질문 등록하기
    createQuestion = async (quizId, content, count) => {

        await Questions.create({
            quizId,
            content,
            count,
        })

        return;
    }

    //해당 퀴즈의 정답 가져오기
    compareAnswer = async (quizId) => {

        const quiz = await Quizes.findOne({
            attributes: ['answer'],
            where: {quizId},
            raw: true,
        })

        return quiz;
    }


    //상세페이지(질문체크)
    checkQuestion = async (questionId, solved) => {
        await Questions.update(
            { solved },
            { where: { questionId }}
        );

        return;
    }

}

module.exports = QuestionRepository;