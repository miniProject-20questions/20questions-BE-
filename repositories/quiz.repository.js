const { Quiz } = require('../models')

class QuizRepository{
    constructor() {}

    postQuiz = async ( id, title, category, answer )=>{
        await Quizes.create({
            id,
            title,
            category,
            answer
        });
         
        return;
    };
    
}

module.exports = QuizRepository