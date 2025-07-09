const http = require('http');
const url = require('url');

// A simple HTTP server with a potential vulnerability
http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const name = queryObject.name || "World";

  // Potential XSS vulnerability
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`<h1>Hello, ${name}</h1>`);
}).listen(8080);
