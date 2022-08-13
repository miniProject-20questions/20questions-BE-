const QuizRepository = require('../repositories/quiz.repository');

class QuizService {
    quizRepository;

    constructor() {}
    
    postQuiz = async (title, category, answer) => {

        await this.quizRepository.postQuiz(
            id,
            title,
            category,
            answer
        );

        return '포스트 생성';
    }

}

module.exports = QuizService;