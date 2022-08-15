const { Questions, Quizes } = require('../models');

class QuestionRepository {


    // 해당 퀴즈의 전체 질문 조회(count 오름차순)
    findAllQuestions = async (quizId) => {
        const questions = await Questions.findAll({
            where: { quizId },
            order: [['count', 'ASC']],
        })

        return questions;
    }


    //해당 퀴즈의 userId, answer 가져오기
    compareQuiz = async (quizId) => {
        const result = await Quizes.findOne({
            attributes: ['userId', 'answer'],
            where: { quizId },
            raw: true,
        })

        return result;
    }


    //이전 질문의 count, content, solved 값 가져오기
    findExQuestion = async (quizId) => {
        const exQuestion = await Questions.findOne({
            attributes: ['count', 'content', 'solved'],
            where: { quizId },
            order: [['count', 'DESC']],
            raw: true,
        })

        return exQuestion;
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


    //해당 질문의 solved와 content 값을 questionId로 찾기
    findQuestion = async (questionId) => {
        const question = await Questions.findOne({
            attributes: ['content', 'solved'],
            where: { questionId },
            raw: true,
        })

        return question;
    }


    //상세페이지(질문체크)
    checkQuestion = async (questionId, solved) => {
        await Questions.update(
            { solved },
            { where: { questionId } }
        );

        return;
    }

}

module.exports = QuestionRepository;