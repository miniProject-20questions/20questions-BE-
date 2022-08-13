const express = require('express');

const app = express();
app.use(express.json());

const quizRouter = require('./routers/quiz.router');
const indexRouter = require('./routers');

app.use('/api', indexRouter);
app.use('/api/quiz', quizRouter)

app.listen(3000, () => console.log('Server is running on 3000'));