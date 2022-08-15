const QuestionRepository = require('../repositories/question.repository');

class QuestionService {
    questionRepository = new QuestionRepository();

    //상세페이지(질문조회)
    getQuestions = async (quizId) => {
        const questions = await this.questionRepository.findAllQuestions(quizId);

        return questions.map((question) => {
            return {
                quizId: question.quizId,
                questionId: question.questionId,
                content: question.content,
                solved: question.solved,
                count: question.count,
            };
        });
    };

    //상세페이지(질문등록)
    createQuestion = async (quizId, userId, content) => {

        // 출제자와 질문자 비교하여 출제자는 질문 등록 못하게 하기
        const user = await this.questionRepository.compareQuizer(quizId);


        if (user.userId === userId) throw new Error("퀴즈 출제자는 질문을 등록할 수 없습니다."); 

        // 이전 질문 solved 값 없으면 질문등록 못하게 하기 (첫번째 질문일 경우, 조건문 PASS)
        const exQuestions = await this.questionRepository.findAllQuestions(quizId);


        if (exQuestions.length) {
            const exSolved = await this.questionRepository.checkSolved(quizId);

            if (exSolved.solved === null) throw new Error("퀴즈 출제자가 이전 질문에 아직 OX 답을 하지 않았습니다.");
        }

        // 질문 또는 정답 등록하기 (count는 이전 질문의 count + 1)
        const maxCount = await this.questionRepository.findMaxCount(quizId);

        let count = 1;

        if (maxCount) {
            count = maxCount.count + 1;
        } else count = 1;

        await this.questionRepository.createQuestion(quizId, content, count);

        // 정답 비교하기
        const quiz = await this.questionRepository.compareAnswer(quizId);

        let message = '';
        if (content === quiz.answer) {
            message = "정답입니다!"
            return message;
        } else {
            message = "질문이 등록되었습니다."
            return message;
        }
    }


    //상세페이지(질문체크)
    checkQuestion = async (quizId, questionId, solved, userId) => {

        // 출제자와 유저가 동일한 경우 질문 체크 가능
        const user = await this.questionRepository.compareQuizer(quizId);

        if (user.userId !== userId) throw new Error("퀴즈 출제자만 질문 OX 체크를 할 수 있습니다."); 

        await this.questionRepository.checkQuestion(questionId, solved);

        return;
    }

}

module.exports = QuestionService;