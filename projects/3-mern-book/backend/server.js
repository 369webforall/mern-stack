const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = require('./routes/book-router');
require('dotenv').config();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/books', router);
mongoose
  .connect(process.env.URL)
  .then(() => {
    console.log('mongodb is connected');
  })
  .then(() =>
    app.listen(process.env.PORT, () => {
      console.log(`server is connected to the prort ${process.env.PORT}`);
    })
  )
  .catch((err) => console.log(err));
