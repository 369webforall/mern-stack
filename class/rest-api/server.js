const bodyParser = require('body-parser');
const express = require('express');
const route = require('./routes/idea.routes');
const app = express();

const PORT = 8080;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

route(app);

app.listen(PORT, () => {
  console.log('server is running on port', PORT);
});
