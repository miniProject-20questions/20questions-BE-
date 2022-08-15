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
        return await Quizes.findAll({
            order : [['createdAt', 'DESC']]
        });       
    
    };

    deleteQuiz = async (quizId, userId) => {
        return await Quizes.destroy ({
            where : { quizId, userId }
        });        
    };

    getQuizById = async ( quizId ) => {
        return await Quizes.findOne ({
            where: { quizId }
        });
    };




    
    
}

module.exports = QuizRepository