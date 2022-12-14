const { Quizes, Questions, Users } = require('../models')
const sequelize = require("sequelize");
const mysql = require('mysql2');

class QuizRepository {
    constructor() { }

    postQuiz = async (userId, title, category, answer) => {
        try {
            await Quizes.create({
                userId,
                title,
                category,
                answer
            });
        } catch (err) {
            const error = new Error("FAILD_SQL");
            error.code = 405;
            throw error
        };
    };

    getQuiz = async () => {
        try{
            const response = await Quizes.findAll({
                order: [['createdAt', 'DESC']],
                include:
                    [
                        {
                            model: Users,
                            attributes: ['nickname'],
                        },
                        {
                            model: Questions,
                        },
                    ],
                attributes: { exclude: ['answer', 'userId', 'updatedAt', 'Questions', 'User'] }
            });
            
            return response;

        } catch (err) {
            const error = new Error("FAILD_SQL");
            error.code = 405;
            throw error
        };
    };

    deleteQuiz = async (quizId, userId) => {
        try {
            return await Quizes.destroy({
                where: { quizId, userId }
            });
        } catch (err) {
            const error = new Error("FAILD_SQL_DEL");
            error.code = 405;
            throw error
        };
    };

    getQuizById = async (quizId) => {
        try {
            const response = await Quizes.findOne({
                where: { quizId },
                include:
                    [
                        {
                            model: Users,
                            attributes: ['nickname', 'userId'],
                        },
                        {
                            model: Questions,
                            attributes: [[sequelize.fn('max', sequelize.col('count')), 'count']],
                        },
                    ],
                attributes: { exclude: [ 'userId', 'updatedAt', 'Questions', 'User'] }
            });

            return response.dataValues;
        } catch (err) {
            const error = new Error("FAILD_SQL");
            error.code = 405;
            throw error
        };
    };

    updateCategory = async (quizId, category) => {
        try {
            return await Quizes.update({
                category
            },
                { where: { quizId: quizId } },
            )
        } catch (err) {
            const error = new Error("FAILD_SQL_UP");
            error.code = 405;
            throw error
        };
    };

}

module.exports = QuizRepository