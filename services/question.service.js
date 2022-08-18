const QuestionRepository = require('../repositories/question.repository');

class QuestionService {
    questionRepository = new QuestionRepository();

    //상세페이지(질문조회)
    getQuestions = async (quizId) => {
        const questions = await this.questionRepository.findAllQuestions(quizId);


        return questions.map((question) => {
            return {
                quizId: question.dataValues.quizId,
                questionId: question.dataValues.questionId,
                content: question.dataValues.content,
                solved: question.dataValues.solved,
                count: question.dataValues.count,
                answer: question.dataValues.Quize.dataValues.answer
            }


        });
    };

    //상세페이지(질문등록)
    createQuestion = async (quizId, userId, content) => {

        // content 입력 유무 확인
        if (content === undefined) {
            const error = new Error("BAD_REQUEST");
            error.code = 400;
            throw error
        }


        const quiz = await this.questionRepository.compareQuiz(quizId);


        // 질문에 연결된 퀴즈 유무 확인
        if (quiz === null) {
            const error = new Error("NOT_FOUND_QUIZ");
            error.code = 404;
            throw error
        }

        // 출제자와 질문자 비교하여 출제자는 질문 등록 못하게 하기
        if (quiz.userId === userId) {
            const error = new Error("UNAUTHORIZED_USER");
            error.code = 401;
            throw error
        }



        const exQuestion = await this.questionRepository.findExQuestion(quizId);


        // 완료된 퀴즈 확인
        if (exQuestion !== null) {
            if (quiz.answer === exQuestion.content) {
                const error = new Error("FORBIDDEN_END");
                error.code = 403;
                throw error
            }

            // 이전 질문 solved 값 없으면 질문등록 못하게 하기 (첫번째 질문일 경우, 조건문 PASS)
            if (exQuestion.solved === null) {
                const error = new Error("FORBIDDEN_SOL");
                error.code = 403;
                throw error
            }
        }



        // 질문 또는 정답 등록하기 (count는 이전 질문의 count + 1 / count 20까지 등록 가능)
        let count = 1;

        if (exQuestion) {
            count = exQuestion.count + 1;
        } else count = 1;

        if (count > 20) {
            const error = new Error("FORBIDDEN_20");
            error.code = 403;
            throw error
        }

        await this.questionRepository.createQuestion(quizId, content, count);

        let message = '';
        if(content === quiz.answer) {
            message = "SUCCESS_ANSWER"
            return message;
        } else {
            message = "SUCCESS_QUESTION"
            return message;
        }

    }


    //상세페이지(질문체크)
    checkQuestion = async (quizId, questionId, solved, userId) => {

        // solved 입력 유무 확인
        if (solved === undefined) {
            const error = new Error("BAD_REQUEST");
            error.code = 400;
            throw error
        }

        // 출제자와 유저가 동일한 경우 질문 체크 가능
        const quiz = await this.questionRepository.compareQuiz(quizId);

        if (quiz.userId !== userId) {
            const error = new Error("UNAUTHORIZED_USER");
            error.code = 401;
            throw error
        }


        const question = await this.questionRepository.findQuestion(questionId)

        // 질문 유무 확인
        if (question === null) {
            const error = new Error("NOT_FOUND_QUE");
            error.code = 404;
            throw error
        }

        // solved 값이 이미 있는 경우 질문 중복체크 금지
        if (question.solved !== null) {
            const error = new Error("FORBIDDEN_RE_SOL");
            error.code = 403;
            throw error
        }




        await this.questionRepository.checkQuestion(questionId, solved);

        return;
    }

}

module.exports = QuestionService;