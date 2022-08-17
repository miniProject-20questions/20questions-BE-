const QuizRepository = require('../repositories/quiz.repository');
const QuestionRepository = require('../repositories/question.repository');

class QuizService {
    quizRepository;
    questionRepository;

    constructor() {
        this.quizRepository = new QuizRepository();
        this.questionRepository = new QuestionRepository();
    }

    postQuiz = async (userId, title, category, answer) => {

        // const limitCategory = await this.quizRepository

        await this.quizRepository.postQuiz(
            userId,
            title,
            category,
            answer
        );

        return '퀴즈 생성';
    };

    getQuiz = async () => {

        const result = await this.quizRepository.getQuiz();

        return result.map((quiz) => {
            quiz.dataValues.count = quiz.Questions.length
            quiz.dataValues.nickname = quiz.dataValues.User.dataValues.nickname

            delete quiz.dataValues.Questions
            delete quiz.dataValues.User

            return quiz;
        });

    };


    getQuizById = async (quizId, userId) => {

        const response = await this.checkQuizExists(quizId);
        let count = 0;
        let nickname = '';
        let guest = false;

        if (response.Questions.length !== 0) {
            count = response.Questions[0].count
        }

        nickname = response.User.dataValues.nickname

        if (response.User.dataValues.userId !== userId)
            guest = true

        const result = {
            quizId: response.quizId,
            title: response.title,
            category: response.category,
            createdAt: response.createdAt,
            answer:response.answer,
            count: count,
            nickname: nickname,
            guest: guest,
        }

        console.log(result)


        return result;
    };

    deleteQuiz = async (quizId, userId) => {

        const response = await this.checkQuizExists(quizId);
        this.checkQuizOwner(response, userId);

        const isDeleted = await this.quizRepository.deleteQuiz(quizId, userId);

        return isDeleted;
    }

    updateCategory = async (quizId, category) => {

        const result = await this.checkQuizExists(quizId);

        const isComplete = await this.quizRepository.updateCategory(quizId, category);

        return { isComplete, message: "퀴즈가 완료되었습니다" };
    }

    checkQuizOwner(response, userId) {
        if (response.User.dataValues.userId !== userId) {
            const error = new Error("UNAUTHORIZED_USER");
            error.code = 401;
            throw error;
        };
    }

    async checkQuizExists(quizId) {

        const response = await this.quizRepository.getQuizById(quizId);
        if (response.quizId === null){
            const error = new Error("NOT_FOUND_QUIZ");
            error.code = 404;
            throw error
        } else return response

    }
};




module.exports = QuizService;