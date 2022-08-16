const QuizService = require('../services/quiz.service');
const joi = require('joi')

class QuizController {
    quizService;

    constructor() {
        this.quizService = new QuizService();
    }

    // 퀴즈 포스트
    postQuiz = async (req, res) => {
        const { title, category, answer } = req.body;
        const { userId } = res.locals.user;

        try {
            await joi.object({
                title: joi.string().required(),
                category: joi.number().min(1).max(6).required(),
                answer: joi.string().required(),
                userId: joi.number().required(),
            })
                .validateAsync({ title, answer, category, userId });

            const result = await this.quizService.postQuiz(userId, title, category, answer);

            return res.status(200).json(result);
        } catch (err) {

            return res.status(400).send(err.message);;
        }
    };

    //퀴즈 전체 조회
    getQuiz = async (req, res) => {

        try {
            const result = await this.quizService.getQuiz();

            return res.status(200).json({ result });
        } catch (err) {
            console.log(err);

            return res.status(404).json(err.message);
        }
    };

    //퀴즈 상세 조회
    getQuizById = async (req, res) => {
        const { quizId } = req.params;
        const { userId } = res.locals.user;

        try {
            await joi
                .object({
                    quizId: joi.number().required(),
                    userId: joi.number().required()
                })
                .validateAsync({ quizId, userId });
        } catch (err) {
            return res.json(err.message);
        }
        try {
            const result = await this.quizService.getQuizById(quizId, userId);
            return res.json(result);
        } catch (err) {
            return res.json(err.message, err.code);
        }
    };

    //퀴즈 삭제
    deleteQuiz = async (req, res) => {
        const { userId } = res.locals.user;
        const { quizId } = req.params;

        try {
            await joi
                .object({
                    quizId: joi.number().required(),
                    userId: joi.number().required(),
                })
                .validateAsync({ quizId, userId });

            const result = await this.quizService.deleteQuiz(quizId, userId);

            return res.status(200).json(result);
        } catch (err) {
            console.log(err);

            return res.status(500).json(err.message);
        }
    };

    //퀴즈 완료
    updateCategory = async (req, res) => {
        const { quizId } = req.params;
        const { category } = req.body;

        try {
            await joi
                .object({
                    quizId: joi.number().required(),
                    category: joi.number().min(7).max(7).required(),
                })
                .validateAsync({ quizId, category });

            const result = await this.quizService.updateCategory(quizId, category);

            return res.status(200).json(result);
        } catch (err) {
            console.log(err);

            return res.status(500).json(err.message);
        }
    }
}

module.exports = QuizController;