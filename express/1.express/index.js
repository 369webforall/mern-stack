const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const router = require('./UserRoutes');
const app = express();

const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
// app.get('/api/v1/', (req, res) => {
//   res.sendFile(path.join(__dirname + '/form.html'));
// });

app.get('/api/v1/', (req, res) => {
  res.json({ name: 'Dev Narayan', age: 44, contact: '123asdfadsfsdfgsfdgs' });
});

// app.get('/contact', (req, res) => {
//   res.send('<h1>This is contact page</h1>');
// });

// app.post('/api/v1/login', (req, res) => {
//   res.send(
//     `<h1>Done Mr. ${req.body.name}</h1>
//     <h2>Your email is ${req.body.email}</h2>
//     <h3>Your password is ${req.body.password}</h3>`
//   );
//   console.log(req.body);
// });

// app.post('/api/v1/login/', (req, res) => {
//   let name = req.body.name;
//   let age = req.body.age;
//   let contact = req.body.contact;
//   res.json({ success: true, name, age, contact });
// });

// server connected
app.listen(port, () => {
  console.log('server is runnning in port', port);
});
