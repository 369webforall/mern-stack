const http = require('http');

const server = http.createServer((req, res) => {
  res.end('hellow world');
});

server.listen(5000, () => {
  console.log('server is running on port 5000');
});
