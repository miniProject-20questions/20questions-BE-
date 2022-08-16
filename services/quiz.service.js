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

    getQuiz = async (  ) => {        

        const result = await this.quizRepository.getQuiz();        

        return result.map((quiz)=> { 
            quiz.dataValues.count = quiz.Questions.length
            quiz.dataValues.nickname = quiz.dataValues.User.dataValues.nickname
                  
            delete quiz.dataValues.Questions
            delete quiz.dataValues.User
            
            return quiz;
        });
            
    };
    

    getQuizById = async ( quizId, userId ) => {

        const result = await this.quizRepository.getQuizById( quizId );
        if ( result === null ) throw new Error ('존재하지 않는 퀴즈입니다.')       

        result.dataValues.count = result.dataValues.Questions[0].dataValues.count
        result.dataValues.nickname = result.dataValues.User.dataValues.nickname

        if (result.dataValues.User.dataValues.userId !== userId ) {
            result.dataValues.guest = true
        } else {result.dataValues.guest = false}
                
        delete result.dataValues.Questions
        delete result.dataValues.User        
               
        return result;        
    };

    deleteQuiz = async ( quizId, userId ) => {             

        const result = await this.quizRepository.getQuizById( quizId );
        if ( result === null ) throw new Error ('존재하지 않는 퀴즈입니다.');
        if (result.userId !== userId) throw new Error('퀴즈 작성자만 퀴즈를 삭제할 수 있습니다.');
            
        const isDeleted = await this.quizRepository.deleteQuiz( quizId, userId );
                        
        return isDeleted;
        }

    updateCategory = async ( quizId, category ) => {

        const result = await this.quizRepository.updateCategory ( quizId );
        if ( result === null ) throw new Error ('존재하지 않는 퀴즈입니다.');
            
        const isComplete = await this.quizRepository.updateCategory( quizId, category );
                        
        return {isComplete, message: "퀴즈가 완료되었습니다" };
        }
};




module.exports = QuizService;