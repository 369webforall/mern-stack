const http = require('http');

const PORT = 8000;
const myServer = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('This is home page');
  } else if (req.url === '/about') {
    res.end('This is about page');
  } else if (req.url === '/contact') {
    res.end('This is contact page for contacting us');
  } else {
    res.end('404 page not found');
  }
});

myServer.listen(PORT, () => {
  console.log('server is running on port', PORT);
});
