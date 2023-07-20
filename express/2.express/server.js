const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/api/v1/register', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  console.log(name, email, password);
  res.json({
    message: 'sucess',
    name,
    email,
    password,
  });
});
app.listen(PORT, () => {
  console.log('server is running in port', PORT);
});
