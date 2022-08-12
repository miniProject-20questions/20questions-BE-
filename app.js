const express = require('express');

const app = express();

const quizRouter = require('./routers/quiz.router');

app.use('/api/quiz', quizRouter)

app.listen(3000, () => console.log('Server is running on 3000'));