const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = 8080;
app.use(express.json());
require('./routes/idea.routes')(app);

app.listen(PORT, () => {
  console.log('server is running in port', PORT);
});
