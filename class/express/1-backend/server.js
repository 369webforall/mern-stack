const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const PORT = 8080;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/api/v1/users', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
console.log(name, email, password)
  res.status(200).send({ name, email, password });
});
app.listen(PORT, () => {
  console.log('server is running in port', PORT);
});


