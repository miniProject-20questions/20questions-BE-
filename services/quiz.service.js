const UserRepository = require('../repositories/user.repository');
const QuizRepository = require('../repositories/quiz.repository');
const QuestionRepository = require('../repositories/question.repository');

class QuizService {
    userRepository;
    quizRepository;
    questionRepository;

    constructor() {
        this.quizRepository = new QuizRepository();        
        this.userRepository = new UserRepository();
        this.questionRepository = new QuestionRepository();
    }
    
    postQuiz = async (userId, title, category, answer) => {

        await this.quizRepository.postQuiz(
            userId,
            title,
            category,
            answer
        );

        return '포스트 생성';
    }

    getQuiz = async () => {        

        try {
            const result = await this.quizRepository.getQuiz();

            return res.status(200).json({ result });            
        } catch (err) {
            console.log (err);

            return res.status(500).json(err.message);
        }
    };

    getQuizById = async (req,res) => {              

        try {
            const result = await this.quizRepository.getQuizById( quizId );
            if ( result === null ) throw new Error ('존재하지 않는 퀴즈입니다.')

            return res.status(200).json({ result });
        } catch (err) {

            return res.json(err.message);
        }
    };

    deleteQuiz = async ( quizId ) => {             

        try {
            const result = await this.quizRepository.getQuizById( quizId );
            if ( result === null ) throw new Error ('존재하지 않는 퀴즈입니다.');
            if (result.userId !== userId) throw new Error('퀴즈 작성자만 퀴즈를 삭제할 수 있습니다.');
            
            const isDeleted = await this.quizRepository.deleteQuiz( quizId );
                        
            return res.status(200).json('퀴즈가 삭제되었습니다.');            
        } catch (err) {
            console.log (err);

            return res.status(400).json(err.message);
        }
    };

}

module.exports = QuizService;