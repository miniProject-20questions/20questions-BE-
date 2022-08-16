const { Quizes, Questions, Users } = require('../models')
const sequelize = require("sequelize");
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
        return await Questions.count({
            where : { quizId }
        });        
    };

    // getNickname = async () => {
    //     await Users.find
    // };

    getQuiz = async (  ) => {
        return await Quizes.findAll({
            order : [['createdAt', 'DESC']],
            include: 
            [
                { 
                model: Users ,
                attributes: ['nickname'],    
                },
                { 
                model: Questions ,  
                },
            ],
            attributes: { exclude: [ 'answer', 'userId', 'updatedAt', 'Questions', 'User' ]}
        });
               
    
    };

    deleteQuiz = async (quizId, userId) => {
        return await Quizes.destroy ({
            where : { quizId, userId }
        });        
    };

    getQuizById = async ( quizId ) => {
        return await Quizes.findOne ({
            where: { quizId },
            include :
            [
                { 
                    model: Users ,
                    attributes: ['nickname'],    
                    },
                    { 
                    model: Questions,                    
                    attributes: [[sequelize.fn('max', sequelize.col('count')), 'count']],  
                    },
            ],
            attributes: { exclude: [ 'answer', 'userId', 'updatedAt', 'Questions', 'User' ]}
        });
    };




    
    
}

module.exports = QuizRepository