const QuestionService = require('../services/question.service');

class QuestionsController {
    questionService = new QuestionService();

    //상세페이지(질문조회)
    getQuestions = async (req, res, next) => {
        const { quizId } = req.params;

        try{
            const questions = await this.questionService.getQuestions(quizId);

            res.status(200).json({ data: questions});
        }catch(err){
            res.status(400).send(err.message);
            return;
        }
        
    };

    //상세페이지(질문등록)
    createQuestion = async (req, res, next) => {
        const { quizId } = req.params;
        const { userId } = res.locals.user;
        const { content } = req.body;

        try{
            const result = await this.questionService.createQuestion(
                quizId,
                userId,
                content
            );

            res.status(200).json({ message: result });
        }catch(err){
            res.status(400).send(err.message);
            return;
        }
    };

    //상세페이지(질문체크)
    checkQuestion = async (req, res, next) => {
        const { quizId } = req.params;
        const { questionId } = req.params;
        const { solved } = req.body;
        const { userId } = res.locals.user;

        try{
            await this.questionService.checkQuestion(quizId, questionId, solved, userId);

            res.status(200).json({ message: "질문 OX 체크되었습니다." });
        }catch(err){
            res.status(400).send(err.message);
            return;

        }
    };
}

module.exports = QuestionsController;