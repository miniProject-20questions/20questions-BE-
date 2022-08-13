const e = require('express');
const joi = require('joi');
const quizService = require('../services/quiz.service');

class QuizController {
    quizService;

    constructor() {
        this.quizService = new this.quizService();
    }

    postQuiz = async (req,res) => {
        const { title, category, answer } = req.body;

        try {
            const result = await this.quizService.postQuiz();

            return res.status(200).json({ message : "퀴즈가 등록되었습니다" });            
        } catch (err) {
            console.log (err);

            return res.status(500).json(err.message);
        }
    };
}

module.exports = QuizController;