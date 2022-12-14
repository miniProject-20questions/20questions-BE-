const express = require('express');
const { sequelize } = require("./models");
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.EXPRESS_PORT;
const indexRouter = require('./routers');

const whitelist = ["http://localhost:3000", "http://prac-ye.s3-website.ap-northeast-2.amazonaws.com"];
// const whitelist = ["http://prac-ye.s3-website.ap-northeast-2.amazonaws.com"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log(origin);
      callback(new Error("NOT_ALLOWED_ORIGIN"));
    }
  },
};

app.use(express.json());
app.use(cors(corsOptions));
// app.use(cors());
//https://test-cors.org

// sequelize.sync({ force: true });


app.use('/api', indexRouter);

app.listen(port, () => {
   console.log(port, '/api로 진행해주세요');
});
