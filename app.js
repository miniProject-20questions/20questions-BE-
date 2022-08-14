const express = require('express');
const { sequelize } = require("./models");
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.EXPRESS_PORT;
const indexRouter = require('./routers');

app.use(express.json());
app.use(cors());
//https://test-cors.org

// sequelize.sync({ force: true });


app.use('/api', indexRouter);

app.listen(port, () => {
   console.log(port, '/api로 진행해주세요');
});
