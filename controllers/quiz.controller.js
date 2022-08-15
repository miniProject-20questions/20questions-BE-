const QuizService = require('../services/quiz.service');
const joi = require('joi')

class QuizController {
    quizService;

    constructor() {
        this.quizService = new QuizService();
    }
    
    // 퀴즈 포스트
    postQuiz = async (req,res) => {
        const { title, category, answer } = req.body;        
        const { userId } = res.locals.user;
        

        try{
            await joi.object ({
                title: joi.string().required(),
                category: joi.number().required(),
                answer: joi.string().required(),
                userId: joi.number().required(),
        });

            const result = await this.quizService.postQuiz(userId, title, category, answer);

            return res.status(200).json( result );
        }catch(err){
            
            return res.status(400).send(err.message);;
        }
    };

    //퀴즈 전체 조회
    getQuiz = async (req,res) => {              

        try {
            const result = await this.quizService.getQuiz();

            return res.status(200).json({ result });            
        } catch (err) {
            console.log (err);

            return res.status(500).json(err.message);
        }
    };

    //퀴즈 상세 조회
    getQuizById = async (req,res) => {   
        const { quizId } = req.params;

        try {
            await joi
                .object({
                    quizId: joi.number().required(),
                })
                .validateAsync({ quizId });

            const result = await this.quizService.getQuizById(quizId);

            return res.json(result);
        } catch (err) {
            return res.json(err.message);
        }
    };

    //퀴즈 삭제
    deleteQuiz = async (req,res) => {    
        const { userId } = res.locals.user;
        const { quizId } = req.params;
            

        try {
            await joi
            .object ({
                quizId: joi.number().required(),
                userId: joi.number().required(),
            })
            .validateAsync({ quizId, userId });


            const result = await this.quizService.deleteQuiz( quizId, userId );

            return res.status(200).json(result);            
        } catch (err) {
            console.log (err);

            return res.status(500).json(err.message);
        }
    };
}

module.exports = QuizController;