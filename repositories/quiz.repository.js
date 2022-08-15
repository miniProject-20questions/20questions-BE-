const { Quizes, Questions, Users } = require('../models')
const mysql = require('mysql2');

class QuizRepository{
    constructor() {}

    postQuiz = async ( userId, title, category, answer )=>{
        await Quizes.create({
            userId,
            title,
            category,
            answer
        });
         
        return;
    };

    countQuizQuestion = async ( quizId ) => {
        await Questions.count({
            where : { quizId : quizId }
        });

        return;
    }

    getQuiz = async ( quizId ) => {
        await Quizes.findAll({
            order : [['createdAt', 'DESC']]
        });
        
        return;
    };

    deleteQuiz = async (quizId, userId) => {
        await Quizes.destroy ({
            where : { quizId, userId }
        });

        return;
    };

    getQuizById = async ( quizId ) => {
        await Quizes.findById ({
            where: { quizId : quizId }
        });

        return;
    };




    
    
}

module.exports = QuizRepository