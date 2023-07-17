const http = require('http');

const server = http.createServer((req, res) => {
  res.end('<h1>hello world from server</h1>');
});

server.listen(5000, () => {
  console.log('server is running on port 5000');
});
