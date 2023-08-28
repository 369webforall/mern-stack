const express = require('express');
const mongoose = require('mongoose');

const router = require('./routes/user-route');
// app holds all the functionality for web server.
//OeHrPyz5fxHmPd5B
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const cors = require('cors');
require('dotenv').config();

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use(cookieParser());
app.use(express.json());

app.use('/api', router);
mongoose
  .connect(
    'mongodb+srv://admin:OeHrPyz5fxHmPd5B@cluster0.ssyacex.mongodb.net/auth?retryWrites=true&w=majority'
  )
  .then(() => {
    app.listen(8000, () => {
      console.log('local server is running in port 8000');
    });
  })
  .catch((err) => {
    console.log(err);
  });
