const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

const mongoose = require('mongoose');

const router = require('./routes/user-routes');

const User = require('./models/userModel');
dotenv.config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/', router);
mongoose
  .connect(process.env.URI)
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(
        'database is connected and running in port',
        process.env.PORT
      );
    });
  })
  .catch((err) => console.log('error', err));

//create data
