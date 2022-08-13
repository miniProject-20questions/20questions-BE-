const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.EXPRESS_PORT;
app.use(express.json());
app.use(cors());
//https://test-cors.org

const indexRouter = require('./routers');
app.use('/api', indexRouter);
const quizRouter = require('./routers/quiz.router');
app.use('/api/quiz', quizRouter)
app.listen(port, () => {
   console.log(port, '/api로 진행해주세요');
});
